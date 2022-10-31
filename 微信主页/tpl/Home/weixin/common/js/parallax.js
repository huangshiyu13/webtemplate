function getByClass(oParent, sClass) {//通过className获取对象
	var aChild = oParent.getElementsByTagName('*');
	var regex = new RegExp('\\b' + sClass + '\\b', 'i');
	var result = [];

	for (var i=0; i<aChild.length; i++) {
		if (regex.test(aChild[i].className)) {//判断对象className是否符合条件
			result.push(aChild[i]);
		}
	}

	return result;
}

//视察滚动
function parallaxAnimate(sDom, region, scrollTop) {
/*
sDom：运动对象class名称或者id名称
 region, scrollTop
*/
	var elm; //要运动的对象

	//判断是.还是#，使用不同的方法获取对象
	if (sDom.charAt(0) == ".") {
		var oWrap = document.getElementById("wrapBox");
		elm = getByClass(oWrap, sDom.substring(1))[0];
	} else if (sDom.charAt(0) == "#") {
		elm = document.getElementById(sDom.substring(1));
	}

	//console.log(elm);
	var area = (scrollTop - region.startTop)/(region.endTop - region.startTop);

	for (var i in region.startCss) {
			var target = (region.endCss[i] - region.startCss[i])*area;
			var json = {};
			json[i] = region.startCss[i] + target;
			//$(elm).css(json);
		if (i == 'backgroundPosition') {
			$(elm).stop().animate({'background-position-x': '50%', 'background-position-y': target}, 1100, 'linear');
		} else {
			$(elm).stop().animate(json, 1100, 'linear');
		}
	}
}

