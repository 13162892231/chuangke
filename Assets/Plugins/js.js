$(function() {
    //专题跳转
    $(".nav ul li").click(function() {
        $(".nav ul li").removeClass("cur");
        $(this).addClass("cur");
    });
    $(".edu").click(function() {
        $(".all").hide();
        $(".education").show();
    });
    $(".heal").click(function() {
        $(".all").hide();
        $(".healthy").show();
        //健康轮播
        var swiper_case_heal1 = new Swiper('.case_heal1', {
            pagination: '.case_heal1_pagination',
            slidesPerView: 1,
            paginationClickable: true,
            spaceBetween: 30,
            loop: false
        });
    });
    $(".win").click(function() {
        $(".all").hide();
        $(".winchance").show();
    });
    $(".tec").click(function() {
        $(".all").hide();
        $(".technology").show();
        //科技轮播
        var swiper_case_tec1 = new Swiper('.case_tec1', {
            pagination: '.case_tec1_pagination',
            slidesPerView: 1,
            paginationClickable: true,
            spaceBetween: 30,
            loop: false
        });

        var swiper_case_tec2 = new Swiper('.case_tec2', {
            pagination: '.case_tec2_pagination',
            slidesPerView: 1,
            paginationClickable: true,
            spaceBetween: 30,
            loop: false
        });
        var swiper_case_tec3 = new Swiper('.case_tec3', {
            pagination: '.case_tec3_pagination',
            slidesPerView: 1,
            paginationClickable: true,
            spaceBetween: 30,
            loop: false
        });
        var swiper_case_tec4 = new Swiper('.case_tec4', {
            pagination: '.case_tec4_pagination',
            slidesPerView: 1,
            paginationClickable: true,
            spaceBetween: 30,
            loop: false
        });

        var swiper_case_tec5 = new Swiper('.case_tec5', {
            pagination: '.case_tec5_pagination',
            slidesPerView: 1,
            paginationClickable: true,
            spaceBetween: 30,
            loop: false
        });
        var swiper_case_tec6 = new Swiper('.case_tec6', {
            pagination: '.case_tec6_pagination',
            slidesPerView: 1,
            paginationClickable: true,
            spaceBetween: 30,
            loop: false
        });
    });

    ///js页面滚动浮动层智能定位(jQuery)实现 
    ///调用
    $(".nav").smartFloat("100%");

    var id = null;








});
//width_p:浮动栏的宽度
$.fn.smartFloat = function(width_p) {
    var position = function(element) {
        var top = element.position().top,
            pos = element.css("position");
        $(window).scroll(function() {
            var scrolls = $(this).scrollTop();
            if (scrolls > top) {
                if (window.XMLHttpRequest) {
                    element.attr("style", "position:fixed;width:" + width_p + ";top:0;");
                } else {
                    element.css({
                        top: scrolls
                    });
                }
            } else {
                element.css({
                    position: "", //absolute  
                    top: top
                });
            }
        });
    };
    return $(this).each(function() {
        position($(this));
    });
};