var gulp = require('gulp');

gulp.task('build',
	[
        'scss',
	'js',
	'font',
	'img',
        'build:dev'
	]
);

gulp.task('build:dev',
	[
        'scss:dev',
	'js:dev'
	]
);
