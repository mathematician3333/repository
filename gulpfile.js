var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var tinyPNG = require('gulp-tinypng-compress');


// сжатие css
  gulp.task('minify-css', async function(done) {
     gulp.src('./src/css/*.css')
     .pipe(cleanCSS({
         compatibility: 'ie8'
        }))
    .pipe(gulp.dest('dist/css/'))
    done();
  });

 //отправка js

  gulp.task('move-js', async function(done) {
     gulp.src('./src/js/*.js')
    .pipe(gulp.dest('dist/js/'))
    done();
  });
// сжатие html 
  gulp.task('htmlmin', async function(done) {
    gulp.src('./src/*.html')
    .pipe(htmlmin({ 
        collapseWhitespace: true 
    }))
   .pipe(gulp.dest('dist'))
   done();
 });
 // сжатие фрифтов 
 gulp.task('fonts', async function(done) {
    gulp.src('./src/fonts/**/*')
   .pipe(gulp.dest('dist/fonts'))
   done();
 });
 //tinyPNG фото уменьшает размер
 gulp.task('tinypng', async function (done) {
    gulp.src('./src/img/**/*.{png,jpg,jpeg}')
        .pipe(tinyPNG({
            key: 'DcHBdHDs114KMryx57gy3PJPN6xL2gKT'
        }))
        .pipe(gulp.dest('dist/img/'));
        done();
    });
// только одной командой gulp выполнить все функции
    gulp.task('default', gulp.parallel('minify-css', 'move-js', 'fonts','htmlmin','tinypng', async function (done) {
        
    (done);
  }));
  
 