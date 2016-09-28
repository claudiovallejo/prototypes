var gulp = require('gulp'),
    cssmin = require('gulp-cssmin'),
    htmlmin = require('gulp-htmlmin'),
    gzip = require('gulp-gzip'),
    uglify = require('gulp-uglify'),
    sitemap = require('gulp-sitemap'),
    imagemin = require('gulp-imagemin');

//  Minify and compress .html
gulp.task('markdown', function(){
  gulp.src('build/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('build/'))
});
//  Minify and compress .css
gulp.task('styles', function() {
  gulp.src('build/stylesheets/*.css')
    .pipe(cssmin())
    .pipe(gzip())
    .pipe(gulp.dest('build/stylesheets'));
});

//  Optimize images
gulp.task('images', () =>
  gulp.src('build/images/**/*')
    .pipe(imagemin({ progressive: true }))
    .pipe(gulp.dest('build/images'))
);

//  Minify and compress .js
gulp.task('scripts', function () {
  gulp.src('build/javascripts/*.js')
    .pipe(uglify())
    .pipe(gzip())
    .pipe(gulp.dest('build/javascripts'))
});

//  Generate sitemap
gulp.task('sitemap', function() {
  gulp.src('build/**/*.html', {
    read: false
  })
  .pipe(sitemap({
    siteUrl: 'https://www.tymforest.com'
  }))
  .pipe(gulp.dest('./build'));
});

// Run previously declared tasks on `gulp`
gulp.task('default', ['markdown', 'styles', 'scripts', 'sitemap', 'images']);
