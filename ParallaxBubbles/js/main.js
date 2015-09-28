//(function ($) {
//
//$(document).ready(function () {
//
//    function enableSkrollr() {
//        console.log("We are on desktop");
//
//        //         Enable Skrollr only for non-touch devices
//        if (!Modernizr.touch) {
//            var s = skrollr.init({
//                //smoothScrolling: false,
//                forceHeight: false
//            });
//            skrollr.menu.init(s, {
//                easing: 'sqrt',
//
//                //How long the animation should take in ms.
//                duration: function (currentTop, targetTop) {
//                    //By default, the duration is hardcoded at 500ms.
//                    return 1500;
//                }
//            })
//        }
//    }
//
//    function disableSkrollr() {
//        console.log("We are on mobile");
//
//        // Destroy Skrollr
//        var s = skrollr.init();
//        s.destroy();
//    }
//
//    enquire.register("screen and (min-width: 850px)", {
//        match: function () {
//            //        Enable on big screens
//            enableSkrollr();
//        },
//
//        unmatch: function () {
//            //        Disable small screens
//            disableSkrollr();
//        }
//    });
//
//});

//})(jQuery);


//function adjustWindow() {
//
//    if (winW >= 850) {
//
//        // Init Skrollr
//        var s = skrollr.init({
//            smoothScrolling: true,
//            forceHeight: false
//        });
//
//    } else {
//
//        // Init Skrollr
//        var s = skrollr.init();
//        s.destroy();
//    }
//
//    //    Check For touch
//    if (Modernizr.touch) {
//
//        // Init Skrollr
//        var s = skrollr.init();
//        s.destroy();
//    }
//}
//
//function initAdjustWindow() {
//    return {
//        match: function () {
//            adjustWindow();
//        },
//        unmatch: function () {
//            adjustWindow();
//        }
//    };
//}
//
//enquire.register("screen and (min-width : 850px)", initAdjustWindow(), false);