var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;
var bl = 1;
bl = width / 1920;
var xz = "";
var page5move1;
var page5move2;
var page5move3;
var page5move4;
var page5move5;
var page5move6;
var page5move7;
function adjustImg(className, width) {
    var w = parseInt($("." + className).css("width"));
    var h = parseInt($("." + className).css("height"));
    var l = parseInt($("." + className).css("left"));
    var t = parseInt($("." + className).css("top"));
    bl = width / 1920;
    $("." + className).css({
        "width": w * bl,
        "height": h * bl,
        "left": l * bl,
        "top": t * bl
    })
}
var page = 1;
var adjustAuto = new Array();
var adjustAutoText = new Array();
$(document).ready(function(e) {
    $(".adjustAuto").each(function(index, element) {       
        var style = new Array();
        style[1] = parseInt($(this).css("width"));
        style[2] = parseInt($(this).css("height"));
        style[3] = parseInt($(this).css("left"));
        style[4] = parseInt($(this).css("top"));
        style[5] = parseInt($(this).css("margin-top"));
        style[6] = parseInt($(this).css("padding-left"));
        adjustAuto[index] = style;
        if(index == $(".adjustAuto").length-1)
            adjustAutoFun();       
    })
    $(".adjustAutoText").each(function(index, element) {
        var style = new Array();
        style[1] = parseInt($(this).css("font-size"));
        style[2] = parseInt($(this).css("width"));
        style[3] = parseInt($(this).css("height"));
        style[4] = parseInt($(this).css("left"));
        style[5] = parseInt($(this).css("top"));
        style[6] = parseInt($(this).css("line-height"));
        style[7] = parseInt($(this).css("margin-top"));
        adjustAutoText[index] = style;
        if(index == $(".adjustAutoText").length-1)
            adjustAutoTextFun();   
    })



    function adjustAutoFun(){
        $(".adjustAuto").each(function(index, element) {
            $(this).css({
                "width": adjustAuto[index][1] * bl,
                "height": adjustAuto[index][2] * bl,
                "left": adjustAuto[index][3] * bl,
                "top": adjustAuto[index][4] * bl,
                "margin-top": adjustAuto[index][5] * bl,
                "padding-left": adjustAuto[index][6] * bl
            })
        });
    }
    function adjustAutoTextFun(){
        $(".adjustAutoText").each(function(index, element) {
            $(this).css({
                "font-size": parseInt( adjustAutoText[index][1] * bl),
                "width": adjustAutoText[index][2] * bl,
                "height": adjustAutoText[index][3] * bl,
                "left": adjustAutoText[index][4] * bl,
                "top": adjustAutoText[index][5] * bl,
                "line-height": parseInt(adjustAutoText[index][6] * bl) + "px",
                "margin-top": adjustAutoText[index][7] * bl,
            })
        });
    }



    //当浏览器窗口大小改变时，设置显示内容的高度  
    window.onresize=function(){
        width = document.documentElement.clientWidth;
        height = document.documentElement.clientHeight;
        bl = width/1920;
        adjustAutoFun();
        adjustAutoTextFun();
        adjustHeight();
        $(".indexPage").css({
            top: -(page - 1) * height
        });        
    }  
    $("#jiazai").css("height", height);
    document.onreadystatechange = subSomething;
    function subSomething() {
        if (document.readyState == "complete") {
            $("#jiazai").remove();
            bl = width / 1920;
            $(".adjustAuto").each(function(index, element) {
                // $(this).css({
                //     "width": w * bl,
                //     "height": h * bl,
                //     "left": l * bl,
                //     "top": t * bl,
                //     "margin-top": mt * bl,
                //     "padding-left": pl * bl
                // })
            });
            $("p").css({
                "margin-top": 10 * bl
            });
            $("p").css({
                "margin-bottom": 10 * bl
            });
            
        }
        moveInPage1()
    }
    window.document.onkeydown = disableRefresh;
    function disableRefresh(evt) {
        evt = (evt) ? evt: window.event;
        if (evt.keyCode) {
            if (evt.keyCode == 38) {
                if ($("*").is(":animated")) {
                    return false
                }
                if ($(".animated").length != 0) {
                    return false
                }
                if (page < 2) {
                    page = 1;
                    return false
                }
                page = page - 1;
                animateOutPage(page + 1)
            }
            if (evt.keyCode == 40) {
                if ($("*").is(":animated")) {
                    console.log(this);
                    return false
                }
                if ($(".animated").length != 0) {
                    return false
                }
                if (page > 5) {
                    page = 6;
                    return false
                }
                animateOutPage(page);
                page++
            }
        }
    }
    document.body.onmousewheel = function(event) {
        event = event || window.event;
        console.log($(".animated").eq(0).attr("class"));
        console.dir(event.wheelDelta || event.detail);
        if (event.wheelDelta < 0 || event.detail < 0) {
            if ($("*").is(":animated")) {
                console.log(this);
                return false
            }
            if ($(".animated").length != 0) {
                return false
            }
            if (page > 5) {
                page = 6;
                return false
            }
            animateOutPage(page);
            page++
        } else {
            if ($("*").is(":animated")) {
                return false
            }
            if ($(".animated").length != 0) {
                return false
            }
            if (page < 2) {
                page = 1;
                return false
            }
            page = page - 1;
            animateOutPage(page + 1)
        }
    };
    $(".pageChose").bind("click",
    function() {
        if ($("*").is(":animated")) {
            return false
        }
        if ($(".animated").length != 0) {
            return false
        }
        var outPage = page;
        $(".pageChose").removeClass("active");
        page = parseInt(this.id);
        $("#" + page + "pageChose").addClass("active");
        animateOutPage(outPage)
    });
    adjustHeight();
    function adjustHeight() {
        $("#indexDiv").css("height", height);
        $("#indexPageBg1").css("height", height);
        $("#indexPageBg2").css("height", height);
        $(".indexPage").css("height", height);
        $("#page6").css("height",height);
        var pageChoseHeight = parseInt($("#index_pageChose").css("height"));
        $("#index_pageChose").css("top", (height - pageChoseHeight) / 2)
    }
    function changePage() {
        console.log(page);
        $(".indexPage").css({
            top: -(page - 1) * height
        });
        if (page == 8) {
            $("#page7").css({
                top: -(page - 2) * height
            })
        }
        $(".pageChose").removeClass("active");
        $("#" + page + "pageChose").addClass("active");
        animateInPage(page)
    }
    function changePageAnimate() {
        $(".pageChose").removeClass("active");
        $("#" + page + "pageChose").addClass("active");
        $(".indexPage").animate({
            top: -(page - 1) * height
        },
        400);
        animateInPage(page)
    }
    function animateInPage(num) {
        switch (num) {
        case 1:
            moveInPage1();
            break;
        case 2:
            moveInPage2();
            break;
        case 3:
            moveInPage3();
            break;
        case 4:
            moveInPage4();
            break;
        case 5:
            moveInPage5();
            break;
        case 6:
            moveInPage6();
            break
        }
    }
    function animateOutPage(num) {
        switch (num) {
        case 1:
            moveOutPage1();
            break;
        case 2:
            moveOutPage2();
            break;
        case 3:
            moveOutPage3();
            break;
        case 4:
            moveOutPage4();
            break;
        case 5:
            moveOutPage5();
            break;
        case 6:
            moveOutPage6();
            break
        }
    }
    function moveInPage1() {
        $("#img").animate({
            opacity:
            1
        },
        1000);
        $("#img").css({
            top: "-73px"
        });
        $(".page1Right").animate({
            right: "0px"
        },
        450,
        function() {
            setTimeout(function() {
                $(".logo").animate({
                    opacity: 1
                },
                500)
            },
            0);
            setTimeout(function() {
                $(".page1text1").animate({
                    opacity: 1
                },
                500)
            },
            200);
            setTimeout(function() {
                $(".page1text2").animate({
                    opacity: 1
                },
                500)
            },
            400);
            setTimeout(function() {
                $(".sign,.login").animate({
                    opacity: 1
                },
                500);
                $(".login").animate({
                    opacity: 1
                },
                500)
            },
            500)
        })
    }
    function moveInPage2() {
        console.log(page);
        $(".indexPage").css({
            top: -(page - 1) * height
        });
        $(".pageImg,.pageImgDiv").css({
            "display": "none"
        });
        $(".page2text1,.page2text2").css("display", "block");
        $(".page2text1").addClass("animated fadeInLeft");
        $(".page2text2").addClass("animated fadeInLeft");
        setTimeout(function() {
            $(".page2img1,.page2imgDiv1").css({
                "display": "block"
            });
            $(".page2img1,.page2imgDiv1").addClass("animated bounceInUp")
        },
        50);
        setTimeout(function() {
            $(".page2img2,.page2imgDiv2").css({
                "display": "block"
            });
            $(".page2img2,.page2imgDiv2").addClass("animated bounceInUp")
        },
        100);
        setTimeout(function() {
            $(".page2img3,.page2imgDiv3").css({
                "display": "block"
            });
            $(".page2img3,.page2imgDiv3").addClass("animated bounceInUp")
        },
        150);
        setTimeout(function() {
            $(".page2img4,.page2imgDiv4").css({
                "display": "block"
            });
            $(".page2img4,.page2imgDiv4").addClass("animated bounceInUp")
        },
        200);
        setTimeout(function() {
            $(".page2img5,.page2imgDiv5").css({
                "display": "block"
            });
            $(".page2img5,.page2imgDiv5").addClass("animated bounceInUp")
        },
        250);
        setTimeout(function() {
            $(".page2img6,.page2imgDiv6").css({
                "display": "block"
            });
            $(".page2img6,.page2imgDiv6").addClass("animated bounceInUp")
        },
        300);
        setTimeout(function() {
            $(".page2img7,.page2imgDiv7").css({
                "display": "block"
            });
            $(".page2img7,.page2imgDiv7").addClass("animated bounceInUp")
        },
        350);
        setTimeout(function() {
            $(".page2img8,.page2imgDiv8").css({
                "display": "block"
            });
            $(".page2img8,.page2imgDiv8").addClass("animated rotateInDownRight")
        },
        400);
        setTimeout(function() {
            $(".pageImg,.pageImgDiv,.page2text1,.page2text2").removeClass("animated rotateInDownRight bounceInUp fadeInLeft")
        },
        1400)
    }
    function moveInPage3() {
        $(".page3text1,.page3text2").css("display", "block");
        $(".page3text1").addClass("animated fadeInLeft");
        $(".page3text2").addClass("animated fadeInLeft");
        setTimeout(function() {
            $(".page3img1,.page2imgDiv1").css({
                "display": "block"
            });
            $(".page3img1,.page2imgDiv1").addClass("animated bounceInUp")
        },
        50);
        setTimeout(function() {
            $(".page3img2,.page2imgDiv2").css({
                "display": "block"
            });
            $(".page3img2,.page2imgDiv2").addClass("animated bounceInUp")
        },
        100);
        setTimeout(function() {
            $(".page3img3,.page2imgDiv3").css({
                "display": "block"
            });
            $(".page3img3,.page2imgDiv3").addClass("animated bounceInUp")
        },
        150);
        setTimeout(function() {
            $(".page3img4,.page2imgDiv4").css({
                "display": "block"
            });
            $(".page3img4,.page2imgDiv4").addClass("animated flipInX")
        },
        250);
        setTimeout(function() {
            $(".page3img5,.page2imgDiv5").css({
                "display": "block"
            });
            $(".page3img5,.page2imgDiv5").addClass("animated bounceInUp")
        },
        200);
        setTimeout(function() {
            $(".page3img6,.page2imgDiv6").css({
                "display": "block"
            });
            $(".page3img6,.page2imgDiv6").addClass("animated bounceInUp")
        },
        300);
        setTimeout(function() {
            $(".page2img7,.page2imgDiv7").css({
                "display": "block"
            });
            $(".page2img7,.page2imgDiv7").addClass("animated bounceInUp")
        },
        350);
        setTimeout(function() {
            $(".page2img8,.page2imgDiv8").css({
                "display": "block"
            });
            $(".page2img8,.page2imgDiv8").addClass("animated rotateInDownRight")
        },
        400);
        setTimeout(function() {
            $(".pageImg,.pageImgDiv,.page3text1,.page3text2").removeClass("animated rotateInDownRight flipInX bounceInUp fadeInLeft")
        },
        1400)
    }
    function moveInPage4() {
        $(".page4text1,.page4text2").css("display", "block");
        $(".page4text1").addClass("animated fadeInLeft");
        $(".page4text2").addClass("animated fadeInLeft");
        setTimeout(function() {
            $(".page4img7").css({
                "display": "block"
            });
            $(".page4img7").addClass("animated bounceInUp")
        },
        50);
        setTimeout(function() {
            $(".page4img6").css({
                "display": "block"
            });
            $(".page4img6").addClass("animated bounceInUp")
        },
        100);
        setTimeout(function() {
            $(".page4img8").css({
                "display": "block"
            });
            $(".page4img8").addClass("animated bounceInUp")
        },
        150);
        setTimeout(function() {
            $(".page4img2").css({
                "display": "block"
            });
            $(".page4img2").addClass("animated flipInX")
        },
        250);
        setTimeout(function() {
            $(".page4img5").css({
                "display": "block"
            });
            $(".page4img5").addClass("animated bounceInUp")
        },
        200);
        setTimeout(function() {
            $(".page4img9").css({
                "display": "block"
            });
            $(".page4img9").addClass("animated flipInX")
        },
        600);
        setTimeout(function() {
            $(".page4img1").css({
                "display": "block"
            });
            $(".page4img1").addClass("animated bounceInUp")
        },
        300);
        setTimeout(function() {
            $(".page4img10").css({
                "display": "block"
            });
            $(".page4img10").addClass("animated flipInX")
        },
        500);
        setTimeout(function() {
            $(".pageImg,.pageImgDiv,.page4text1,.page4text2").removeClass("animated rotateInDownRight flipInX bounceInUp fadeInLeft")
        },
        1500)
    }
    function moveInPage5() {
        $(".page6text1,.page6text2").css("display", "block");
        $(".page6text1").addClass("animated fadeInLeft");
        $(".page6text2").addClass("animated fadeInLeft");
        var img2W = parseInt($(".page6img2").css("width"));
        var img2H = parseInt($(".page6img2").css("height"));
        var img2T = parseInt($(".page6img2").css("top"));
        var img2L = parseInt($(".page6img2").css("left"));
        var img1W = parseInt($(".page6img1").css("width"));
        var img1H = parseInt($(".page6img1").css("height"));
        var img1T = parseInt($(".page6img1").css("top"));
        var img1L = parseInt($(".page6img1").css("left"));
        setTimeout(function() {
            $(".page6img1").css("top", "1000px")
        },
        10);
        setTimeout(function() {
            $(".page6img1").css({
                "display": "block"
            });
            $(".page6img1").clearQueue();
            $(".page6img1").animate({
                "top": img1T
            },
            300, "swing",
            function() {
                $(".page6img2").css({
                    "display": "block"
                });
                $(".page6img2").clearQueue();
                $(".page6img2").animate({
                    "top": img2T - (200 * bl),
                    left: img2L - (70 * bl)
                },
                500, "swing");
                $(".page6img1").animate({
                    "opacity": 0.4
                },
                250, "swing")
            })
        },
        10);
        setTimeout(function() {
            $(".page6img3").css({
                "display": "block"
            });
            $(".page6img3").addClass("animated flipInX")
        },
        300);
        setTimeout(function() {
            $(".page6img4").css({
                "display": "block"
            });
            $(".page6img4").addClass("animated flipInX")
        },
        250);
        setTimeout(function() {
            $(".page6img5 ").css({
                "display": "block"
            });
            $(".page6img5 ").addClass("animated rotateInDownRight")
        },
        500);
        setTimeout(function() {
            $(".pageImg,.page6text1,.page6text2").removeClass("animated rotateInDownRight flipInX bounceInUp fadeInLeft")
        },
        1200)
    }
    function moveInPage6() {
        setTimeout(function() {
            $(".page9img1 ").css({
                "display": "block"
            });
            $(".page9img1 ").addClass("animated rotateInUpRight");
            $(".page9img2 ").css({
                "display": "block"
            });
            $(".page9img2 ").addClass("animated rotateInDownLeft");
            $(".page9img3 ").css({
                "display": "block"
            });
            $(".page9img3 ").addClass("animated rotateInUpLeft");
            $(".page9img4 ").css({
                "display": "block"
            });
            $(".page9img4 ").addClass("animated rotateInDownRight");
            $(".page9img").on("mouseenter",
            function() {
                $(".page9img").stop();
                $(".page9img").clearQueue();
                $(".page9img11").css({
                    "-webkit-filter": "blur(8px)",
                    "opacity": 1
                });
                $(".page9img").animate({
                    "opacity": 1
                },
                200)
            });
            $(".page9img").on("mouseleave",
            function() {
                $(".page9img").stop();
                $(".page9img").clearQueue();
                $(".page9img11").css({
                    "-webkit-filter": "blur(0px)",
                    "opacity": 1
                });
                $(".page9img").not(".page9img1,.page9img2,.page9img3,.page9img4").animate({
                    "opacity": 1
                },
                500)
            })
        },
        400);
        setTimeout(function() {
            setTimeout(function() {
                $(".page9img5").css({
                    "display": "block"
                });
                $(".page9img5").animate({
                    "opacity": 1
                },
                1000)
            },
            1);
            setTimeout(function() {
                $(".page9img6").css({
                    "display": "block"
                });
                $(".page9img6").animate({
                    "opacity": 1
                },
                200)
            },
            250);
            setTimeout(function() {
                $(".page9img7").css({
                    "display": "block"
                });
                $(".page9img7").animate({
                    "opacity": 1
                },
                250)
            },
            250);
            setTimeout(function() {
                $(".page9img").removeClass("animated rotateInDownRight rotateInUpLeft rotateInDownLeft rotateInUpRight flipInX bounceInUp bounceInDown fadeInLeft")
            },
            250)
        },
        700)
    }
    function moveOutPage1() {
        setTimeout(function() {
            if (page == 2) {
                setTimeout(function() {
                    $("#img").css({
                        opacity: 0
                    });
                    $(".page1Right").css({
                        right: "-700px"
                    });
                    $("#img").css({
                        top: "-73px"
                    });
                    $(".logo").css({
                        opacity: 0
                    });
                    $(".page1text1").css({
                        opacity: 0
                    });
                    $(".page1text2").css({
                        opacity: 0
                    });
                    $(".sign,.login").css({
                        opacity: 0
                    });
                    changePage(page)
                },
                500);
                $("#page1").animate({
                    top: -height + "px"
                },
                1000);
                $(".page2bg").css({
                    "top": 1000 * bl + "px"
                });
                $(".page2bg").animate({
                    "top": 120 * bl + "px"
                },
                400);
                $("#page2").animate({
                    top: -height + "px"
                },
                250)
            } else {
                $("#img").css({
                    opacity: 0
                });
                $(".page1Right").css({
                    right: "-700px"
                });
                $("#img").css({
                    top: "-73px"
                });
                $(".logo").css({
                    opacity: 0
                });
                $(".page1text1").css({
                    opacity: 0
                });
                $(".page1text2").css({
                    opacity: 0
                });
                $(".sign,.login").css({
                    opacity: 0
                });
                changePageAnimate()
            }
        },
        1)
    }
    function moveOutPage2() {
        setTimeout(function() {
            if (page == 3 || page == 4 || page == 5 || page == 2) {
                $(".page2text1,.page2text2").css("display", "block");
                $(".page2text1").addClass("animated fadeOutUp");
                $(".page2text2").addClass("animated fadeOutUp");
                $(".pageImg,.pageImgDiv,.page2text1,.page2text2").addClass("animated fadeOutUp");
                setTimeout(function() {
                    $(".page2bg div").css({
                        "display": "none"
                    });
                    $(".pageImg,.pageImgDiv,.page2text1,.page2text2").removeClass("animated fadeOutUp bounceInUp fadeInLeft");
                    changePage(page)
                },
                500);
                console.log(page)
            } else {
                $(".page2text1,.page2text2").css("display", "block");
                $(".page2text1").addClass("animated fadeOutUp");
                $(".page2text2").addClass("animated fadeOutUp");
                $(".pageImg,.pageImgDiv,.page2text1,.page2text2").addClass("animated fadeOutUp");
                setTimeout(function() {
                    $(".page2bg div").css({
                        "display": "none"
                    });
                    $(".pageImg,.pageImgDiv,.page2text1,.page2text2").removeClass("animated fadeOutUp bounceInUp fadeInLeft");
                    changePageAnimate(page)
                },
                500);
                console.log(page)
            }
        },
        1)
    }
    function moveOutPage3() {
        setTimeout(function() {
            if (page == 3 || page == 4 || page == 2) {
                $(".page3text1,.page3text2").css("display", "block");
                $(".page3text1").addClass("animated fadeOutUp");
                $(".page3text2").addClass("animated fadeOutUp");
                $(".pageImg,.pageImgDiv,.page3text1,.page3text2").addClass("animated fadeOutUp");
                setTimeout(function() {
                    $(".page3bg div").css({
                        "display": "none"
                    });
                    $(".pageImg,.pageImgDiv,.page3text1,.page3text2").removeClass("animated fadeOutUp bounceInUp fadeInLeft");
                    changePage(page)
                },
                500);
                console.log(page)
            } else {
                $(".page3text1,.page3text2").css("display", "block");
                $(".page3text1").addClass("animated fadeOutUp");
                $(".page3text2").addClass("animated fadeOutUp");
                $(".pageImg,.pageImgDiv,.page3text1,.page3text2").addClass("animated fadeOutUp");
                setTimeout(function() {
                    $(".page3bg div").css({
                        "display": "none"
                    });
                    $(".pageImg,.pageImgDiv,.page3text1,.page3text2").removeClass("animated fadeOutUp bounceInUp fadeInLeft");
                    changePageAnimate(page)
                },
                500);
                console.log(page)
            }
        },
        10)
    }
    function moveOutPage4() {
        setTimeout(function() {
            if (page == 3 || page == 4 || page == 2) {
                $(".page4text1,.page4text2").css("display", "block");
                $(".pageImg,.pageImgDiv,.page4text1,.page4text2").addClass("animated fadeOutUp");
                setTimeout(function() {
                    $(".page4bg div").css({
                        "display": "none"
                    });
                    $(".pageImg,.pageImgDiv,.page4text1,.page4text2").removeClass("animated fadeOutUp bounceInUp fadeInLeft");
                    changePage(page)
                },
                500)
            } else {
                $(".page4text1,.page4text2").css("display", "block");
                $(".pageImg,.pageImgDiv,.page4text1,.page4text2").addClass("animated fadeOutUp");
                setTimeout(function() {
                    $(".page4bg div").css({
                        "display": "none"
                    });
                    $(".pageImg,.pageImgDiv,.page4text1,.page4text2").removeClass("animated fadeOutUp bounceInUp fadeInLeft");
                    changePageAnimate(page)
                },
                500);
                if (page == 6 || page == 5) {
                    $("#page5").animate({
                        top: -(page - 1) * height
                    },
                    400);
                    $("#page6").animate({
                        top: -(page - 1) * height
                    },
                    250)
                }
            }
        },
        10)
    }
    function moveOutPage5() {
        setTimeout(function() {
            if (page == 6) {
                $(".page6text1,.page6text2").css("display", "block");
                $(".pageImg,.page6text1,.page6text2").addClass("animated fadeOutUp");
                $("#page6").css({
                    "top": -(page - 1) * height
                });
                $("#page5").animate({
                    "top": -(page - 1) * height
                },
                550);
                setTimeout(function() {
                    $(".pageImg,.page6text1,.page6text2").css({
                        "display": "none"
                    });
                    $(".pageImg,.page6text1,.page6text2").removeClass("animated fadeOutUp bounceInUp fadeInLeft");
                    $(".page6img2").css({
                        "top": parseInt($(".page6img2").css("top")) + (200 * bl),
                        left: parseInt($(".page6img2").css("left")) + (70 * bl)
                    });
                    $(".page6img1").css({
                        "opacity": 1
                    });
                    changePage(page)
                },
                500)
            } else {
                $(".page6text1,.page6text2").css("display", "block");
                $(".pageImg,.page6text1,.page6text2").addClass("animated fadeOutUp");
                setTimeout(function() {
                    $(".pageImg,.page6text1,.page6text2").css({
                        "display": "none"
                    });
                    $(".pageImg,.page6text1,.page6text2").removeClass("animated fadeOutUp bounceInUp fadeInLeft");
                    $(".page6img2").css({
                        "top": parseInt($(".page6img2").css("top")) + (200 * bl),
                        left: parseInt($(".page6img2").css("left")) + (70 * bl)
                    });
                    $(".page6img1").css({
                        "opacity": 1
                    });
                    changePageAnimate()
                },
                100)
            }
        },
        10)
    }
    function moveOutPage6() {
        setTimeout(function() {
            $("#page6 div").not(".page9bgAll,.page9bottom,.page9top").css("display", "none");
            changePageAnimate()
        },
        10)
    }
});