function fnLoad() {
	var $wrapBox = $("#wrapBox");
	var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
	var boxHeight = (windowHeight-60)>570 ? (windowHeight-60) : 570;

	$(".box").css('height', boxHeight);//初始化.box的高度
	$(".b1_fixed").css('top', (boxHeight-570)/2);//初始化.box的高度

	var line = {
		lineHeight: boxHeight*$(".box").length,//虚拟轴高度
		pageIndex: 0,//当前page索引
		scrollRatio: 1,//滚动条和虚拟轴的比率，越大则滚动得越慢（滚动条滚几倍，虚拟轴才滚1）
		isAnimRuning: false,//自动滚动
		obj:[]//虚拟轴上的运动对象
	};//虚拟轴
	document.getElementsByTagName("body")[0].style.height = (line.lineHeight + 60) * line.scrollRatio + "px";

	var page_1 = 0,
		page_2 = line.scrollRatio*boxHeight,
		page_3 = line.scrollRatio*boxHeight*2,
		page_4 = line.scrollRatio*boxHeight*3,
		page_5 = line.scrollRatio*boxHeight*4,
		page_6 = line.scrollRatio*boxHeight*5,
		page_7 = line.scrollRatio*boxHeight*6;

	var beforePage = line.scrollRatio*200,
		afterPage = line.scrollRatio*200;

	var speedTop = 800;
	var scale = (line.lineHeight + 60 - windowHeight)/((line.lineHeight + 60) * line.scrollRatio - windowHeight);

	//fixed
	line.obj.push({
		dom: ".b1_fixed",
		regions: [{
			startTop: 0,
			endTop: (boxHeight-510)/scale,
			startCss: {
				top: (boxHeight-570)/2
			},
			endCss: {
				top: boxHeight-570
			}
		}]
	}, {
		dom: ".b2_fixed",
		regions: [{
			startTop: 510/scale,
			endTop: (boxHeight*2-510)/scale,
			startCss: {
				top: 0
			},
			endCss: {
				top: boxHeight-570
			}
		}]
	}, {
		dom: ".b3_fixed",
		regions: [{
			startTop: (boxHeight+510)/scale,
			endTop: (boxHeight*3-510)/scale,
			startCss: {
				top: 0
			},
			endCss: {
				top: boxHeight-570
			}
		}]
	}, {
		dom: ".b4_fixed",
		regions: [{
			startTop: (boxHeight*2+510)/scale,
			endTop: (boxHeight*4-510)/scale,
			startCss: {
				top: 0
			},
			endCss: {
				top: boxHeight-570
			}
		}]
	}, {
		dom: ".b5_fixed",
		regions: [{
			startTop: (boxHeight*3+510)/scale,
			endTop: (boxHeight*5-510)/scale,
			startCss: {
				top: 0
			},
			endCss: {
				top: boxHeight-570
			}
		}]
	}, {
		dom: ".b6_fixed",
		regions: [{
			startTop: (boxHeight*4+510)/scale,
			endTop: (boxHeight*6-510)/scale,
			startCss: {
				top: 0
			},
			endCss: {
				top: boxHeight-570
			}
		}]
	}, {
		dom: ".b7_fixed",
		regions: [{
			startTop: (boxHeight*5+510)/scale,
			endTop: (boxHeight*7-510)/scale,
			startCss: {
				top: 0
			},
			endCss: {
				top: boxHeight-570
			}
		}]
	});

	//box bg
	line.obj.push({
		dom: ".box1_bg",
		regions: [{
			startTop: 0,
			endTop: (boxHeight-60)/scale,
			startCss: {
				top: 0
			},
			endCss: {
				top: boxHeight - 1100
			}
		}]
	}, {
		dom: ".box2_bg",
		regions: [{
			startTop: 0,
			endTop: (boxHeight*2-60)/scale,
			startCss: {
				top: 0
			},
			endCss: {
				top: boxHeight - 1100
			}
		}]
	}, {
		dom: ".box3_bg",
		regions: [{
			startTop: boxHeight/scale,
			endTop: boxHeight*3/scale,
			startCss: {
				top: 0
			},
			endCss: {
				top: boxHeight - 1100
			}
		}]
	}, {
		dom: ".box4_bg",
		regions: [{
			startTop: boxHeight*2/scale,
			endTop: boxHeight*4/scale,
			startCss: {
				top: 0
			},
			endCss: {
				top: boxHeight - 1100
			}
		}]
	}, {
		dom: ".box5_bg",
		regions: [{
			startTop: boxHeight*3/scale,
			endTop: boxHeight*5/scale,
			startCss: {
				top: 0
			},
			endCss: {
				top: boxHeight - 1100
			}
		}]
	}, {
		dom: ".box6_bg",
		regions: [{
			startTop: boxHeight*4/scale,
			endTop: boxHeight*6/scale,
			startCss: {
				top: 0
			},
			endCss: {
				top: boxHeight - 1100
			}
		}]
	}, {
		dom: ".box7_bg",
		regions: [{
			startTop: boxHeight*5/scale,
			endTop: boxHeight*7/scale,
			startCss: {
				top: 0
			},
			endCss: {
				top: boxHeight - 1100
			}
		}]
	});

	//box1
	line.obj.push({
		dom: ".b1_04",
		regions: [{
			startTop: page_1,
			endTop: page_2,
			startCss: {
				top: 470
			},
			endCss: {
				top: 400 + 470
			}
		}]
	});

	//box2 --> box3
	line.obj.push({
		dom: ".b2_03",
		regions: [{
			startTop: page_1,
			endTop: page_3,
			startCss: {
				top: -400
			},
			endCss: {
				top: 600 + 30
			}
		}]
	}, {
		dom: ".b2_04",
		regions: [{
			startTop: page_1,
			endTop: page_3,
			startCss: {
				top: -100
			},
			endCss: {
				top: 200+ 350
			}
		}]
	}, {
		dom: ".b2_06",
		regions: [{
			startTop: page_1,
			endTop: page_3,
			startCss: {
				top: -200
			},
			endCss: {
				top: speedTop/2 + 300
			}
		}]
	});

	// line.obj.push({
	// 	dom: ".b4_fixed",
	// 	regions: [{
	// 		startTop: (page_3 + 800)/(line.lineHeight + 60 - windowHeight)*((line.lineHeight + 60) * line.scrollRatio - windowHeight),
	// 		endTop: page_5-800,
	// 		startCss: {
	// 			top: -100
	// 		},
	// 		endCss: {
	// 			top: boxHeight-750
	// 		}
	// 	}]
	// });
	// line.obj.push({
	// 	dom: ".b6_fixed",
	// 	regions: [{
	// 		startTop: (page_5 + 800)/(line.lineHeight + 60 - windowHeight)*((line.lineHeight + 60) * line.scrollRatio - windowHeight),
	// 		endTop: page_7-800,
	// 		startCss: {
	// 			top: -50
	// 		},
	// 		endCss: {
	// 			top: boxHeight-750
	// 		}
	// 	}]
	// });
	// line.obj.push({
	// 	dom: ".b7_fixed",
	// 	regions: [{
	// 		startTop: (page_6 + 800)/(line.lineHeight + 60 - windowHeight)*((line.lineHeight + 60) * line.scrollRatio - windowHeight),
	// 		endTop: page_7,
	// 		startCss: {
	// 			top: 0
	// 		},
	// 		endCss: {
	// 			top: boxHeight-800
	// 		}
	// 	}]
	// });

	var oBody = document.getElementsByTagName('body')[0];
	var scrollNum = 1;

	if(oBody.addEventListener) {
		oBody.addEventListener('DOMMouseScroll', function(e){
			scrollFunc(e);
		}, false);
	}
	oBody.onmousewheel = function(e){
		scrollFunc(e);
	};
	function scrollFunc(e) {
		var e = e || event;
		var wrapTop = 60 - document.getElementById("wrapBox").offsetTop;
		var direct;
		var endWrapTop;

		e.preventDefault ? e.preventDefault() : (e.returnValue = false);

		direct = e.wheelDelta ? e.wheelDelta : e.detail*-1;


		if (direct > 0) {
			if ((scrollNum++)%2) {
				return;
			}

			endWrapTop = (Math.round(wrapTop/boxHeight*1)-1) * boxHeight/1;
		} else {
			if ((scrollNum--)%2) {
				return;
			}
			endWrapTop = (Math.round(wrapTop/boxHeight*1)+1) * boxHeight/1;
		}

		window.scroll(0, endWrapTop/(line.lineHeight + 60 - windowHeight)*((line.lineHeight + 60) * line.scrollRatio - windowHeight));
	}

	var endTop = 0;
	window.onscroll = function() {
		var top = document.documentElement.scrollTop || document.body.scrollTop;//获取滚动条位置
		// if (endTop > top) {
		// 	clearInterval(bodyTimer);
		// }
		endTop = top;
		//$wrapBox.css({"top": -top2+60});
		var wrapTop = top*(line.lineHeight + 60 - windowHeight)/((line.lineHeight + 60) * line.scrollRatio - windowHeight);//内容改变top值

		//$wrapBox.css({"top": -wrapTop+60});
		$wrapBox.stop().animate({"top": -wrapTop+60}, 1300);//#wrap 滚动
		//$wrapBox.stop().animate({"top": -wrapTop+60},{queue:false, duration: 1100});

		var topIndex = 0;
		if (wrapTop <= boxHeight*(topIndex + 0.6)) {
			if (box1In) {
				boxGoIn_1();
			}
			$(".nav a").removeClass("cur").eq(0).addClass("cur");
			$(".fixedNav li").removeClass("cur").eq(0).addClass("cur");
		} else if (wrapTop > boxHeight*(topIndex + 0.8)) {
			boxGoOut_1();
		}
		topIndex++;

		if (boxHeight*(topIndex-0.4) < wrapTop && wrapTop < boxHeight*(topIndex+0.6)) {
			if (box2In) {
				boxGoIn_2();
			}
			$(".nav a").removeClass("cur").eq(0).addClass("cur");
			$(".fixedNav li").removeClass("cur").eq(0).addClass("cur");
		} else if (wrapTop > boxHeight*(topIndex+0.8) || wrapTop < boxHeight*(topIndex-0.4)) {
			boxGoOut_2();
		}
		topIndex++;

		if (boxHeight*(topIndex-0.4) < wrapTop && wrapTop < boxHeight*(topIndex+0.6)) {
			if (box3In) {
				boxGoIn_3();
			}
			$(".nav a").removeClass("cur").eq(1).addClass("cur");
			$(".fixedNav li").removeClass("cur").eq(1).addClass("cur");
		} else if (wrapTop > boxHeight*(topIndex+0.8) || wrapTop < boxHeight*(topIndex-0.4)) {
			boxGoOut_3();
		}
		topIndex++;

		if (boxHeight*(topIndex-0.4) < wrapTop && wrapTop < boxHeight*(topIndex+0.6)) {
			if (box4In) {
				boxGoIn_4();
			}
			$(".nav a").removeClass("cur").eq(2).addClass("cur");
			$(".fixedNav li").removeClass("cur").eq(2).addClass("cur");
		} else if (wrapTop > boxHeight*(topIndex+0.8) || wrapTop < boxHeight*(topIndex-0.4)) {
			boxGoOut_4();
		}
		topIndex++;

		if (boxHeight*(topIndex-0.4) < wrapTop && wrapTop < boxHeight*(topIndex+0.6)) {
			if (box5In) {
				boxGoIn_5();
			}
			$(".nav a").removeClass("cur").eq(3).addClass("cur");
			$(".fixedNav li").removeClass("cur").eq(3).addClass("cur");
		} else if (wrapTop > boxHeight*(topIndex+0.8) || wrapTop < boxHeight*(topIndex-0.4)) {
			boxGoOut_5();
		}
		topIndex++;

		if (boxHeight*(topIndex-0.4) < wrapTop && wrapTop < boxHeight*(topIndex+0.6)) {
			if (box6In) {
				boxGoIn_6();
			}
			$(".nav a").removeClass("cur").eq(4).addClass("cur");
			$(".fixedNav li").removeClass("cur").eq(4).addClass("cur");
		} else if (wrapTop > boxHeight*(topIndex+0.8) || wrapTop < boxHeight*(topIndex-0.4)) {
			boxGoOut_6();
		}
		topIndex++;

		if (boxHeight*(topIndex-0.4) < wrapTop) {
			$(".nav a").removeClass("cur").eq(5).addClass("cur");
			$(".fixedNav li").removeClass("cur").eq(5).addClass("cur");
		}

		for (var i=0, len=line.obj.length; i<len; i++) {
			var curEle = line.obj[i];
			for (var j=0, len2=curEle.regions.length; j<len2; j++) {
				if (curEle.regions[j].startTop <= top && curEle.regions[j].endTop >= top) {
					parallaxAnimate(curEle.dom, curEle.regions[j], top);
				} else if (curEle.regions[j].endTop <= top) {
					for (var n in curEle.regions[j].endCss) {
						var json = {};

						json[n] = curEle.regions[j].endCss[n];
						//$(curEle.dom).css(json);
						$(curEle.dom).stop().animate(json, 1300);
					}
				} else if (curEle.regions[j].startTop >= top) {
					for (var n in curEle.regions[j].startCss) {
						var json = {};

						json[n] = curEle.regions[j].startCss[n];
						//$(curEle.dom).css(json);
						$(curEle.dom).stop().animate(json, 1300);
					}
				}
			}
		}
	};

	for (var i in elementInit) {//初始化对象
		var $i = $wrapBox.find(i);
		for (var j in elementInit[i]) {
			$i.css(j, elementInit[i][j]);
		}
	}

	boxGoIn_1();//默认第一个

	$(".nav li").click(function() {
		var index = $(this).index();
		index = index==0 ? 0 : index+1;
		
		//document.getElementsByTagName('body')[0].scrollTop = index * line.scrollRatio * boxHeight;
		window.scroll(0, index * line.scrollRatio * boxHeight);
	});

	$(".fixedNav").css({'margin-left': $(window).width()/2-40, 'display': 'block'});
	$(".fixedNav li").click(function() {
		var index = $(this).index();
		index = index==0 ? 0 : index+1;
		//document.getElementsByTagName('body')[0].scrollTop = index * line.scrollRatio * boxHeight;
		window.scroll(0, index * line.scrollRatio * boxHeight);
	});
	$(".fixedNav li").hover(function(){
		$(this).find('.txt').show();
	}, function() {
		$(this).find('.txt').hide();
	})

	var lazyload;
	window.onresize = function() {
		clearTimeout(lazyload);
		lazyload = setTimeout(function() {
			window.location.reload(); 
			document.documentElement.scrollTop = document.body.scrollTop = 0;
		}, 500);
		//$(".fixedNav").css('margin-left', $(window).width()/2-50);
	};

	//var bodyTimer;
	$(".b1_03 a").click(function() {
		//clearInterval(bodyTimer);
		var now = 1;
		//$(".nav a").eq(1).click();
		document.getElementsByTagName('body')[0].scrollTop = document.documentElement.scrollTop = now * line.scrollRatio * boxHeight;
		// document.body.scrollTop = now * line.scrollRatio * boxHeight;
		// bodyTimer = setInterval(function() {
		// 	now++;
		// 	document.documentElement.scrollTop  = document.body.scrollTop = now * line.scrollRatio * boxHeight;

		// 	if (now >= 7) {
		// 		clearInterval(bodyTimer);
		// 	}
		// }, 5000);
	});
};

