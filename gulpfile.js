var gulp = require('gulp'),
  minify = require('gulp-minify-css'),
  rename = require('gulp-rename');

gulp.task('minify', function (cb) {
  var stream = gulp.src('slidemenu.css')
    .pipe(minify({keepBreaks: true}))
    .pipe(rename({
      suffix: '.min'
     }))
     .pipe(gulp.dest('./'));
  return stream;
});

// default gulp task
gulp.task('default', ['minify'], function() {
});
