var $ = $.noConflict();
$(document).ready(function () {
    "use strict";
   //preloader
    $(window).load(function () {
        $('#preloader').fadeOut('fast', function () {
            $(this).remove();
        });
    });
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
    //smooth scroll
    $(function() {
  $('.smooth-scroll a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
    
    //Auto Close Responsive Navbar on Click
$(document).ready(function () {

    function close_toggle() {
        if ($(window).width() <= 768) {
            $('.navbar-collapse a').on('click', function () {
                $('.navbar-collapse').collapse('hide');
            });
        }
        else {
            $('.navbar .navbar-default a').off('click');
        }
    }
    close_toggle();
    $(window).resize(close_toggle);

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
      //Counter Up
    $(document).ready(function ($) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    });
    //testimonials
$(".testimonial-slide").owlCarousel({
        autoPlay: 6000, //Set AutoPlay to 3 seconds
        navigation: false,
        pagination: true,
        items: 1,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [979, 1],
        transitionStyle: 'goDown'
    });
    //tooltip & popovers **/
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();
    
    $('#text-rotator').flexslider({
      controlNav: false,
      directionNav: false
    });
});