var elementInit = {//初始化对象属性
	".b1_01": {
		opacity: 0
	},
	".b1_02": {
		//left: (1920 - windowWidth)/2 - 709,
		left: 300,
		opacity: 0
	},
	".b1_03": {
		top: 185,
		opacity: 0
	},
	".b1_03_btn": {
		//opacity: 0
	},
	".b1_04": {
		//top: 800
	},
	".b2_01": {
		top: 800,
		left: -200,
		opacity: 0
	},
	".b2_02": {
		left: 1050,
		opacity: 0
	},
	".b2_07": {
		left: 810,
		opacity: 0
	},
	".b2_03": {
		//top: 70,
		//opacity: 0
	},
	".b3_tl": {
		opacity: 0
	},
	".b3_01": {
		left: 670,
		top: 275,
		opacity: 0
	},
	".b3_02": {
		left: 963,
		top: 293,
		opacity: 0
	},
	".b3_03": {
		left: 963,
		opacity: 0
	},
	".b3_04": {
		left: 963,
		top: 353,
		opacity: 0
	},
	".b3_05": {
		left: 670,
		top: 353,
		opacity: 0
	},
	".b3_06": {
		left: 670,
		opacity: 0
	},
	".b4_tl": {
		top: 810,
		opacity: 0
	},
	".b4_txt": {
		opacity: 0
	},
	".b4_txt01": {
		top: 930
	},
	".b4_txt02": {
		top: 1012
	},
	".b4_txt03": {
		top: 1094
	},
	".b4_txt04": {
		top: 1176
	},
	".b4_txt05": {
		top: 1258
	},
	".b4_txt06": {
		top: 1340
	},
	".b4_01": {
		left: 1000,
		opacity: 0
	},
	".b4_02": {
		left: 1235,
		opacity: 0
	},
	".b5_tl": {
		opacity: 0
	},
	".b5_txt": {
		opacity: 0
	},
	".b5_01": {
		//left: 500,
		opacity: 0
	},
	".b5_ico01": {
		left: 500,
		opacity: 0
	},
	".b5_ico02": {
		left: 625,
		top: -34,
		opacity: 0
	},
	".b5_ico03": {
		left: 625,
		top: 304,
		opacity: 0
	},
	".b5_ico04": {
		left: 780,
		top: -145,
		opacity: 0
	},
	".b5_ico05": {
		left: 780,
		opacity: 0
	},
	".b5_ico06": {
		left: 780,
		top: 395,
		opacity: 0
	},
	".b6_tl": {
		opacity: 0
	},
	".b6_img": {
		opacity: 0
	},
	".b6_arrow01": {
		top: 34
	},
	".b6_arrow02": {
		top: -34
	},
	".b6_txt": {
		opacity: 0
	},
	".b6_01": {
		left: 400,
		opacity: 0
	}
}

