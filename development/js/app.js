jQuery(window).on('load', function () {
    "use strict";

    $(".preeloader").fadeOut(1000);
});

( function($) {
  $( document ).ready( function() {
    function toggleFullscreen(elem) {
      elem = elem || document.documentElement;

      if (
        !document.fullscreenElement &&
        !document.mozFullScreenElement &&
        !document.webkitFullscreenElement &&
        !document.msFullscreenElement
      ) {
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.msRequestFullscreen) {
          elem.msRequestFullscreen();
        } else if (elem.mozRequestFullScreen) {
          elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
          elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }

        $('#fullscreen').addClass('open');

      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        }

        $('#fullscreen').removeClass('open');
      }
    }

    if (document.getElementById('fullscreen') !== null) {
      document.getElementById('fullscreen').addEventListener('click', function () {
        toggleFullscreen();
      });
    }

    /* Offcanvas */
    $('#offcanvas-toggler').on('click', function(event) {
      event.preventDefault();
      $('.offcanvas-init').addClass('offcanvas-active');
    });

    $('.close-offcanvas, .site-overlay').on('click', function(event) {
      event.preventDefault();
      $('.offcanvas-init').removeClass('offcanvas-active');
    });

    $(document).on('click', '.offcanvas-inner .menu-toggler', function(event) {
      event.preventDefault();
      $(this).closest('.menu-parent').toggleClass('menu-parent-open').find('>.menu-child').slideToggle(400);
    });

    $('.offcanvas-menu .caret').on('click', function(event) {
      event.preventDefault();
      
      $(this).parent('.has-submenu').toggleClass('active');
    });
    
    /* Header sticky */
    if ($(".site-header").length) $(".site-header").sticky({ topSpacing: 0 });

    /* Scroll to top */
    if ($('#back-top').length) {
      $('#back-top').on("click", function (event) {
        var id = $(this).attr("href");
        var offset = 40;
        var target = $(id).offset().top - offset;

        $("html, body").animate({
          scrollTop: target
        }, 1500, "easeInOutExpo");

        event.preventDefault();
      });

      $(window).on("scroll", function () {
        var $totalHeight = $(window).scrollTop();
        var $scrollToTop = $("#back-top");

        if ($totalHeight > 300) {
          $scrollToTop.fadeIn();
        } else {
          $scrollToTop.fadeOut();
        }

        if ($totalHeight + $(window).height() === $(document).height()) {
          $scrollToTop.css("bottom", "90px");
        } else {
          $scrollToTop.css("bottom", "20px");
        }
      });
    }

    // Flex Slider
    if ($(".flexslider").length) {
      $(".flexslider").each(function() {
        var e = $(this);

        e.flexslider({
          itemWidth: "100%",
          pausePlay: false,
          slideshowSpeed: 6000,
          animation: e.data("animation") || "slide",
          animationLoop: e.data("animationLoop") || true,
          directionNav: e.data("directionNav") || false,
          controlNav: e.data("controlNav") || true,
          pauseOnAction: true,
          start: function(slider){
              $('body').removeClass('loading');
              if (e.data("hidden")) e.removeClass('flexslider-hidden');
          },
          after: function(slider) {
            /* auto-restart player if paused after action */
            if (!slider.playing) {
                slider.play();
            }
          }
        });
      });
    }

    if ($('.single-gallery-items a').length) {
      $('.single-gallery-items a').magnificPopup({
        type: 'image',
        removalDelay: 500, //delay removal by X to allow out-animation
        callbacks: {
          beforeOpen: function () {
            // just a hack that adds mfp-anim class to markup 
            this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
            this.st.mainClass = this.st.el.attr('data-effect');
          }
        },
        gallery: {
          enabled: true
        },
        closeOnContentClick: true,
        midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
      });
    }

  });
}) ( jQuery );

// Call & init
$(document).ready(function(){
  $('.ba-slider').each(function(){
    var cur = $(this);
    // Adjust the slider
    var width = cur.width()+'px';
    cur.find('.resize img').css('width', width);
    // Bind dragging events
    drags(cur.find('.handle'), cur.find('.resize'), cur);
  });
});

// Update sliders on resize. 
// Because we all do this: i.imgur.com/YkbaV.gif
$(window).resize(function(){
  $('.ba-slider').each(function(){
    var cur = $(this);
    var width = cur.width()+'px';
    cur.find('.resize img').css('width', width);
  });
});

function drags(dragElement, resizeElement, container) {
  
  // Initialize the dragging event on mousedown.
  dragElement.on('mousedown touchstart', function(e) {
    
    dragElement.addClass('draggable');
    resizeElement.addClass('resizable');
    
    // Check if it's a mouse or touch event and pass along the correct value
    var startX = (e.pageX) ? e.pageX : e.originalEvent.touches[0].pageX;
    
    // Get the initial position
    var dragWidth = dragElement.outerWidth(),
        posX = dragElement.offset().left + dragWidth - startX,
        containerOffset = container.offset().left,
        containerWidth = container.outerWidth();
 
    // Set limits
    minLeft = containerOffset + 10;
    maxLeft = containerOffset + containerWidth - dragWidth - 10;
    
    // Calculate the dragging distance on mousemove.
    dragElement.parents().on("mousemove touchmove", function(e) {
      
      // Check if it's a mouse or touch event and pass along the correct value
      var moveX = (e.pageX) ? e.pageX : e.originalEvent.touches[0].pageX;
      
      leftValue = moveX + posX - dragWidth;
      
      // Prevent going off limits
      if ( leftValue < minLeft) {
        leftValue = minLeft;
      } else if (leftValue > maxLeft) {
        leftValue = maxLeft;
      }
      
      // Translate the handle's left value to masked divs width.
      widthValue = (leftValue + dragWidth/2 - containerOffset)*100/containerWidth+'%';
      
      // Set the new values for the slider and the handle. 
      // Bind mouseup events to stop dragging.
      $('.draggable').css('left', widthValue).on('mouseup touchend touchcancel', function () {
        $(this).removeClass('draggable');
        resizeElement.removeClass('resizable');
      });
      $('.resizable').css('width', widthValue);
    }).on('mouseup touchend touchcancel', function(){
      dragElement.removeClass('draggable');
      resizeElement.removeClass('resizable');
    });
    e.preventDefault();
  }).on('mouseup touchend touchcancel', function(e){
    dragElement.removeClass('draggable');
    resizeElement.removeClass('resizable');
  });
}
