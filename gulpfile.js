var gulp = require('gulp'),
    htmlmin = require('gulp-htmlmin'),
    uncss = require('gulp-uncss'),
    csso = require('gulp-csso'),
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
//  Minify, compress, gzip and remove unused css
gulp.task('styles', function() {
  return gulp.src('build/stylesheets/tachyons.css')
    .pipe(uncss({
      html: ['build/**/*.html']
    }))
    .pipe(csso())
    .pipe(gulp.dest('./build/stylesheets'))
    .pipe(gzip())
    .pipe(gulp.dest('./build/stylesheets'));
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
    siteUrl: 'http://prototypes.netlify.com/'
  }))
  .pipe(gulp.dest('./build'));
});

// Run previously declared tasks on `gulp`
gulp.task('build', ['markdown', 'styles', 'scripts', 'sitemap', 'images']);