var box1In = true,
	box2In = true,
	box3In = true,
	box4In = true,
	box5In = true,
	box6In = true;

function boxGoIn_1() {
	 box1In = false;
	$(".b1_01").stop().animate({top: 285, opacity: 1}, 1200);
	$(".b1_02").stop().animate({left: 365, opacity: 1}, 1200);
	$(".b1_03").stop().animate({top: 235, opacity: 1}, 1200, function() {
		$(".b1_03_btn").addClass('anima');
	});
}
function boxGoOut_1() {
	 box1In = true;
	$(".b1_02").stop().animate({left: 300, opacity: 0}, 500);
	$(".b1_03").stop().animate({top: 185, opacity: 0}, 500, function() {
		$(".b1_03_btn").removeClass('anima');
	});
	$(".b1_01").stop().animate({top: 415, opacity: 0}, 800);
}

function boxGoIn_2() {
	 box2In = false;
	$(".b2_01").stop().animate({left: 80, top: 110, opacity: 1}, 800);
	$(".b2_02").stop().animate({left: 930, opacity: 1}, 1000);
	$(".b2_07").stop().animate({left: 930, opacity: 1}, 1000);
}
function boxGoOut_2() {
	 box2In = true;
	$(".b2_02").stop().animate({left: 1100, opacity: 0}, 300);
	$(".b2_07").stop().animate({left: 860, opacity: 0}, 300);
	$(".b2_01").stop().animate({left: -200, top: 800, opacity: 0}, 500);
}

