var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');

var paths = {
    scss: './assets/scss/app.scss',
    js: './assets/js/app.js'
};

 
gulp.task('scripts', function() {
  // Minify and copy all JavaScript (except vendor scripts) 
  // with sourcemaps all the way down 
  return gulp.src(paths.js)
    .pipe(babel({
        presets: ['env']
    }))
    .pipe(gulp.dest('./build/js'));
});

gulp.task('sass', function () {
    return gulp.src(paths.scss)
      .pipe(sass({
          style: 'compressed'
      }).on('error', sass.logError))
      .pipe(gulp.dest('./build/css'));
  });

// Rerun the task when a file changes 
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.scss , ['sass']);
});
 
// The default task (called when you run `gulp` from cli) 
gulp.task('default', ['watch', 'scripts', 'sass']);
