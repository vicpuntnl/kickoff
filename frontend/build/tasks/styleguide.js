/**
 * Copy project files to Patternlab
 */
var gulp = require('gulp'),
	rename = require('gulp-rename'),
	dest = global.getRoot('dest'),
    styleguidePath = global.getRoot('styleguide'), // patternlab root path
    styleguidePathPublic = global.getRoot('styleguide') + '/public', // path to public folder of patternlab
    styleguidePathSrc = global.getRoot('styleguide') + '/source'; // path to source folder of patternlab


function copyJs(){
    return gulp.src(dest + '/js/*.js')
        .pipe(gulp.dest(styleguidePathSrc + '/js'));
}

// Css goes directly to public folder of patternlab (patternlab does not do this out of the box for css)
function copyCss(){
    return gulp.src(dest + '/css/style.css')
        .pipe(gulp.dest(styleguidePathPublic + '/css'));
}

function copyImg(){
    return gulp.src(dest + '/img/*.*')
        .pipe(gulp.dest(styleguidePathSrc + '/images'));
}

function copyFonts(){
    return gulp.src(dest + '/font/*.*')
        .pipe(gulp.dest(styleguidePathSrc + '/fonts'));
}


/**
 * Copies all generated files from the dist to the patternlab source folder
 */
 function copyFiles() {
 	copyJs();
 	copyCss();
 	copyImg();
 	copyFonts();
 }


 gulp.task('styleguide-copy', copyFiles);