var box3Timer;
var box3Now;
var box3Order = [[1, 2], [6, 3], [5,4]]
function boxGoIn_3() {
	box3In = false;
	clearInterval(box3Timer);
	$(".b3_img").addClass("transform");
	$(".b3_img").stop().animate({opacity: 1}, 1500);
	$(".b3_tl").stop().animate({opacity: 1}, 1500);
	box3Now = 0;
	var aJson = [{left: 525, top:201, opacity: 1},
		{left: 1110, top:201, opacity: 1},
		{left: 1180, opacity: 1},
		{left: 1110, top:463, opacity: 1},
		{left: 525, top:463, opacity: 1},
		{left: 464, opacity: 1}
	];

	for (var i=1; i<7; i++) {
		$(".b3_0" + i).stop().animate(aJson[i-1], 1500);
	}
	// for (var i=0; i<box3Order[box3Now].length; i++) {
	// 	$(".b3_0" + box3Order[box3Now][i]).stop().animate(aJson[box3Order[box3Now][i]-1], 600);
	// }
	// box3Timer = setInterval(function() {
	// 	box3Now++;
	// 	for (var i=0; i<box3Order[box3Now].length; i++) {
	// 		$(".b3_0" + box3Order[box3Now][i]).stop().animate(aJson[box3Order[box3Now][i]-1], 600);
	// 	}
	// 	if (box3Now>=2) {
	// 	 	clearInterval(box3Timer);
	// 	}
	// }, 500);
}
function boxGoOut_3() {
	box3In = true;
	clearInterval(box3Timer);
	$(".b3_img").stop().animate({opacity: 0}, 1500, function() {
		$(".b3_img").removeClass("transform");
	});
	box3Now = 2;
	// var aJson = [{left: 200, top: 46, opacity: 0},
	// 	{left: 1435, top: 46, opacity: 0},
	// 	{left: 1505, opacity: 0},
	// 	{left: 1435, top: 517, opacity: 0},
	// 	{left: 200, top: 517, opacity: 0},
	// 	{left: 139, opacity: 0}
	// ];
	var aJson = [{left: 670, top: 275, opacity: 0},
		{left: 963, top: 293, opacity: 0},
		{left: 963, opacity: 0},
		{left: 963, top: 353, opacity: 0},
		{left: 670, top: 353, opacity: 0},
		{left: 670, opacity: 0}
	];

	for (var i=1; i<7; i++) {
		$(".b3_0" + i).stop().animate(aJson[i-1], 1000);
	}
	// for (var i=0; i<box3Order[box3Now].length; i++) {
	// 	$(".b3_0" + box3Order[box3Now][i]).stop().animate(aJson[box3Order[box3Now][i]-1], 300);
	// }
	// box3Timer = setInterval(function() {
	// 	box3Now--;
	// 	for (var i=0; i<box3Order[box3Now].length; i++) {
	// 		$(".b3_0" + box3Order[box3Now][i]).stop().animate(aJson[box3Order[box3Now][i]-1], 300);
	// 	}
	// 	if (box3Now<=0) {
	// 		$(".b3_tl").stop().animate({opacity: 0}, 1500, function() {});
	// 	 	clearInterval(box3Timer);
	// 	}
	// }, 500);
}

