//var pug = require('gulp-pug');
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

// Estamos compilando los html(pug)
gulp.task('pug', function () {
  return gulp.src('src/pug/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('./public'));
});

// Estamos compilando los estilos
gulp.task('sass', function() {
  return gulp.src('src/scss/')
    .pipe(sass())
    .pipe(gulp.dest('public/css'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('serve', function() {
  browserSync.init({
    server:{
      baseDir:'./'
    }
  })
  gulp.watch('src/scss/**/*.sass', ['sass']);
  gulp.watch('public/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['sass', 'serve', 'pug']);
