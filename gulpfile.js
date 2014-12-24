var gulp = require('gulp'),
    csso = require('gulp-csso'),
    imagemin = require('gulp-imagemin'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

gulp.task('images', function () {
    gulp.src('./assets/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./public/img'))

});

gulp.task('js', function () {
    gulp.src(['./assets/js/**/*.js'])
        .pipe(concat('usualdesigner.js'))
        .pipe(gulp.dest('./public/js'));
});