var gulp         = require('gulp');
var browserSync  = require('browser-sync');


gulp.task('browser-sync', function() {
  return browserSync.init({
    server: {
      baseDir   : "./build/html",
      directory : true
    },
		startPath: ''
  });
});

gulp.task('browser-sync:reload', function() {
  browserSync.reload();
});
