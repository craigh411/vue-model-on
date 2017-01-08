var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');
var umd = require('gulp-umd');

gulp.task('default', function(cb) {
     pump([
        gulp.src('src/*.js'),
        uglify(),
        gulp.dest('dist')
    ],
    cb
  );
});

gulp.task('umd', function() {
  return gulp.src('src/*.js')
    .pipe(umd())
    .pipe(gulp.dest('umd'));
});
