// dependencies
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin'); // minify html
var cssmin = require('gulp-cssmin'); // minify css
var rename = require('gulp-rename'); // rename file
//var purify = require('gulp-purifycss');
var uglify = require('gulp-uglify'); //minify js
var browserSync = require('browser-sync').create(); // run a local version with livereload (it will automatiucally reload the page when you change something on your code)
var ghPages = require('gulp-gh-pages');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

gulp.task('hint', function () {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

gulp.task('imageMin', function () {
    return gulp.src('img/**/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/img'));
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
gulp.task('css', function () {
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



gulp.task('compress', function () {
    return gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('compress', function () {
    return gulp.src('js/fancybox/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/fancybox'));
});




gulp.task('removecss', function () {
    return gulp.src('dist/css/*.css')
        .pipe(purify(['js/**/*.js', 'index.html']))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('serve', ['html', 'css', 'compress', 'imageMin', 'fancycss', 'hint'], function () {
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

gulp.task('deploy', ['build'], function () {
    return gulp.src('dist/**/*')
        .pipe(ghPages());
});

gulp.task('build', ['html', 'css', 'compress', 'imageMin', 'fancycss']);

gulp.task('default', ['build']);