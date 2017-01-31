browserify = require('browserify');
util       = require('gulp-util');
ts         = require('gulp-typescript');
gulp       = require('gulp');
rename     = require('gulp-rename');

watch      = require('gulp-watch');
source     = require('vinyl-source-stream');

var uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

gulp.task("typescript", function(){
  util.log("Start transpile");

  gulp.src("./src/**/*.ts")
      .pipe(ts({}))
      .pipe(gulp.dest('dist'));

  util.log("End transpile");
});


gulp.task("browserify", function(){
  util.log("Start browserify");

  browserify("./dist/main.js")
      .bundle()
      .pipe(source('main.bundled.js'))
      .pipe(gulp.dest('./'))

  util.log("End browserify");
});

gulp.task("watch", function(){
  gulp.watch('src/*.ts', function(){
    gulp.run("typescript");
    gulp.run("browserify");
  })
})

gulp.task('default', ['typescript', 'browserify', 'watch']);
