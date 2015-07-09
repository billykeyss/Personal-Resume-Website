// dependencies
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin'); // minify html
var cssmin = require('gulp-cssmin'); // minify css
var purify = require('gulp-purifycss');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create(); // run a local version with livereload (it will automatiucally reload the page when you change something on your code)
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
 
// task to minify your html
gulp.task('html', function() {
  return gulp.src('assets/views/*.html') // you should change the source to fit into you project
    .pipe(htmlmin({collapseWhitespace: true})) // runs htmlmin
    .pipe(gulp.dest('dist/views')) // where the files goes after the task is completed
});
 
// task to minify css
gulp.task('css', function () {
  gulp.src('assets/css/*.css') // you should change the source to fit into you project
    .pipe(cssmin()) // runs cssmin
    .pipe(gulp.dest('dist/css')); // where the files goes after the task is completed
});

gulp.task('compress', function() {
  return gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('removecss', function() {
  return gulp.src('./public/app/example.css')
    .pipe(purify(['./public/app/**/*.js', './public/**/*.html']))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('img', function () {
  return gulp.src('assets/img/**/*')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest('dist/img'));
});
 
gulp.task('serve', ['html', 'css', 'compress'], function () {
  // Serve files from the root of this project
  browserSync.init({
    server: {
      baseDir: "./dist/"
    }
  });
});

gulp.task('default', ['html', 'css', 'compress']);
