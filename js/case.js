/**
 * Created by 小欣 on 2016/9/3.
 */


//整合
$(function () {
    $(".logo").click(function () {
        $(this).children("a").attr("href","../redyue/index.html")
    });
    $(".case>li:eq(0)").click(function () {
        $(this).children("a").attr("href","../classical/index.html")
    });
    $(".case>li:eq(1)").click(function () {
        $(this).children("a").attr("href","../simple/index.html")
    })
})
//最新公告 动态 B
$(function () {
   var $lis = $(".news ul li");
    $lis.hide();
    $lis.eq(0).show();
    var index = 0;
    setInterval(function () {
        if(index<$lis.length){
            index ++;
        }else{
            index = 0;
        }
        $lis.hide();
        $lis.eq(index).fadeIn();
    },4000)
//    另一种方式？？？

})


//头部图标 B
$(function () {
    $(".heard-bar .weibo").mouseenter(function () {
        $(this).css("background-color","#00B7C4");
    }).mouseleave(function () {
        $(this).css("background-color","#495E6B ");
    })
    $(".heard-bar .weixin i").mouseenter(function () {
        $(this).css("background-color","#00B7C4");
        $(this).siblings().animate({
            top: 96,
            height:175,
            opacity: 1
        },1000)
    }).mouseleave(function () {
        $(this).css("background-color","#495E6B ");
        $(this).siblings().stop().animate({
            top: 41,
            height:0,
            opacity: 0
        },1000)
    })
})
//头部图标 E
//导航部分 B
$(function () {
    $(".top-nav .nav>li").mouseenter(function () {
         $(this).children("a").children("i").stop().animate({
            width:175,   //100%    175
            height:170,   //100%   170   .css("height")查看高度？
            opacity:1,
             top:0,
             left:0
        })
    }).mouseleave(function () {
        $(this).children("a").children("i").stop().animate({
            width:100,
            height:100,
            opacity:0,
            top:"15%",
            left:"21%"
        })
    })
})
//导航部分 E
//滚动条改变 让导航固定 B
$(function () {
    $(window).scroll(function () {
        var offsetTop = $(".top-nav")[0].offsetTop;  //96
        if($(window).scrollTop() > offsetTop){
            $(".top-nav").css({
                height:"90px",
                width:"100%",
            }).css({
                position:"fixed",
                top:-30,
                zIndex:10,
                paddingTop:10,
                paddingBottom:10,
                backgroundColor:"#F0F0F0"
            }).children().css({  //ul
                overflow:"hidden",
                "height":"90",
            }).find("img").css({
                position:"absolute",
                top:7,
                left:61
            })
            $(".nav").find("a").css({   //a
            "padding-top": "15%",
            "font-size": "12px",
            "line-height": "20px"
            })
           $(".lbt").css("margin-top","170px")
        }else{
            $(".lbt").css("margin-top", "0px")
            $(".top-nav").animate({
                height: "170px",
                width: "100%"
            }, 0).css({
                position: "static",
                backgroundColor: "#f5f5f5",
            }).children().animate({
                "height": "170",
            },100).find("img").css({
                position: "static",
            })
            $(".nav").find("a").css({
                //"height":170,
                "padding-top": "37%",
                "font-size": "16px",
                "line-height": "24px"
            })
        }
    })
    //滚动滑动惯性-------
    $(document).ready(function() {
            $("html").niceScroll(
                {
                    scrollspeed:100
                }
            );
        }
    );

})
//滚动条改变 让导航固定 E


