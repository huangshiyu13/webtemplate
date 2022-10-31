//全站公共js库
$(document).ready(function(e) {
    //section的首尾增加选择器
    $(".section").each(function(index, element) {
        $(this).children().first().addClass("first");
		$(this).children().last().addClass("last");
    });
});

var common = {
	//返回浏览器宽高
	getViewSize : function (){
		var de=document.documentElement;
		var db=document.body;
		var viewW=de.clientWidth==0 ? db.clientWidth : de.clientWidth;
		var viewH=de.clientHeight==0 ? db.clientHeight : de.clientHeight;
		/* 
			返回一个数组参数，第一个是浏览器宽度，第二个是浏览器宽度
			调用方法：
			var screenW = getViewSize()[0]; // 浏览器宽度
			var screenH = getViewSize()[1]; // 浏览器高度
		*/
		return Array(viewW,viewH);
	},
	
	//基于当前界面的水平垂直居中
	vhCenter : function (para){
		var screenW = $(para).parent().width(); // 浏览器宽度
		var screenH = $(para).parent().height(); // 浏览器高度
		
		var paraW = $(para).width(); // 元素宽度
		var paraH = $(para).height(); // 元素高度
		
		var scrollTop = $(document).scrollTop(); //浏览器滚动条顶部值
		var scrollLeft = $(document).scrollLeft(); //浏览器滚动条左边距值
		
		var top = 0;
		var left = 0;
		
		//根据浏览器宽高来设定指定容器针对浏览器视图进行居中
		if(screenW < paraW){
			left = 0;
		}else{
			left = (screenW - paraW )/2 + scrollLeft;
		}
		
		if(screenH < paraH){
			top = 0;
		}else{
			top = (screenH - paraH )/2 + scrollTop;
		}
		
		$(para).css({
			"position" : "absolute",
			"left" : left,
			"top" : top
		});
	}
	
}


