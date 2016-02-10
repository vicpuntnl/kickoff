var gulp = require('gulp');

gulp.task('build',
	[
        'scss:min',
	'js:min',
	'font',
	'img',
	]
);

gulp.task('build:dev',
	[
        'scss:dev',
	'js:dev'
	]
);
