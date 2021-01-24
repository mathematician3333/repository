var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var tinyPNG = require('gulp-tinypng-compress');

gulp.task('default', defaultTask);
function defaultTask(done) {
    
    done();
  }
  
  exports.default = defaultTask
// сжатие css
  gulp.task('minify-css', function(done) {
     gulp.src('./src/css/*.css')
     .pipe(cleanCSS({
         compatibility: 'ie8'
        }))
    .pipe(gulp.dest('dist/css/'))
    done();
  });

 //сжатие js

  gulp.task('move-js', function(done) {
     gulp.src('./src/js/*.js')
     
    .pipe(gulp.dest('dist/js/'))
    done();
  });
// сжатие html 
  gulp.task('htmlmin', function(done) {
    gulp.src('./src/*.html')
    .pipe(htmlmin({ 
        collapseWhitespace: true 
    }))
   .pipe(gulp.dest('dist'))
   done();
 });
 // сжатие фрифтов 
 gulp.task('fonts', function(done) {
    gulp.src('./src/fonts/**/*')
   .pipe(gulp.dest('dist/fonts'))
   done();
 });
 //tinyPNG фото уменьшает размер
 gulp.task('tinypng', function (done) {
    gulp.src('./src/img/**/*.{png,jpg,jpeg}')
        .pipe(tinyPNG({
            key: 'DcHBdHDs114KMryx57gy3PJPN6xL2gKT'
        }))
        .pipe(gulp.dest('dist/img/'));
        done();
    });