var $ = $.noConflict();
$(document).ready(function () {
    "use strict";


//preloader
    $(window).load(function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

//sticky header
    $(window).resize(function () {
        $(".navbar-collapse").css({maxHeight: $(window).height() - $(".navbar-header").height() + "px"});
    });
//sticky header on scroll
        $(window).load(function () {
            $(".sticky-header").sticky({topSpacing: 0});
        });
//search trigger
    $('#search-trigger a, .fa-times').click(function () {
        $('.search-click').animate({height: 'toggle'}, 500);
    });
    /*====main navigation hover dropdown====*/
    $('.js-activated').dropdownHover({
        instantlyCloseOthers: false,
        delay: 100
    }).dropdown();
//shrink header
    $(function () {
        var shrinkHeader = 100;
        $(window).scroll(function () {
            var scroll = getCurrentScroll();
            if (scroll >= shrinkHeader) {
                $('.header-transparent').addClass('shrink');
            }
            else {
                $('.header-transparent').removeClass('shrink');
            }
        });
        function getCurrentScroll() {
            return window.pageYOffset || document.documentElement.scrollTop;
        }
    });

//back & white images
    $('.bw-images').BlackAndWhite({
        hoverEffect: true, // default true
        // set the path to BnWWorker.js for a superfast implementation
        webworkerPath: false,
        // to invert the hover effect
        invertHoverEffect: false,
        // this option works only on the modern browsers ( on IE lower than 9 it remains always 1)
        intensity: 1,
        speed: {//this property could also be just speed: value for both fadeIn and fadeOut
            fadeIn: 200, // 200ms for fadeIn animations
            fadeOut: 800 // 800ms for fadeOut animations
        },
        onImageReady: function (img) {
            // this callback gets executed anytime an image is converted
        }
    });


    //back to top
    //Check to see if the window is top if not then display button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });



    //mouse direction hover
    $(function () {
        $('.mouse-overlay .inner ').each(function () {
            $(this).hoverdir();
        });
    });


    //ANIMATED SKILL BARS

    $('.progress-bar').appear(function () {
        $(this).css('width', $(this).data('progress') + '%');
        $(this).parents('.skill').find('.skill-perc').css('right', 100 - $(this).data('progress') + '%');
    });

    //parallax
    $(window).stellar();

    //wow animations
    var wow = new WOW(
            {
                boxClass: 'wow', // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset: 100, // distance to the element when triggering the animation (default is 0)
                mobile: false        // trigger animations on mobile devices (true is default)
            }
    );
    wow.init();


    //hover tabs
    $('.hover-tabs > li > a').hover(function () {
        $(this).tab('show');
    });


    //Counter Up
        $('.counter').counterUp({
            delay: 10,
            time: 2000
            
        });

    //tooltip & popovers **/
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();


    //carousel slide 
    $(".work-slide-1").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        navigation: true,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        pagination: false,
        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3]

    });
    $(".work-slide-2").owlCarousel({
        autoPlay: 5000, //Set AutoPlay to 3 seconds
        navigation: true,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        pagination: false,
        items: 3,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3]

    });
    $(".testimonial-slide").owlCarousel({
        autoPlay: 6000, //Set AutoPlay to 3 seconds
        navigation: false,
        pagination: true,
        items: 1,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [979, 1],
        transitionStyle: 'goDown'
    });
    $(".testimonial-slide-2").owlCarousel({
        autoPlay: 5000, //Set AutoPlay to 3 seconds
        navigation: false,
        pagination: true,
        items: 3,
        itemsDesktop: [1199, 2],
        itemsDesktopSmall: [979, 2],
        transitionStyle: 'goDown'
    });
  $(".client-slide").owlCarousel({
        autoPlay: 6000, //Set AutoPlay to 3 seconds
        navigation: false,
        pagination: false,
        items: 5,
        itemsDesktop: [1199, 5],
        itemsDesktopSmall: [979, 3],
        transitionStyle: 'goDown'
    });
    //flex slider
    $(window).load(function () {
        $('.img-slide').flexslider({
            animation: "slide",
            controlNav: false,
            prevText: "Previous",
            nextText: "Next"
        });
    });
 
    //accordions
    /***********************************************************
     * ACCORDION
     ***********************************************************/
    $('.panel-heading a[data-toggle="collapse"]').on('click', function () {
        if ($(this).closest('.panel-heading').hasClass('active')) {
            $(this).closest('.panel-heading').removeClass('active');
        } else {
            $('.panel-heading a[data-toggle="collapse"]').closest('.panel-heading').removeClass('active');
            $(this).closest('.panel-heading').addClass('active');
        }
    });
});

