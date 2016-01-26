/**
 * Copy project files to Patternlab
 */
var gulp = require('gulp'),
	rename = require('gulp-rename'),
	dest = global.getRoot('dest'),
    styleguidePath = global.getRoot('styleguide'),
    styleguidePathPublic = global.getRoot('styleguide') + '/public',
    styleguidePathSrc = global.getRoot('styleguide') + '/source';


function copyJs(){
    return gulp.src(dest + '/js/*.js')
        .pipe(gulp.dest(styleguidePathSrc + '/js'));
}

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
