/**
 * Watch tasks for all the known files/actions
 */
/* globals global */
var gulp = require('gulp'),
    watch = require('gulp-watch');

/**
 * Wrapper function for all watch tasks
 *
 * @function runWatch
 */
function runWatch() {
    'use strict';

    /**
     * Watch SASS files for changes and run the css tasks
     *
     * @function watchCss
     */
    function watchCss() {
        gulp.start('scss');
    }

     watch(
         global.getSrc('scssFiles'),
         watchCss
     );

    /**
     * Watch JS files for changes and run the javascript tasks
     *
     * @function watchJs
     */
    function watchJs() { 
        gulp.start('js');
    }

    watch(
        global.getSrc('jsFiles'),
        watchJs
    );

    /**
     * Watch image files for changes and run the image tasks
     *
     * @function watchImg
     */
    function watchImg() {
        gulp.start('img');
    }

    watch(
        global.getSrc('img'),
        watchImg
    );


    /**
     * Watch font files for changes and run the font tasks
     *
     * @function watchFont
     */
    function watchFont() {
        gulp.start('font');
    }

    watch(
        global.getSrc('font'),
        watchFont
    );

    /**
     * Watch icon font files for changes and run the font tasks
     *
     * @function watchFont
     */
    function watchIconFont() {
        gulp.start('iconfont');
    }

    watch(
        global.getSrc('icon'),
        watchIconFont
    );

    gulp.start('styleguide-copy');

}

gulp.task('watch', runWatch); 
