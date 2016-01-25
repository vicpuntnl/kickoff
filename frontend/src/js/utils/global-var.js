define([
], function globalVar(
) {
    'use strict';


    var settings = {
    };


    var animation = {
        swiftOut: [.55, 0, .1, 1],
        speed: {
            slow: 800,
            medium: 500,
            normal: 250,
            fast: 150
        }
    };


    return {
        settings: settings,
        animation: animation
    };
});
