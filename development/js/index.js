( function($) {
  $( document ).ready( function() {
    // sortMenu();
    // scrollSmooth();

    // $(document).on("click",".menuBtn",function(){
    //     $(".navDrop").hide();
    //     $(this).toggleClass('menuBtnActive');
    //     toggleMenu();
    // });

    // $(document).on("click",".countrySelect",function(){
    //     toggleCurrencyMenu();
    // });

    // $(document).on("click",".userDropDown",function(){
    //     userMenu();
    // });

    // $(document).on("click",".submenuTrigger",function(){
    //     $(".menuContainer").height("auto");
    //     if($(this).next(".navDrop").hasClass("down")){
    //         $(this).next(".navDrop").slideToggle("slow").removeClass("down");
    //   }else{
    //         $(this).next(".navDrop").slideToggle("slow").addClass("down");
    //     }
    // });

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
          $scrollToTop.fadeIn("slow");
        } else {
          $scrollToTop.fadeOut("slow");
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
          pausePlay: true,
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
