const { src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
sass.compiler = require('node-sass');

function js(cb) {
  src('./assets/js/*.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(dest('dist/js'));
  cb();
}

function compileSass (cb) {
  src('./assets/sass/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(dest('./dist/css'));
  cb();
}

function watchAssets(cb) {
  watch(['./assets/**'], function(cb) {
    js(cb);
    compileSass(cb);
    cb();
  });
  cb();
}

exports.default = function() {
  // You can use a single task
  watch(['assets/**/*.scss', 'assets/*.scss', 'assets/**/*.js', 'assets/**/*.js'], parallel(compileSass, js));
};
exports.build = parallel(compileSass, js);
