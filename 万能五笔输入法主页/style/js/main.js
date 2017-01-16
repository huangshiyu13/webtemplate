var down_url = "";
var can_whell = true;
function go_to_index(index){
    if(index == $('.block.now').index()){return false;} //当前不操作
    can_whell = false; //非当前 开始变化 过程中不得变化
    if(index == $('.block').size() - 1){ //最后一页则不显示箭头
        $('.arrow').hide();
    }else{
        $('.arrow').show();
    }
    $('.block').removeClass('now');
    $('h3.animate, h4.animate').removeClass('animate').addClass('animate2');
    //setTimeout(function(){
    //    $('h3.animate2, h4.animate2').removeClass('animate2');
    //}, 750);
    $('.block').animate({
        opacity: 0
    }, 750, function(){
        $('.block').filter(':not(".now")').hide();
    });
    $('.block:eq(' + index + ')').addClass('now');
    $('.block:eq(' + index + ')').stop();
    $('.block:eq(' + index + ')').show();
    $('.block:eq(' + index + ')').animate({
        opacity: 1
    }, 750);
    $('.block:eq(' + index + ') h3, .block:eq(' + index + ') h4').addClass('animate');
    $('.point div').removeClass('now');
    $('.point div:eq(' + index + ')').addClass('now');
    setTimeout(function(){
        $('.block h3, .block h4').removeClass('animate2');
        can_whell = true; //变化结束
    }, 1000);
}
function fix(){
    //修正
    if($(window).height() < 740){
        $('.b4 .info, .b4 .center').stop();
        $('.b4 .info, .b4 .center').animate({
            opacity: 0
        }, 0);
    }else{
        $('.down_info').show();
        $('.b4 .info, .b4 .center').stop();
        $('.b4 .info, .b4 .center').animate({
            opacity: 1
        });
    }
    if($(window).height() < 780){
        $('.sinan').css({
            width: 142,
            height: 141,
            marginLeft: -142 / 2,
            marginTop: -180
        });
        $('.sinan_bg').css({
            width: 142,
            height: 141
        });
        $('.sinan_zhizhen').css({
            width: 70,
            height: 70,
            left: 36,
            top: 36
        });
        $('.chilun').css({
            width: 95,
            height: 95,
            borderWidth: 9,
            marginLeft: -110 / 2,
            marginTop: -165
        });
        $('.chilun1').css({
            width: 165 / 2,
            height: 165 / 2,
            left: -50 / 2,
            top: 62 / 2
        });
        $('.chilun2').css({
            width: 165 / 2,
            height: 165 / 2,
            left: 75 / 2,
            top: -29 / 2
        });
        $('.chilun3').css({
            width: 165 / 2,
            height: 165 / 2,
            left: 114 / 2,
            top: 120 / 2
        });
        $('.chilun_border img').css({
            width: 192 / 2,
            height: 192 / 2,
            left: 0,
            top: 0
        });
        $('.ren').css({
            width: 220 / 2,
            height: 220 / 2,
            marginLeft: -110 / 2,
            marginTop: -325 / 2
        });
        $('.ren img').css({
            width: 220 / 2,
            height: 220 / 2
        });
        $('.yun').css({
            width: 269 / 2,
            height: 196 / 2,
            marginLeft: -134 / 2,
            marginTop: -315 / 2
        });
        $('.yun img').css({
            width: 269 / 2,
            height: 196 / 2
        });
        $('.block h3').css({
            fontSize: 26
        });
        $('.block h4').css({
            fontSize: 12,
            lineHeight: '20px',
            top: '40%'
        });
    }else{
        $('.sinan').css({
            width: 284,
            height: 282,
            marginLeft: -142,
            marginTop: -350
        });
        $('.sinan_bg').css({
            width: 284,
            height: 282
        });
        $('.sinan_zhizhen').css({
            width: 140,
            height: 140,
            left: 72,
            top: 71
        });
        $('.chilun').css({
            width: 190,
            height: 190,
            borderWidth: 18,
            marginLeft: -113,
            marginTop: -325
        });
        $('.chilun1').css({
            width: 165,
            height: 165,
            left: -50,
            top: 62
        });
        $('.chilun2').css({
            width: 165,
            height: 165,
            left: 75,
            top: -29
        });
        $('.chilun3').css({
            width: 165,
            height: 165,
            left: 114,
            top: 120
        });
        $('.chilun_border img').css({
            width: 192,
            height: 192,
            left: 0,
            top: 0
        });
        $('.ren').css({
            width: 220,
            height: 220,
            marginLeft: -110,
            marginTop: -325
        });
        $('.ren img').css({
            width: 220,
            height: 220
        });
        $('.yun').css({
            width: 269,
            height: 196,
            marginLeft: -134,
            marginTop: -315
        });
        $('.yun img').css({
            width: 269,
            height: 196
        });
        $('.block h3').css({
            fontSize: 60
        });
        $('.block h4').css({
            fontSize: 18,
            lineHeight: '25px',
            top: '43%'
        });
    }
    if($(window).width() < 950){
        $('.menu').width($(window).width() - 285);
    }else{
        $('.menu').css({
            width: 'auto'
        })
    }
}
$(function(){
    $('.b4 .center').mouseenter(function(){
        if($(window).height() < 740){
            $('.b4 .info, .b4 .center').stop();
            $('.down_info').hide();
            $('.b4 .info, .b4 .center').animate({
                opacity: 1
            });
        }
    });
    $('.b4 .center').mouseleave(function(){
        if($(window).height() < 740){
            $('.b4 .info, .b4 .center').stop();
            $('.down_info').show();
            $('.b4 .info, .b4 .center').animate({
                opacity: 0
            }, 0);
        }
    });
    for(var i = 0; i < $('.block').size(); i++){
        if(i == 0){
            $('.point').append('<div class="now"></div>');
        }else{
            $('.point').append('<div></div>');
        }
    }
    $('.point div').on('click', function(){
        if(!can_whell){return false;}
        go_to_index($(this).index());
    });
    $('.logo').on('click', function(){
        $('.point div:eq(0)').trigger('click');
    });
    $('.point').css({
        marginTop: -$('.point').height() / 2
    });
    $('.down').on('click', function(){
        window.open(down_url);
    });
    $('.down').on('mouseenter', function(){
        $('.down .down_an').filter(':not(:animated)').animate({
            top: 35
        }, function(){
            $('.down .down_an').css({
                top: -35
            });
            $('.down .down_an').animate({
                top: 0
            });
        });
    });
    $(window).on('resize', function(){
        $('.winw').width($(window).width());
        $('.winh').height($(window).height());
        $('.download').css({
            width: $(window).height() * 0.3,
            height: $(window).height() * 0.3 / 3.5,
            marginLeft: -($(window).height() * 0.3 / 2),
            marginTop: ($(window).height() * 0.3 / 2) * 1.2
        });
        $('.download img').css({
            width: $(window).height() * 0.3,
            height: $(window).height() * 0.3 / 3.5
        });
        $('.down_info').css({
            marginTop: ($(window).height() * 0.3 / 2) * 1.2 + $(window).height() * 0.3 / 3.5 + 10
        });
        fix();
    });
    $('body').mousewheel(function(event){
        if(!can_whell){return false;}
        var current_index = $('.block.now').index();
        if(event.deltaY < 0){
            //向下滚动
            if(current_index == $('.block').size() - 1){return false;} //最后一页不能向下
            go_to_index(current_index + 1);
        }else{
            //向上滚动
            if(current_index == 0){return false;} //第一页不能向上
            go_to_index(current_index - 1);
        }
    });
    $('.ico1').on('click', function(){
        location.href = '/download/index.html';
    });
    $('.ico2').on('click', function(){
        window.open('http://tieba.baidu.com/f?kw=%E4%B8%87%E8%83%BD%E4%BA%94%E7%AC%94');
    });
    $('.ico3').on('click', function(){
        location.href = '/skin/index.html';
    });
    //执行
    $(window).trigger('resize');
    $('.block').filter(':not(".now")').hide();
    $('.block').filter(':not(".now")').animate({
        opacity: 0
    }, 0);
});