var box4Timer;
function boxGoIn_4() {
	box4In = false;
	clearTimeout(box4Timer);
	$(".b4_tl").stop().animate({top: 50, opacity: 1}, 1350);
	box4Timer = setTimeout(function() {
		$(".b4_txt01").stop().animate({top: 165, opacity: 1}, 1200);
		box4Timer = setTimeout(function() {
			$(".b4_txt02").stop().animate({top: 225, opacity: 1}, 1050);
			box4Timer = setTimeout(function() {
				$(".b4_txt03").stop().animate({top: 285, opacity: 1}, 900);
				$(".b4_01").stop().animate({left: 940, opacity: 1}, 900);
				box4Timer = setTimeout(function() {
					$(".b4_txt04").stop().animate({top: 345, opacity: 1}, 750);
					box4Timer = setTimeout(function() {
						$(".b4_txt05").stop().animate({top: 405, opacity: 1}, 600);
						$(".b4_02").stop().animate({left: 1195, opacity: 1}, 600);
						box4Timer = setTimeout(function() {
							$(".b4_txt06").stop().animate({top: 465, opacity: 1}, 450);
						}, 150);
					}, 150);
				}, 150);
			}, 150);
		}, 150);
	}, 150);
}
function boxGoOut_4() {
	box4In = true;
	clearTimeout(box4Timer);
	box4Timer = setTimeout(function() {
		$(".b4_txt06").stop().animate({top: 1340, opacity: 0}, 600);
		box4Timer = setTimeout(function() {
			$(".b4_txt05").stop().animate({top: 1258, opacity: 0}, 525);
			box4Timer = setTimeout(function() {
				$(".b4_txt04").stop().animate({top: 1176, opacity: 0}, 450);
				$(".b4_02").stop().animate({left: 1235, opacity: 0}, 450);
				box4Timer = setTimeout(function() {
					$(".b4_txt03").stop().animate({top: 1000, opacity: 0}, 375);
					box4Timer = setTimeout(function() {
						$(".b4_txt02").stop().animate({top: 1012, opacity: 0}, 300);
						$(".b4_01").stop().animate({left: 1195, opacity: 0}, 300);
						box4Timer = setTimeout(function() {
							$(".b4_txt01").stop().animate({top: 930, opacity: 0}, 225);
							$(".b4_tl").stop().animate({top: 810, opacity: 0}, 675);
						}, 75);
					}, 75);
				}, 75);
			}, 75);
		}, 75);
	}, 75);
}

