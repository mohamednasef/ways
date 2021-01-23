/* global $ */

$(document).ready(function () {

    //carousal interval
    $(".carousel").carousel({
        interval: 5000
    });

    //adjust header height
    "use strict";

    var header = $(".header");

    header.height($(window).height());

    header.resize(function () {
        header.height($(window).height());
    });

    //links add active class
    $(".links li a").click(function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
    });

    // start counter

    $(".counter").counterUp({
        delay: 10,
        time: 1000
    });
    // start filterizr
    var $filterizr = $('.filterizr-elements');
    if ($filterizr.length) {
        var $filterizrControls = $('.filterizr-controls');
        $filterizr.filterizr();
        $filterizrControls.children('li').click(function () {
            $filterizrControls.find('li.active').removeClass('active');
            $(this).addClass('active');
        });
    };

    /* ----------------------------------------------------------- */
    /*  6. PORTFOLIO GALLERY
    /* ----------------------------------------------------------- */

    $('.filtr-container').filterizr();

    //Simple filter controls

    $('.mu-simplefilter li').click(function () {
        $('.mu-simplefilter li').removeClass('active');
        $(this).addClass('active');
    });

    /* ----------------------------------------------------------- */
    /*  7. PORTFOLIO POPUP VIEW ( IMAGE LIGHTBOX )
    /* ----------------------------------------------------------- */

    $('.mu-imglink').magnificPopup({
        type: 'image',
        mainClass: 'mfp-fade',
        gallery: {
            enabled: true
        }
    });
    // button which scroll top fade in/out
    $(window).scroll(function () {

        if ($(this).scrollTop() > 100) {
            $('.sscroll-top').fadeIn();
        } else {
            $('.sscroll-top').fadeOut();
        }

    });

    // button back to top
    $('.sscroll-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 2200);
        return false;
    });
    // navbar links scroll smoothly to div
    $('.navbar-default .navbar-nav > li > a').click(function (e) {

        e.preventDefault();
        $('html,body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 2200 )
    });

    // start preloading
    $(window).on('load', function () {
        $('.loading-overlay,.loader-xbox').delay(000).fadeOut('slow', function () {
            $(this).remove();
        });
    });


   // if ($('.navbar-default .navbar-nav > li > a').scrollTop($('#' + $(this).data('value')).offset().top)) {
   //      $('body').fadeOut()
   // } 
    
 
    
    
    
    
});
