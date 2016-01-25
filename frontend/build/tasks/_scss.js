/**
 * Process SCSS files into CSS
 */
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cmq = require('gulp-combine-mq'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    //sourcemaps = require('gulp-sourcemaps'),
    //bulkSass = require('gulp-sass-glob-import'),
    rename = require('gulp-rename'),
    minifyCSS = require('gulp-minify-css');


/**
 * Run the SCSS compilation process
 *
 * @function runScss
 * @param {Bool}     min Defines if the build is minified
 */
function runScss(min) {
    'use strict';

    var srcName = '*',
        scssSrc = global.getSrc('scss') + '/' + srcName + '.scss',
        sassOptions = {},
        autoPrefixCfg = {
            browsers: [
                'IE >= 8',
                'last 4 version'
            ],
            cascade: false
        },
        postCSSCfg = [
            autoprefixer(autoPrefixCfg)
        ],
        renameOptions = {
            suffix: '.min'
        },
        minifyCSSOptions = {
            keepSpecialComments: 0
        },
        dest = global.getDest('scss'),
        combined;

    if (min !== undefined && min !== false) {
        scssSrc = [
            global.getSrc('scss') + '**/_*.scss',
            global.getSrc('scss') + '/' + srcName + '.scss'
        ];

        

        return gulp.src(scssSrc)
            //.pipe(bulkSass())
            .pipe(sass(sassOptions).on('error', sass.logError))
//           .pipe(sourcemaps.init())
            .pipe(postcss(postCSSCfg))
//            .pipe(sourcemaps.write('./'))
            .pipe(cmq())
            .pipe(gulp.dest(dest));
    } else {
        sassOptions.outputStyle = 'compressed';

        return gulp.src(scssSrc)
            //.pipe(bulkSass())
            .pipe(sass(sassOptions).on('error', sass.logError))
            .pipe(postcss(postCSSCfg))
            .pipe(cmq())
            .pipe(minifyCSS(minifyCSSOptions))
            .pipe(rename(renameOptions))
            .pipe(gulp.dest(dest));
    }
}

/**
 * Run the SCSS prod task
 *
 * @function runScssDev
 */
function runScssProd() {
    'use strict';

   return runScss(true);
}

/**
 * Run the SCSS dev task
 *
 * @function runScssDev
 */
function runScssDev() {
    'use strict';

    return runScss(false);
}


gulp.task(
    'scss',
    [
        'scss:dev'
    ],
    runScssProd
);


gulp.task(
    'scss:dev',
    /*['clean:scss'],*/
    runScssDev 
);








// function runScss(min, destination) {
//     'use strict';

//     var srcName = 'main',
//         scssSrc = global.getSrc('scss') + '/' + srcName + '.scss',
//         sassOptions = {},
//         autoPrefixCfg = {
//             browsers: [
//                 'IE >= 8',
//                 'last 4 version'
//             ],
//             cascade: false
//         },
//         postCSSCfg = [
//             autoprefixer(autoPrefixCfg)
//         ],
//         renameOptions = {
//             suffix: '.min'
//         },
//         minifyCSSOptions = {
//             keepSpecialComments: 0
//         };

//     console.log(destination, 'Use min:', min);
//     if (min !== true) {
//         console.log('not min');
//         scssSrc = [
//             global.getSrc('scss') + '**/_*.scss',
//             global.getSrc('scss') + '/' + srcName + '.scss'
//         ];

//         return gulp.src(scssSrc)
//             .pipe(sourcemaps.init())
//             .pipe(sass(sassOptions).on('error', sass.logError))
//             .pipe(postcss(postCSSCfg))
//             .pipe(sourcemaps.write())
//             .pipe(gulp.dest(destination));
//     } else {
//         console.log('min');
//         sassOptions.outputStyle = 'compressed';

//         return gulp.src(scssSrc)
//             .pipe(sass(sassOptions).on('error', sass.logError))
//             .pipe(postcss(postCSSCfg))
//             .pipe(minifyCSS(minifyCSSOptions))
//             .pipe(rename(renameOptions))
//             .pipe(gulp.dest(destination));
//     }
// }