function boxGoIn_5() {
	box5In = false;
	$(".b5_tl, .b5_txt").stop().animate({opacity: 1}, 1200);
	$(".b5_01").stop().animate({opacity: 1}, 800);
	$(".b5_ico01").stop().animate({left: 0, opacity: 1}, 800);
	$(".b5_ico02").stop().animate({left: 125, top: 66, opacity: 1}, 1000);
	$(".b5_ico03").stop().animate({left: 125, top: 204, opacity: 1}, 1000);
	$(".b5_ico04").stop().animate({left: 280, top: -20, opacity: 1}, 1200);
	$(".b5_ico05").stop().animate({left: 280, opacity: 1}, 1200);
	$(".b5_ico06").stop().animate({left: 280, top: 270, opacity: 1}, 1200);
}
function boxGoOut_5() {
	box5In = true;
	$(".b5_tl, .b5_txt").stop().animate({opacity: 0}, 600);
	$(".b5_01").stop().animate({opacity: 0}, 400);
	$(".b5_ico01").stop().animate({left: 500, opacity: 0}, 400);
	$(".b5_ico02").stop().animate({left: 625, top: -34, opacity: 0}, 500);
	$(".b5_ico03").stop().animate({left: 625, top: 304, opacity: 0}, 500);
	$(".b5_ico04").stop().animate({left: 780, top: -145, opacity: 0}, 600);
	$(".b5_ico05").stop().animate({left: 780, opacity: 0}, 600);
	$(".b5_ico06").stop().animate({left: 780, top: 395, opacity: 0}, 600);
}

var box6Timer;
function boxGoIn_6() {
	box6In = false;
	$(".b6_tl").stop().animate({opacity: 1}, 1200);
	$(".b6_01").stop().animate({left: 1220, opacity: 1}, 1500);
	$(".b6_img").stop().animate({opacity: 1}, 2000, function() {
		$(".b6_txt").stop().animate({opacity: 1}, 800, function() {
			// $(".b6_txt").animate({opacity: 0.3}, 800);
			// var now = 0;
			// b6_txtAnima(now);
			// box6Timer = setInterval(function() {
			// 	//$(".b6_txt").eq(now).stop().animate({opacity: 0.3}, 300);
			// 	now = (now+1)%$(".b6_txt").length;

			// 	b6_txtAnima(now);
			// }, 3000);

			var box6_arrow = function() {
				$('.b6_arrow01').stop().animate({top: -34}, 2000);
				$('.b6_arrow02').stop().animate({top: 34}, 2000, function() {
					$('.b6_arrow01').css('top', 34);
					$('.b6_arrow02').css('top', -34);
					box6_arrow();
				});
			};
			box6_arrow();
		});
	});
}
function b6_txtAnima(now) {
	var $that = $(".b6_txt").eq(now);
	$that.stop();

	var bout = 0;
	var bool = true;
	var timer = setInterval(function() {
		var target = bool ? 1 : 0.3;
		$that.stop().animate({opacity: target}, 400);

		bool = bool ? false : true;
		bout++;
		if (bout >= 6) {
			clearInterval(timer);
		}
	}, 500);
}

function boxGoOut_6() {
	box6In = true;

	$('.b6_arrow01').stop().animate({top: -34}, 500);
	$('.b6_arrow02').stop().animate({top: 34}, 500);
	$(".b6_01").stop().animate({left: 400, opacity: 0}, 500);
	$(".b6_txt").stop().animate({opacity: 0}, 500);
	$(".b6_tl").stop().animate({opacity: 0}, 500);
	$(".b6_img").stop().animate({opacity: 0}, 500);
}