//轮播图 B
$(window).load(function () {
    var $lis = $("#lbt>li");
    var pageX = $(window).width();
    $("#lbt>li img").attr("width",pageX);  //根据屏幕宽度自动调节
//页面加载时让第一张图片显示
    showOne(0,1);
//左右箭头显示  清除定时器
    $(".lbt").mouseenter(function () {
        $(".lbt>.arrow").show();
        clearInterval(timerId);  //鼠标移入清除定时器
    }).mouseleave(function () {
        $(".lbt>.arrow").hide();
        clearInterval(timerId);
        timerId=setInterval(function () {   //给定时器同一个名字
            play();
        },5000)
    })
//自动播放
    var index = 0 ;
    var timerId = setInterval(function () {
        play();
        },5000)
//左右按钮实现功能
    $(".lbt>.arrow .arrLeft").click(function () {
        if(index>0){
            index--;
        }else{
            index = $lis.length-1;
        }
        showOne(index,800);
    })
    $(".lbt>.arrow .arrRight").click(function () {
        if(index<$lis.length-1){
            index++;
        }else{
            index = 0;
        }
        showOne(index,800);
    })
    /**
     * 轮播图当前图片显示，其他图片隐藏
     * @param index   索引
     * @param ms  速度 毫秒
     */
    function showOne(index,ms){
        $lis.hide();
        $lis.eq(index).fadeIn(ms);
    }
    /**自动播放函数*/
    function play(){
        if(index<$lis.length-1){
            index++;
        }else{
            index = 0;
        }
        showOne(index,800);
    }

})
//轮播图 E
//search-nav B
$(function () {
    var $a = $(".search-nav a");
    for(var i=0;i<$a.length;i++){
        if(i%2==0){
            $a.eq(i).css("background","#00abb8");
        }else{
            $a.eq(i).css("background","#00b7c4");
        }
    }
    $a.eq(0).css("background","#EC5B42");
    $a.mouseenter(function () {
        $(this).children("i").animate({
            width:"100%",
            height:"100%",
            opacity:1,
            left:0,
            top:0
        })
    }).mouseleave(function () {
        $(this).children("i").stop().animate({
            width:"40%",
            height:"40%",
            opacity:0,
            left:"30%",
            top:"30%"
        })
    })
//search-nav E
//tag栏切换
    var $ul = $(".main>ul");
    $ul.hide();
    $ul.eq(0).show();
    var nav = $(".main>.search-nav>a");
    nav.click(function () {
        var index = $(this).index();
        $ul.eq(index).show().siblings("ul").hide();
        for(var i=0;i<$a.length;i++){
            if(i%2==0){
                nav.eq(i).css("background","#00abb8");
            }else{
                nav.eq(i).css("background","#00b7c4");
            }
        }
        nav.eq(index).css("background","#EC5B42");
    })
})
//案例图片动画效果 B
$(function () {
    $(".case .pic").attr({
        width:380,
        height:238
    })
    $(".case li").mouseenter(function () {
        $(this).children("a").children().animate({
            top:-20,
            left:-20,
            width:"120%",
            height:"120%"
        },0).css("transform","rotate(8deg)");
        $(this).children("i").children().animate({
            marginTop: -50,
            marginLeft: -50,
            zIndex: 3,
            width: 100,
            height: 100,
            opacity: 1
        },0)
    }).mouseleave(function () {
        $(this).children("a").children().stop().animate({
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
        }, 0).css("transform", "rotate(0deg)");
        $(this).children("i").children().animate({
            marginTop: -5,
            marginLeft: -5,
            zIndex: 3,
            width: 10,
            height: 10,
            opacity: 0
        },0)
    })
})
//案例图片信息 E
//瀑布流 B
$(window).load(function () {
    var data = [
        {"src":"images/11.png"},
        {"src":"images/22.png"},
        {"src":"images/33.png"},
        {"src":"images/77.png"},
        {"src":"images/99.png"},
        {"src":"images/kj1.jpg"},
        {"src":"images/kj2.jpg"},
        {"src":"images/kj3.jpg"},
        {"src":"images/kj4.jpg"},
        {"src":"images/my1.jpg"},
        {"src":"images/my2.jpg"},
        {"src":"images/my3.jpg"}
    ]
    $(".main>.more").click(function () {
        $(".main>ul").show();
    })
})

//小火箭
//$(function() {
//    var e = $("#rocket-to-top"),
//        t = $(document).scrollTop(),
//        n,
//        r,
//        i = !0;
//    $(window).scroll(function() {
//        var t = $(document).scrollTop();
//        t == 0 ? e.css("background-position") == "0px 0px" ? e.fadeOut("slow") : i && (i = !1, $(".level-2").css("opacity", 1), e.delay(100).animate({
//                marginTop: "-1000px"
//            },
//            "normal",
//            function() {
//                e.css({
//                    "margin-top": "-125px",
//                    display: "none"
//                }),
//                    i = !0
//            })) : e.fadeIn("slow")
//    }),
//        e.hover(function() {
//                $(".level-2").stop(!0).animate({
//                    opacity: 1
//                })
//            },
//            function() {
//                $(".level-2").stop(!0).animate({
//                    opacity: 0
//                })
//            }),
//        $(".level-3").click(function() {
//            function t() {
//                var t = e.css("background-position");
//                if (e.css("display") == "none" || i == 0) {
//                    clearInterval(n),
//                        e.css("background-position", "0px 0px");
//                    return
//                }
//                switch (t){
//                    case "0px 0px"://喷火的火箭背景位置
//                        e.css("background-position", "-298px 0px");
//                        break;
//                    case "-298px 0px":
//                        e.css("background-position", "-447px 0px");
//                        break;
//                    case "-447px 0px":
//                        e.css("background-position", "-596px 0px");
//                        break;
//                    case "-596px 0px":
//                        e.css("background-position", "-745px 0px");
//                        break;
//                    case "-745px 0px":
//                        e.css("background-position", "-298px 0px");
//                }
//            }
//            if (!i) return;
//            n = setInterval(t, 50),
//                $("html,body").animate({scrollTop: 0},5000);
//        });
//});
//













