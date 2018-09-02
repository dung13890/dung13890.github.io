/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./development/js/index.js":
/*!*********************************!*\
  !*** ./development/js/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("( function($) {\n  $( document ).ready( function() {\n    // sortMenu();\n    // scrollSmooth();\n\n    // $(document).on(\"click\",\".menuBtn\",function(){\n    //     $(\".navDrop\").hide();\n    //     $(this).toggleClass('menuBtnActive');\n    //     toggleMenu();\n    // });\n\n    // $(document).on(\"click\",\".countrySelect\",function(){\n    //     toggleCurrencyMenu();\n    // });\n\n    // $(document).on(\"click\",\".userDropDown\",function(){\n    //     userMenu();\n    // });\n\n    // $(document).on(\"click\",\".submenuTrigger\",function(){\n    //     $(\".menuContainer\").height(\"auto\");\n    //     if($(this).next(\".navDrop\").hasClass(\"down\")){\n    //         $(this).next(\".navDrop\").slideToggle(\"slow\").removeClass(\"down\");\n    //   }else{\n    //         $(this).next(\".navDrop\").slideToggle(\"slow\").addClass(\"down\");\n    //     }\n    // });\n\n    function toggleFullscreen(elem) {\n      elem = elem || document.documentElement;\n\n      if (\n        !document.fullscreenElement &&\n        !document.mozFullScreenElement &&\n        !document.webkitFullscreenElement &&\n        !document.msFullscreenElement\n      ) {\n        if (elem.requestFullscreen) {\n          elem.requestFullscreen();\n        } else if (elem.msRequestFullscreen) {\n          elem.msRequestFullscreen();\n        } else if (elem.mozRequestFullScreen) {\n          elem.mozRequestFullScreen();\n        } else if (elem.webkitRequestFullscreen) {\n          elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);\n        }\n\n        $('#fullscreen').addClass('open');\n\n      } else {\n        if (document.exitFullscreen) {\n          document.exitFullscreen();\n        } else if (document.msExitFullscreen) {\n          document.msExitFullscreen();\n        } else if (document.mozCancelFullScreen) {\n          document.mozCancelFullScreen();\n        } else if (document.webkitExitFullscreen) {\n          document.webkitExitFullscreen();\n        }\n\n        $('#fullscreen').removeClass('open');\n      }\n    }\n\n    if (document.getElementById('fullscreen') !== null) {\n      document.getElementById('fullscreen').addEventListener('click', function () {\n        toggleFullscreen();\n      });\n    }\n\n    /* Offcanvas */\n    $('#offcanvas-toggler').on('click', function(event) {\n      event.preventDefault();\n      $('.offcanvas-init').addClass('offcanvas-active');\n    });\n\n    $('.close-offcanvas, .site-overlay').on('click', function(event) {\n      event.preventDefault();\n      $('.offcanvas-init').removeClass('offcanvas-active');\n    });\n\n    $(document).on('click', '.offcanvas-inner .menu-toggler', function(event) {\n      event.preventDefault();\n      $(this).closest('.menu-parent').toggleClass('menu-parent-open').find('>.menu-child').slideToggle(400);\n    });\n    \n    /* Header sticky */\n    if ($(\".site-header\").length) $(\".site-header\").sticky({ topSpacing: 0 });\n\n    /* Scroll to top */\n    if ($('#back-top').length) {\n      $('#back-top').on(\"click\", function (event) {\n        var id = $(this).attr(\"href\");\n        var offset = 40;\n        var target = $(id).offset().top - offset;\n\n        $(\"html, body\").animate({\n          scrollTop: target\n        }, 1500, \"easeInOutExpo\");\n\n        event.preventDefault();\n      });\n\n      $(window).on(\"scroll\", function () {\n        var $totalHeight = $(window).scrollTop();\n        var $scrollToTop = $(\"#back-top\");\n\n        if ($totalHeight > 300) {\n          $scrollToTop.fadeIn(\"slow\");\n        } else {\n          $scrollToTop.fadeOut(\"slow\");\n        }\n\n        if ($totalHeight + $(window).height() === $(document).height()) {\n          $scrollToTop.css(\"bottom\", \"90px\");\n        } else {\n          $scrollToTop.css(\"bottom\", \"20px\");\n        }\n      });\n    }\n\n    // Flex Slider\n    if ($(\".flexslider\").length) {\n      $(\".flexslider\").each(function() {\n        var e = $(this);\n\n        e.flexslider({\n          itemWidth: \"100%\",\n          pausePlay: true,\n          slideshowSpeed: 6000,\n          animation: e.data(\"animation\") || \"slide\",\n          animationLoop: e.data(\"animationLoop\") || true,\n          directionNav: e.data(\"directionNav\") || false,\n          controlNav: e.data(\"controlNav\") || true,\n          pauseOnAction: true,\n          start: function(slider){\n              $('body').removeClass('loading');\n              if (e.data(\"hidden\")) e.removeClass('flexslider-hidden');\n          },\n          after: function(slider) {\n            /* auto-restart player if paused after action */\n            if (!slider.playing) {\n                slider.play();\n            }\n          }\n        });\n      });\n    }\n\n    if ($('.single-gallery-items a').length) {\n      $('.single-gallery-items a').magnificPopup({\n        type: 'image',\n        removalDelay: 500, //delay removal by X to allow out-animation\n        callbacks: {\n          beforeOpen: function () {\n            // just a hack that adds mfp-anim class to markup \n            this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');\n            this.st.mainClass = this.st.el.attr('data-effect');\n          }\n        },\n        gallery: {\n          enabled: true\n        },\n        closeOnContentClick: true,\n        midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.\n      });\n    }\n\n  });\n}) ( jQuery );\n\n\n//# sourceURL=webpack:///./development/js/index.js?");

/***/ }),

/***/ "./development/scss/main.scss":
/*!************************************!*\
  !*** ./development/scss/main.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"css/main.css\";\n\n//# sourceURL=webpack:///./development/scss/main.scss?");

/***/ }),

/***/ 0:
/*!********************************************************************!*\
  !*** multi ./development/js/index.js ./development/scss/main.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./development/js/index.js */\"./development/js/index.js\");\nmodule.exports = __webpack_require__(/*! ./development/scss/main.scss */\"./development/scss/main.scss\");\n\n\n//# sourceURL=webpack:///multi_./development/js/index.js_./development/scss/main.scss?");

/***/ })

/******/ });