var gulp = require('gulp'),
    iconfont = require('gulp-iconfont'),
    iconfontCss = require('gulp-iconfont-css'),
    runTimestamp = Math.round(Date.now() / 1000),
    src = global.getSrc('icon'),
    fontSrc = './Frontend/src/font/',
    dest = global.getDest('font'),
    target = global.getSrc('css'),
    configFile = 'Frontend/build/config/iconfont.scss';

/**
 * Copies font from the source to the destination folder
 */
    function createIconFont() {
        var runTimestamp = Math.round(Date.now() / 1000);

        console.log(runTimestamp);
     return gulp
         .src(src)
            .pipe(
                iconfontCss({
                    fontName: 'icon-font',
                    path: configFile, 
                    targetPath: '../../src/scss/02-tools/_icons.scss',
                    fontPath: dest
                })
            ) 
            .pipe(
                iconfont({
                    fontName: 'icon-font',
                    formats: ['woff', 'ttf'],
                    timestamp: runTimestamp,
                    normalize: true
                })
            )

        .pipe(gulp.dest(fontSrc));
    }

    gulp.task('iconfont', createIconFont);
