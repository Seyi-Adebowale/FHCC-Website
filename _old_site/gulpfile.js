
const gulp = require('gulp');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const autoprefixer = require('gulp-autoprefixer');
const webp = require('gulp-webp');

gulp.task('optimize-webp', function () {
    return gulp.src('./images/*.webp')
      .pipe(webp())
      .pipe(gulp.dest('./dist/images'));
});

gulp.task('optimize-webp2', function () {
    return gulp.src('./images/carousel-imgs/*.webp')
      .pipe(webp())
      .pipe(gulp.dest('./images/carousel-imgs'));
});
  
gulp.task('uglify', function () {
  return gulp.src('./src/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/scripts'));
});

 
gulp.task('css', function () {
    return gulp.src('./styles/*.css')
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/styles'));
});

gulp.task('run', gulp.series('optimize-webp', 'css', 'uglify'));

gulp.task('watch', function(){
    gulp.watch('./src/*.js', gulp.series('uglify'));
    gulp.watch('./styles/*.css', gulp.series('css'));
    gulp.watch('./images/*.webp', gulp.series('optimize-webp'));
});

gulp.task('default', gulp.series('run', 'watch'));
