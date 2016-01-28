# Patternlab
Note: Patternlab has it's own gulp file. The generation of the styleguide is stand-alone.
```
https://github.com/pattern-lab/patternlab-node
```


## We need to add some code to the gulpfile
The styleguide.js build task copies the css files to the /source/**/ in patternlab.
Patternlab does not listen to this update so we need to add an extra watch task (+ add an css copy task).

In the gulpfile.js, add:

```
//server and watch tasks
gulp.task('connect', ['lab'], function(){
  ...


// begin addition
  gulp.task('cp:cssRhm', function () {
      return gulp.src('./source/css/*.css')
        .pipe(gulp.dest('./public/css'))
        .pipe(browserSync.stream());
  })

  gulp.watch([
    './source/**/*',
    ],
    ['assets', 'cp:cssRhm'], function () {
        browserSync.reload();
    });
// end addition


})
```
