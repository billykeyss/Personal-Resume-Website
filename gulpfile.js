// dependencies
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin'); // minify html
var cssmin = require('gulp-cssmin'); // minify css
var rename = require('gulp-rename'); // rename file
var uglify = require('gulp-uglify'); //minify js
var browserSync = require('browser-sync').create(); // run a local version with livereload (it will automatiucally reload the page when you change something on your code)
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var image = require('gulp-image');
var deploy = require('gulp-deploy-git');

gulp.task('deploy', function() {
  return gulp.src('dist/**/*')
    .pipe(deploy({
      repository: 'https://github.com/billykeyss/billykeyss.github.io.git',
      branches:   ['master']
    }));
});

gulp.task('imageMin', function () {
    gulp.src('img/**/*')
        .pipe(image())
        .pipe(gulp.dest('dist/img'));
});

gulp.task('hint', function () {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

// task to minify your html
gulp.task('html', function () {
    return gulp.src('index.html') // you should change the source to fit into you project
        .pipe(htmlmin({
            collapseWhitespace: true
        })) // runs htmlmin
        .pipe(gulp.dest('dist')) // where the files goes after the task is completed
});

// taks to minify css
gulp.task('cssMain', function () {
    gulp.src('css/*.css') // you should change the source to fit into you project
        .pipe(cssmin()) // runs cssmin
        //.pipe(rename({suffix: '.min'})) // add a sufix 'min' (main.css -> main.min.css)
        .pipe(gulp.dest('dist/css')); // where the files goes after the task is completed
});

// taks to minify css
gulp.task('fancycss', function () {
    gulp.src('js/fancybox/*.css') // you should change the source to fit into you project
        .pipe(cssmin()) // runs cssmin
        //.pipe(rename({suffix: '.min'})) // add a sufix 'min' (main.css -> main.min.css)
        .pipe(gulp.dest('dist/js/fancybox')); // where the files goes after the task is completed
});

// taks to minify css
gulp.task('css', function () {
    gulp.src('skin/*.css') // you should change the source to fit into you project
        .pipe(cssmin()) // runs cssmin
        //.pipe(rename({suffix: '.min'})) // add a sufix 'min' (main.css -> main.min.css)
        .pipe(gulp.dest('dist/skin')); // where the files goes after the task is completed
});

gulp.task('compressMain', function () {
    return gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('compress', function () {
    return gulp.src('js/fancybox/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/fancybox'));
});

gulp.task('copy', function () {
    gulp.src('fonts/**/*')
        .pipe(gulp.dest('dist/fonts'));
    gulp.src('fonts/fontawesome')
        .pipe(gulp.dest('dist/fonts/fontawesome'));
});


gulp.task('serve', function () {
    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('run', function () {
    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('build', ['html', 'css', 'compress', 'imageMin', 'fancycss', 'cssMain', 'compressMain', 'copy']);

gulp.task('default', ['build']);
