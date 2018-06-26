var $ = $.noConflict();
$(document).ready(function () {
    "use strict";
//preloader
    $(window).load(function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
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
    //popular dishes
    $(".popular-dishes").owlCarousel({
        autoPlay: 5000, //Set AutoPlay to 3 seconds
        navigation: true,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        pagination: false,
        items: 2,
        itemsDesktop: [1199, 2],
        itemsDesktopSmall: [979, 2]

    });
//events
// //popular dishes
    $(".owl-events").owlCarousel({
        autoPlay: 5000, //Set AutoPlay to 3 seconds
        navigation: false,
        pagination: true,
        items: 1,
        singleItem:true,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [979, 1]

    });
    //main slider master slider
    (function ($) {
        "use strict";
        var slider = new MasterSlider();

        // adds Arrows navigation control to the slider.
        slider.control('arrows');
        slider.control('timebar', {insertTo: '#masterslider'});
        slider.control('bullets');

        slider.setup('masterslider', {
            width: 1400, // slider standard width
            height: 650, // slider standard height
            space: 1,
            layout: 'fullwidth',
            loop: true,
            preload: 0,
            instantStartLayers: true,
            autoplay: true
        });
    })(jQuery);

    //menu filter
    (function ($, window, document, undefined) {
        'use strict';

        var gridContainer = jQuery('#grid-container'),
                filtersContainer = jQuery('#filters-container'),
                wrap, filtersCallback;


        /*********************************
         init cubeportfolio
         *********************************/
        gridContainer.cubeportfolio({
            layoutMode: 'grid',
            rewindNav: true,
            scrollByPage: false,
            defaultFilter: '*',
            animationType: 'slideLeft',
            gapHorizontal: 30,
            gapVertical: 30,
            gridAdjustment: 'responsive',
            mediaQueries: [{
                    width: 800,
                    cols: 2
                }, {
                    width: 500,
                    cols: 2
                }, {
                    width: 320,
                    cols: 1
                }],
            caption: 'zoom',
            displayType: 'lazyLoading',
            displayTypeSpeed: 100
        });


        /*********************************
         add listener for filters
         *********************************/
        if (filtersContainer.hasClass('cbp-l-filters-dropdown')) {
            wrap = filtersContainer.find('.cbp-l-filters-dropdownWrap');

            wrap.on({
                'mouseover.cbp': function () {
                    wrap.addClass('cbp-l-filters-dropdownWrap-open');
                },
                'mouseleave.cbp': function () {
                    wrap.removeClass('cbp-l-filters-dropdownWrap-open');
                }
            });

            filtersCallback = function (me) {
                wrap.find('.cbp-filter-item').removeClass('cbp-filter-item-active');
                wrap.find('.cbp-l-filters-dropdownHeader').text(me.text());
                me.addClass('cbp-filter-item-active');
                wrap.trigger('mouseleave.cbp');
            };
        } else {
            filtersCallback = function (me) {
                me.addClass('cbp-filter-item-active').siblings().removeClass('cbp-filter-item-active');
            };
        }

        filtersContainer.on('click.cbp', '.cbp-filter-item', function () {
            var me = $(this);

            if (me.hasClass('cbp-filter-item-active')) {
                return;
            }

            // get cubeportfolio data and check if is still animating (reposition) the items.
            if (!$.data(gridContainer[0], 'cubeportfolio').isAnimating) {
                filtersCallback.call(null, me);
            }

            // filter the items
            gridContainer.cubeportfolio('filter', me.data('filter'), function () {
            });
        });


        /*********************************
         activate counter for filters
         *********************************/
        gridContainer.cubeportfolio('showCounter', filtersContainer.find('.cbp-filter-item'), function () {
            // read from url and change filter active
            var match = /#cbpf=(.*?)([#|?&]|$)/gi.exec(location.href),
                    item;
            if (match !== null) {
                item = filtersContainer.find('.cbp-filter-item').filter('[data-filter="' + match[1] + '"]');
                if (item.length) {
                    filtersCallback.call(null, item);
                }
            }
        });

    })(jQuery, window, document);
    //parallax
    $(window).stellar();

    //testimonials
    $(".owl-testi").owlCarousel({
        autoPlay: 6000, //Set AutoPlay to 3 seconds
        navigation: true,
        pagination: false,
         navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        items: 1,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [979, 1],
        transitionStyle: 'goDown'
    });
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
});


