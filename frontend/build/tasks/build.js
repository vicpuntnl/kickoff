var gulp = require('gulp');

gulp.task('build',
	[
        'scss',
		'js',
		'font',
		'img'
	], function() {
        gulp.start('styleguide-copy');
    }
);
