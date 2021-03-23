const { src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass');
const source = require('vinyl-source-stream');
const es = require('event-stream');
const browserify = require('browserify');
const minify = require("gulp-minify");
sass.compiler = require('node-sass');

const jsFiles = [
  './assets/js/blog.js',
  './assets/js/home.js',
  './assets/js/single.js',
];

function js(cb) {
  let tasks = jsFiles.map(function(entry) {
    return browserify([entry, './assets/js/index.js'])
      .transform('babelify', {
        presets: ['babel-preset-env']
      })
      .bundle()
      .pipe(source(entry.replace('./assets/js/', '')))
      .pipe(minify())
      .pipe(dest('dist/js'));
  });
  es.merge.apply(null, tasks);
  cb();
}

function compileSass (cb) {
  src('./assets/sass/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(dest('./dist/css'));
  cb();
}

exports.default = function() {
  // You can use a single task
  watch(['assets/**/*.scss', 'assets/*.scss', 'assets/**/*.js', 'assets/*.js'], parallel(compileSass, js));
};
exports.build = parallel(compileSass, js);
