var gulp       = require('gulp');
var gulpStylus = require('gulp-stylus');

gulp.task('css', function() {
    return gulp.src([
        './stylus/**/*.styl',
        '!./stylus/_**/*.styl'
        ])
      .pipe(gulpStylus({
          compress : false,
          linenos  : false,
          size: {
              title:'styles'
          }
      }))
      .pipe(gulp.dest("./css"));
});
