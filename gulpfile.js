var gulp = require('gulp'),
  less = require('gulp-less'),
  concatCss = require('gulp-concat-css'),
  minify = require('gulp-minify-css'),
  rename = require('gulp-rename');

gulp.task('concatCss', function (cb) {
  var stream = gulp.src('css/**/*.css')
    .pipe(concatCss("slidemenu.css"))
    .pipe(gulp.dest('.'));
  return stream;
});

gulp.task('minify', ['concatCss'], function (cb) {
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