// function loadImg() {
// 	var oLoad = document.getElementById('load'),
// 		oLoadImg = document.getElementById('loadImg'),
// 		oLoadTxt = document.getElementById('loadTxt'),
// 		image_path = '/bocmobile/img/',
// 		aImgs = ['b1_01.png',
// 				'b1_02.png',
// 				'b1_03.png',
// 				'b1_03_btn.png',
// 				'b1_04.png',
// 				'b1_bg.jpg',
// 				'b2_01.png',
// 				'b2_03.png',
// 				'b2_04.png',
// 				'b2_05.png',
// 				'b2_06.png',
// 				'b2_bg.jpg',
// 				'b3_01.png',
// 				'b3_bg.jpg',
// 				'b4_01.png',
// 				'b4_02.png',
// 				'b4_bg.jpg',
// 				'b5_01.png',
// 				'b5_bg.jpg',
// 				'b5_ico.png',
// 				'b66.png',
// 				'b6_01.png',
// 				'b6_arrow.png',
// 				'b6_bg.jpg',
// 				'b6_ico.png',
// 				'b6_img.png',
// 				'b7_bg.jpg',
// 				'b7_sprite.png',
// 				'box_bg01.jpg',
// 				'logo.jpg',
// 				'map.jpg',
// 				'sprite.png'],
// 		len = aImgs.length, i=0, j=0; 

// 	document.body.style.overflow = 'hidden';
// 	for (; i<len; i++) {
// 		var imgLoad = new Image();

// 		imgLoad.onload = imgLoad.onerror = function() {
// 			j++;

// 			oLoadImg.style.width = 400*j/len + 'px';
// 			oLoadTxt.innerHTML = Math.floor(j*100/len);
// 			if (j == len) {
// 				setTimeout(function() {
// 					document.body.style.overflow = 'auto';
// 					oLoad.style.display = 'none';
// 				}, 300);
// 			}
// 		}
// 		imgLoad.src = image_path + aImgs[i];
// 	}
// }

var loadImg = {
	path: '/bocmobile/img/',
	imgs: {
		'.b1_bg': ['b1_01.png', 'b1_02.png', 'b1_03.png', 'b1_03_btn.png', 'b1_04.png', 'b1_bg.jpg', 'b2_01.png', 'b2_03.png', 'b2_04.png', 'b2_05.png', 'b2_06.png', 'b2_bg.jpg', 'sprite.png'],
		'.b3_bg': ['b3_01.png', 'b3_bg.jpg'],
		'.b4_bg': ['b4_01.png',	'b4_02.png', 'b4_bg.jpg'],
		'.b5_bg': ['b5_01.png', 'b5_bg.jpg', 'b5_ico.png'],
		'.b6_bg': ['b6_01.png', 'b6_arrow.png', 'b6_bg.jpg', 'b6_ico.png', 'b6_img.png'],
		'.b7_bg': ['b7_bg.jpg', 'b7_sprite.png', 'map.jpg']
	},
	boxLoad: function(ele, aImgs, callback) {
		var len = aImgs.length,
			i=0, j=0, imgLoad = [];

		console.log("1" + ele);
		for (; i<len; i++) {
			(function(index) {
				imgLoad[index] = new Image();

				imgLoad[index].onload = imgLoad[index].onerror = function(index) {
					j++;
					
					if (j == len) {
						$(ele).find('img').each(function() {
							var src = $(this).attr('data-src');

							src && $(this).attr('src', src);
						});

						if (ele == '.b1_bg') {
							fnLoad();
							$('.b2_bg').find('img').each(function() {
								var src = $(this).attr('data-src');

								src && $(this).attr('src', src);
							});
							$('.b2_bg').find('.load').hide();
						}
						$(ele).find('.load').hide();
						if (callback) {
							callback();
						}
					}

					imgLoad[index].onload = imgLoad[index].onerror = null;
				};

				imgLoad[index].src = this.path + aImgs[index];
			})(i);
		}
	},
	init: function() {
		var index = 1;
		var self = this;
		var imgLoad = function() {
			self.boxLoad('.b'+ index + '_bg', self.imgs['.b'+ index + '_bg'], function() {
				index = index+1 == 2 ? 3 : index+1;

				if (index <= 7) {
					imgLoad();
				}
			});
		};

		imgLoad();
	}
}