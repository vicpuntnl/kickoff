/**
 * Process SCSS files into CSS
 */
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename'),
    minifyCSS = require('gulp-cssnano');


/**
 * Run the SCSS compilation process
 *
 * @function runScss
 * @param {Bool}     min Defines if the build is minified
 */
function runScss(min, destination) {
    'use strict';

    var srcName = '*.scss',
        scssSrc = global.getSrc('scss') + '/' + srcName,
        autoPrefixCfg = {
            browsers: [
                'IE >= 8',
                'last 4 version'
            ],
            cascade: false
        },
        renameOptions = {
            suffix: '.min'
        };

    if (min) {
        return gulp.src(scssSrc)
            .pipe(sourcemaps.init())
                .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
                .pipe(autoprefixer(autoPrefixCfg))
                .pipe(minifyCSS())
                .pipe(rename(renameOptions))
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest(destination));
    } else {
        return gulp.src(scssSrc)
            .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
            .pipe(autoprefixer(autoPrefixCfg))
            .pipe(gulp.dest(destination));
    }
}

/**
 * Run the SCSS prod task
 *
 * @function runScssDev
 */
function runScssProd() {
    'use strict';

    return runScss(true, global.getDest('scss'));
}

/**
 * Run the SCSS dev task
 *
 * @function runScssDev
 */
function runScssDev(outPath) {
    'use strict';

    return runScss(false, global.getDest('scss'));
}



gulp.task(
    'scss',
    runScssProd
);


gulp.task(
    'scss:dev',
    runScssDev
);
