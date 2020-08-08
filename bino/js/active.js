jQuery('document').ready(function ($) {

    $(".logoMenuArea").sticky({
        topSpacing: 0,
    });


    var options = {
        videoId: 'LhoeoTTjMLs',
        start: '0'
    };
    $('header').tubular(options);
    // f-UGhWj1xww cool sepia hd
    // 49SKbS7Xwf4 beautiful barn sepia

    $('.SliderHome').owlCarousel({
        items: 1,
        autoplay: true,
        animateIn: 'rollIn',
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        themeClass: 'homeSlider',
        smartSpeed: 2000,
        animateOut: 'rollOut',
        responsiveClass:false,
        loop:true,

    });
    $('.CaseSlider').owlCarousel({
        items: 1,
        autoplay: true,
        themeClass: 'SliderCase',
        smartSpeed: 2000,
        autoplay: true,
        dots: true,
        loop: true,
        margin: 100,

    });
    $('.great1stSlider').owlCarousel({
        items: 5,
        autoplay: true,
        themeClass: 'Great1st',
        smartSpeed: 2000,
        autoplay: true,
        dots: true,
        loop: true,
        margin: 30,
        responsiveClass:true,
        responsive:{
            320:{
                items:4,
            },
            768:{
                items:4,
            }
        }
    });
    $('.great2ndtSlider').owlCarousel({
        items: 5,
        autoplay: true,
        themeClass: 'Great2nd',
        autoplay: true,
        dots: true,
        loop: true,
        margin: 30,
        responsiveClass:true,
        responsive:{
            320:{
                items:4,
            },
            768:{
                items:4,
            }
        }
    });
    //end of owl-carousel slider

    new WOW().init();
    $('#demo').parallaxScroll({
        friction: 0.5
    });

    //end of wow plugins


    $('.counter').counterUp({
        delay: 10,
        time: 1000,
    });

    //end of counterup plugins

    $('.IsotopNav ul li').click(function () {

        $(".IsotopNav ul li").removeClass("Active");
        $(this).addClass("Active");

        var selector = $(this).attr('data-filter');
        $(".isotopActive").isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false,
            }
        });
        return false;
    });

    //end of isotop area


    $("a.view").prettyPhoto();

    //end of prettyphoto area

    $('#responsive-menu-button').sidr({
        name: 'sidr-main',
        source: '.menu',
        side: 'right'
    });

    //end of responsive menu

    $('#nav').onePageNav({
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
        begin: function () {
            //I get fired when the animation is starting
        },
        end: function () {
            //I get fired when the animation is ending
        },
        scrollChange: function ($currentListItem) {
            //I get fired when you enter a section and I pass the list item of the section
        }
    });

});