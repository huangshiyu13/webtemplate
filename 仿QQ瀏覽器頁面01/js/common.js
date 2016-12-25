var pn = 0;
var d = 1;
window.touchEvent = false;
$('#page0').removeClass('status2');
$('#page0').addClass('status1');
$(".btnadditional").fadeOut(0);
function isSupportUA() {
	function uatrue(){
		$('#stagelow').remove();
	}
	function uafalse(){
		$('#stagelow').css('display','block');
		$('#stage,#bg,#navigation,#global_scroll,.global_logo,.global_btn,.global_copyright,.global_links').remove();
		$('body').css('overflow','auto');
	}
	var ua, tempstr, temparr;
	var ua = navigator.userAgent.toUpperCase();
	if (ua.indexOf("SAFARI") != -1 && ua.indexOf("CHROME/") <= -1) {
		uatrue();
	}else if (ua.indexOf('CHROME/') != -1) {
        if (ua.indexOf('LBBROWSER') != -1) {
            uafalse();
            return;
        }
        if ((ua.indexOf('QQBROWSER') != -1) && (ua.indexOf('WINDOW') != -1)) {
            uafalse();
            return;
        }
		tempstr = parseInt(ua.split('CHROME/')[1].split(' ')[0], 10);
		if (tempstr > 28) {
			// $('#stagelow').css('display','none');
			// $('#stage').css('display','block');
			uatrue();
		} else {
			uafalse();
		}
	} else {
		uafalse();
	}
}


function MotionEventRegister() {
	$(window).resize(function() {
		$('body').css('width',$(window).width()+'px').css('height',$(window).height()+'px');
	});
	$('#page0').removeClass('status2').addClass('status1');
	$(window).mousewheel(function(event, delta, deltaX, deltaY) {
		status = $('body').attr('class');
		if (status != 'playing') {
			if(deltaY<0){
				motion(1);
				$('#navigation li').removeClass('page_on');
				$('#navigation li:nth-of-type('+(pn+1)+')').addClass('page_on');
			}else{
				motion(-1);
				$('#navigation li').removeClass('page_on');
				$('#navigation li:nth-of-type('+(pn+1)+')').addClass('page_on');
			}
		$('body').addClass('playing');
		setTimeout(function() {$('body').removeClass('playing')}, 1300);
		}
	});
	document.onkeydown = function(event) {
		var c = window.event.keyCode;
		if (c==40||c==32||c==39) {
			motion(1);
			$('#navigation li').removeClass('page_on');
			$('#navigation li:nth-of-type('+pn+')').addClass('page_on');
		}else if (c==38||c==37) {
			motion(-1);
			$('#navigation li').removeClass('page_on');
			$('#navigation li:nth-of-type('+pn+')').addClass('page_on');
		}
	}
	$("#btn").mouseover(function(){
    	$(".btnadditional").fadeIn(300);
  	});
  	$("#btn").mouseout(function(){
    	$(".btnadditional").fadeOut(300);
  	});
}
function motion(d){
	pn = pn + d;

	if (pn == 0) {
		$('.global_logo').css('opacity','0');
		$('.global_btn').css('opacity','0');
		$('#global_scroll').css('opacity','1');
		$('.page0_round').css('display','block');
	}else{
		$('.global_logo').css('opacity','1');
		$('.global_btn').css('opacity','1');
		$('#global_scroll').css('opacity','0');
		$('.page0_round').css('display','none');
	};

	if (pn==-1) {
		pn = 0;
	}else if (pn==5) {
		$('#page4').removeClass('status1').addClass('status0');
		$('#page0').css({'display':'block','opacity':'0'});
		setTimeout(function(){$('#page0').css('opacity','1').removeClass('status0').addClass('status1');}, 100);
		pn = 0;
        motion(0);
		$('.global_logo').css('opacity','0');
		$('.global_btn').css('opacity','0');
		$('#global_scroll').css('opacity','1');
	}
	if (d==1) {
		$('#bg'+(pn-1)).css('opacity','0');
		$('#bg'+(pn)).css('opacity','1');
	}else if (d==0) {
		$('#bg div').css('opacity','0');
		$('#bg'+(pn)).css('opacity','1');
	}else{
		$('#bg'+(pn+1)).css('opacity','0');
		$('#bg'+(pn)).css('opacity','1');
	};
	$('#track').removeClass('page0').removeClass('page1').removeClass('page2').removeClass('page3').removeClass('page4');
	$('#track').addClass('page'+pn);
	$('#pn').text(pn);
	$('#page'+pn).removeClass('status2').removeClass('status0');
	$('#page'+pn).addClass('status1');
	$('#page'+(pn-1)).removeClass('slow');
	$('#page'+(pn+1)).removeClass('slow');
	$('#page'+(pn-1)).removeClass('status1');
	$('#page'+(pn-1)).addClass('status0');
	$('#page'+(pn+1)).removeClass('status1');
	$('#page'+(pn+1)).addClass('status2');

	// Energy saver
	var lens = 3, keys = 1;
	for (var i = 0; i < lens; i++) {
		if (i <= keys) {
			$('#page'+(pn+i)).css('display','block');
			$('#page'+(pn-i)).css('display','block');
			$('#bg'+(pn+i)).css('display','block');
			$('#bg'+(pn-i)).css('display','block');
		} else {
			$('#page'+(pn-i)).css('display','none');
			$('#page'+(pn+i)).css('display','none');
			$('#bg'+(pn+i)).css('display','none');
			$('#bg'+(pn-i)).css('display','none');
		}
	}

}