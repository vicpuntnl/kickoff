define([
        'jquery',
], function breakpointsUtil
    (
        $
    ) {
    'use strict';


    /**
     * inuit breakpoints
     */
    var breakpointsObj = {
        "palm": "(max-width: 44.9375em)",
        "lap": "(min-width: 45em) and (max-width: 63.9375em)",
        "lap-and-up": "(min-width: 45em)",
        "portable": "(max-width: 63.9375em)",
        "desk": "(min-width: 64em)",
        "retina": "(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx)"
    }


    /**
      * Function to add breakpoint classes to html
      */
    function addBreakpointClasses() {
        $html = $('html');
        $html.removeClass(function (index, css) {
            return (css.match(/\bbp-\S+/g) || []).join(' ');
        });

        $.each(breakpointsObj, function (k, v) {
            if (window.matchMedia(v).matches) {
                $html.addClass('bp-' + k);
            }
        });
    };
    


    /**
     * Check breakpoint (matchMedia.js as fallback for older browsers)
     */
    function isBreakpoint(bp) {
        return matchMedia(breakpointsObj[bp]).matches;
    };



    /**
      * on resize, update breakpoints
      */
    function onResizeUpdateBreakpoint() {
        var resizeTimer;
        if (resizeTimer) {
            clearTimeout(resizeTimer);
        }
        resizeTimer = setTimeout(addBreakpointClasses, 100);
    }


   
    function init() {
        addBreakpointClasses();
        $(window).on('resize', onResizeUpdateBreakpoint);
    }
    init();



    return {
        isBreakpoint: isBreakpoint
    };
}
);