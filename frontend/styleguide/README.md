# Patternlab
Note: Patternlab has it's own gulp file. The generation of the styleguide is stand-alone.
```
https://github.com/pattern-lab/patternlab-node
```


## We need to add one line of code to the gulpfile
The styleguide build task copies the css files directly to the /public/css/ in patternlab.
Patternlab does nog listen to this update so we need to add a wach folder.

In the gulpfile.js, add:

```
//server and watch tasks
gulp.task('connect', ['lab'], function(){
  ...
  gulp.watch([
    './public/css/*.css', /* <-- add this line */
    ...
  });

})
```
