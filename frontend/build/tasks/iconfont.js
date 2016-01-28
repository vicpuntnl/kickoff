var gulp = require('gulp'),
    iconfont = require('gulp-iconfont'),
    iconfontCss = require('gulp-iconfont-css'),
    runTimestamp = Math.round(Date.now() / 1000),
    iconfontName = 'icon-font',
    src = global.getSrc('icons'), // source files (svg's & config)
    svgSrc = src + '/*.svg', // svg icons location
    template = src + '/_iconfont.template.scss', // config file for generating '_generated.icons.scss'
    dest = global.getDest('icons'), // destination file to place fonts
    generatedScssInclude = '../../../src/icons/_generated.icons.scss'; // include sccs file with generated icon classes (relative path!!)

/**
 * Copies font from the source to the destination folder
 */
 function createIconFont() {
     var runTimestamp = Math.round(Date.now() / 1000);

     return gulp
         .src(svgSrc)
            .pipe(
                iconfontCss({
                    path: template, // The template path
                    fontName: iconfontName, // The name of the generated font family (required)
                    fontPath: dest, // Directory of font files relative to generated (S)CSS file (optional, defaults to ./)
                    targetPath: generatedScssInclude // The path where the (S)CSS file should be saved, relative to the path used in gulp.dest()
                })
            ) 
            .pipe(
                iconfont({
                    fontName: iconfontName,
                    formats: ['woff', 'ttf'],
                    timestamp: runTimestamp,
                    normalize: true
                })
            )

        .pipe(gulp.dest(dest));
}

gulp.task('iconfont', createIconFont);