var xlc = {
	/**鼠标移入背景滑动
		文档格式
		<ul id="jq_nav">
			<li class="jq_focus"></li>
			<li id="jq_navbg"></li>
		<ul>
		obj 为ul对象 direct 指定'上下'或'左右'移动 easing 为动画 "easeOutElastic"
	*/
	navHover : function(obj , direct , easing){
		var nav = $(obj); // 导航
		
		var navChildren = nav.children().not("#jq_navbg");
		var navbg = $(obj + " > #jq_navbg"); //导航背景
		var focusIndex = $(obj + " > .jq_focus").index();
		
		navChildren.mouseover(function(e) { //鼠标移入移出时变换位置
			var index = $(this).index();
			setPositionNum(index);
			
			navChildren.eq(focusIndex).removeClass("focus");
			navChildren.eq(index).addClass("focus");
		}).mouseleave(function(e) {
			var index = $(".jq_focus").index();
			setPositionNum(index);
			
			$(this).removeClass("focus");
			navChildren.eq(focusIndex).addClass("focus");
		});
		
		$(document).ready(function(){
			setPositionNum (focusIndex);
		});
		function  setPositionNum(index){
			if(direct == "left"){
				//设置左右移动
				var leftPosition = 0;
				for (var i = 0 ; i <= index ; i++){
					if(i == index){
						var lastWidth = (navChildren.eq(i).outerWidth(true) - navbg.outerWidth(true)) / 2;
						leftPosition += lastWidth;
					}else{
						leftPosition += parseInt(navChildren.eq(i).outerWidth(true)); // 循环获取要移动的距离
					}
				}
				$(navbg).stop().animate({"left" : leftPosition} , 800,easing);	
			}else{
				//设置上下移动
				var topPosition = 0;
				for (var i = 0 ; i <= index ; i++){
					if(i == index){
						var lastHeight = (parseInt(navChildren.eq(i).outerHeight(true)) - parseInt(navbg.outerHeight(true)))/2;
						topPosition += lastHeight ;
					}else{
						topPosition += parseInt(navChildren.eq(i).outerHeight(true)); // 循环获取要移动的距离
					}
				}
				$(navbg).stop().animate({"top" : topPosition},800,easing);
			}
		}
	},
	/**弹出框，基于jquery的load方法
	*/
	/*
		关闭弹出窗
		调用 xlc.closeDialog();
	*/
	closeDialog :function(){
		$("#js_dialogContainer").hide(); // 弹出框里面清除内容并隐藏
		$(".zzdiv").fadeOut(200); // 遮罩隐藏
	},
	dialog : function(url , submitFn , callbackFn){
		var closeDialog ={
			/* 
			关闭弹出框
				方法内调用 closeDialog.closeDialog();
			*/
			closeDialog : function(){ 
				$("#js_dialogContainer").hide(); // 弹出框里面清除内容并隐藏
				$(".zzdiv").fadeOut(200); // 遮罩隐藏
			}
		} 
		
		var len = $("#js_dialogContainer").length; // 获取弹出框的数量
		var zzLen = $(".zzdiv").length; // 遮罩数量
		
		/*初始化*/
		/*1.如果弹出框容器在界面里面没有，则新增一个弹出框容器*/
		if(len <= 0){
			var contain = $("<div class='dialogContainer' id='js_dialogContainer'></div>");
			$("body").append(contain);
		}
		
		/*1.如果遮罩在界面里面没有，则新增遮罩*/
		if(zzLen <= 0){
			var zz = $("<div class='zzdiv'></div>");
			$("body").append(zz);
			
		}
		
		//关闭弹出框
		$(".js_close").live("click",function(){
			closeDialog.closeDialog(); // 关闭弹出框
		});
		
		//弹出框提交
		$(".js_submit").live("click",function(){
			//回调函数，弹出框弹出之后执行的方法
			if ($.isFunction(submitFn)) {
				submitFn.apply(this);
			}
		});
		
		//弹出框内容加载，根据传进来的url来改变弹出框的内容
		$("#js_dialogContainer").load(url,function(){
			//回调函数，弹出框弹出之后执行的方法
			if ($.isFunction(callbackFn)) {
				callbackFn.apply(this);
			}
			
			//弹出框水平垂直居中
			common.vhCenter("#js_dialogContainer");
			
			//弹出框渐显
			$("#js_dialogContainer").fadeIn(200);
			//遮罩渐显
			$(".zzdiv").fadeIn(200);
			
			//浏览器改变大小重定位弹出框
			$(window).resize(function(e) {
				common.vhCenter("#js_dialogContainer");
			});
			
			//浏览器滚动重定位弹出框
			$(window).scroll(function(e) {
				common.vhCenter("#js_dialogContainer");
			});
			
		});
		
	},
	
	//轮播
	tabList : function(container_slide , events , focusClass , autoPlay , autoTime){
		
		/*var defaults = {
			container_slide : // 轮播最外层的div容器
			events : "click", // 指示器切换时的事件
			focuclass : "focus", // 指示器的选中状态class名称
			autoPlay : false, // 是否自动播放
			autoTime : 4000 // 自动播放时间
		}*/
		
		var slideWrap_items = $(container_slide).find(".js_slideWrap"); //轮播焦点容器
		var slideTip = $(container_slide).find(".js_slideTip"); // 轮播指示器容器
		var tabListFn ={
			changeFn : function(index){//切换方法
				//指示器切换
				slideTip.children().eq(index).addClass(focusClass).siblings().removeClass(focusClass);
				
				//焦点图切换
				slideWrap_items.children().eq(index).stop(true,true).fadeIn(300,function(){
					slideWrap_items.children().eq(index).find(".p1").animate({"margin-left" : "0%"} , 1200 , "easeOutElastic");
					slideWrap_items.children().eq(index).find(".p2").animate({"margin-left" : "0%"} , 800 , "easeOutElastic");
				}).siblings().fadeOut(function(){
					slideWrap_items.children().eq(index).siblings().find("p").stop().css({"margin-left" : "100%"});
				});
				var src = slideWrap_items.children().eq(index).find("a > img").attr("data-imgsrc");
				if(src != "undefined" ){
					slideWrap_items.children().eq(index).find("a > img").attr("src" , src);
				}
			}
		}
		
		//初始化
		//初始化1.选项卡第一个标题增加选中状态
		//初始化2.选项卡对应的第一个内容块显示,其他隐藏
		var index = 0 ; // 用来定位当前显示第几张焦点图
		slideWrap_items.children().eq(0).show();
		tabListFn.changeFn(index);
		
		
		var itemlen = slideWrap_items.children().length; // 根据焦点图长度来进行第一个和最后一个焦点图时的处理
		var autoPlay = autoPlay; // 如果为true,则自动播放,否则不自动播放
		index = 1 ; // 自动轮播时,会把第一张也计算进去,所以自动的数量从1开始
		
		//如果为true则自动播放
		if(autoPlay){
			var picTimer;
			//鼠标滑上焦点图时停止自动播放，滑出时开始自动播放
			$(container_slide).hover(function() {
				clearInterval(picTimer);
			},function() {
				picTimer = setInterval(function() {
					tabListFn.changeFn(index);
					index++;
					if(index == itemlen) {index = 0;}
				},autoTime); //autoTime代表自动播放的间隔，单位：毫秒
			}).trigger("mouseleave");
		}
		
		// 上一个和下一个的切换
		$(container_slide).find(".js_last").click(function(){
			index--;
			if(index < 0){
				index = itemlen -1 ;
			}
			tabListFn.changeFn(index);
		});
		
		$(container_slide).find(".js_next").click(function(){
			index++;
			if(index >= itemlen){
				index = 0;
			}
			tabListFn.changeFn(index);
		});
		
		//鼠标事件,进行切换
		//指示器事件进行相应的切换
		slideTip.children().bind(events ,function(){
			index = $(this).index();
			tabListFn.changeFn(index);
		});
		
	},
	
	//全选全不选，para 是全选按钮，selectClass 为带选中标志的选择框，onselect 为选中后添加选中标志 , selectAll("#selectAll",".jq_Select","jq_onselect" , menuState);
	selectAll : function ( para, selectClass, onselect ,  callbackEvent) {
		$(para).live("change", function () {
			var flag = true; //复选框全部处于选中状态的时候，为true
			
			$(selectClass).each(function () {//遍历所有的复选框，判断复选框的选中状态
				if(!$(this).prop("disabled")){
					if (!$(this).prop("checked") || !$(this).hasClass(onselect)) {
						flag = false;
					}
				}
			});
			
			if (flag) {
				//如果全部是选中的
				$(selectClass).each(function(index, element) {
					if(!$(this).prop("disabled")){
						$(selectClass).prop("checked", false).removeClass(onselect); //则全部取消选择
					}
                });
				$(para).prop("checked", false);
			} else {
				//如果全部是选中的
				$(selectClass).each(function(index, element) {
					if(!$(this).prop("disabled")){
						$(this).prop("checked", true).addClass(onselect); ; //只要不是全部选择的，则把所有的复选框都选中
					}
                });
				
				$(para).prop("checked", true);
			}
	
			if ($.isFunction(callbackEvent)) {
				callbackEvent(); //回调函数，这里用来处理点击后的事件
			}
		});
	},
	
	//把某个元素变为fixed
	setFixed : function(para,options){
		/*默认参数*/
		var defaultOptions = {
			para : $(para),
			addclassname : "fixed" ,
			parentClass : "isfixed"
		}
		var obj = $.extend(defaultOptions,options);
		_this = obj.para;
		
		obj.para.each(function(){
			var _this = $(this); // 需要固定位置的选择器
			var	_top = parseInt(_this.offset().top); // 获取对象的顶部距离
			var _thisHeight = parseInt(_this.outerHeight()); // 获取对象的高度
			var _parentPaddingTop = parseInt(_this.parent().css("paddingTop")); // 获取父元素的paddingtop
			
			$(window).scroll(function(e) {
				
            	var topScroll = parseInt($(window).scrollTop()); // 滚动时获取浏览器滚动条高度
				if(topScroll > _top){ // 如果滚动条高度大于对象顶部距离,则让对象变成固定定位
					_this.addClass(obj.addclassname);
					_this.parent().addClass(obj.parentClass );
				}else{ // 否则为相对定位
					_this.removeClass(obj.addclassname);
					_this.parent().removeClass(obj.parentClass );
				}
        	});
		});
		
	},
	
	//返回顶部 需要单独给 .gotop 写样式
	gotoTop : function(){
		var goToKength = $("#js_gotop").length;
		var topScroll = $(window).scrollTop();
		
		if(goToKength <= 0){
			var gotop = $("<span class='gotop' id='js_gotop'></span>");
			gotop.appendTo("body");
		}
		
		startGotop(topScroll);
		$(window).scroll(function(){
			startGotop();
		});
		
		//点击跳转到顶部
		$("#js_gotop").click(function(){
			$("body,html").animate({scrollTop:0},300);
		});
		
		//返回顶部隐藏显示方法
		function startGotop(scrollTop){
			scrollTop = $(window).scrollTop();
			if (scrollTop > 100){
				$("#js_gotop").fadeIn(500);
			}
			else{
				$("#js_gotop").fadeOut(500);
			}
		}
	},
	//输入框输入提示
	inputTip :function (){
		var textIpt = $("input[type='text']");
		textIpt.each(function(){
			if(!$(this).hasClass("js_notip")){
				$(this).attr("autocomplete","off");
				var value = $(this).val();
				$(this).blur(function(e) {
					if($(this).val() == "" || $(this).val() == " " ){
						$(this).val(value);
					}
				}).focus(function(){
					if($(this).val() == "" || $(this).val() == " " || $(this).val() == value){
						$(this).val("");
					}
				});
			}
		});
	},
	//选项卡切换
	/*
		tabTitle 选项卡容器
		tabContainer 选项卡对应的内容容器
		events 出发切换的事件
		focusClass 选中的class名称
	*/
	tabChange : function(tabTitle , tabContainer , events , focusClass){
		$(tabContainer).children().eq(0).show().siblings().hide(); // 选项卡内容显示第一个,其他隐藏
		$(tabTitle).children().bind(events,function(){ // 切换事件
			var index = $(this).index(); // 获取当前点击的选项卡索引值
			if(focusClass == undefined){
				focusClass = "focus";
			}else{ 
				$(tabTitle).children().eq(index).addClass(focusClass).siblings().removeClass(focusClass); //对应的选项卡添加选中class
			}
			$(tabContainer).children().eq(index).show().siblings().hide(); // 索引值对应的选项卡内容显示,其他隐藏
		});
	},
	
	//鼠标移动改变元素位置
	changePosition : function (para , Range) {
		var mousex;
		var mousey;
		
		$(para).each(function(){
			var para = $(this);
			var left = parseInt(para.css("left"));
			var top = parseInt(para.css("top"));
			
			$("body").mousemove(function(e) {
				var e = e || window.event;
				var mousex = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft ;
				var mousey = e.clientY + document.body.scrollTop + document.documentElement.scrollTop ;
				
				var newLeft = (mousex - left) / Range + left;
				var newTop = (mousey - top) / Range + top
				para.stop().animate({
					"left" : newLeft,
					"top" : newTop
				},20);
				
			});
		});
		
	}
	
}