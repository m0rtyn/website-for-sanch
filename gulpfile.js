'use strict';

const gulp = require("gulp");
// const pug = require("gulp-pug");
// const sass = require("gulp-sass");
// const concat = require("gulp-concat");
// const uglify = require("gulp-uglify");
// const plumber = require("gulp-plumber");
// const postcss = require("gulp-postcss");
// const imagemin = require("gulp-imagemin");
// const svgmin = require("gulp-svgmin");
// const rename = require("gulp-rename");
const server = require("browser-sync").create();
const run = require("run-sequence");
// const del = require("del");

gulp.task("serve", function() {
  server.init({
    server: "./",
    notify: false,
    open: true
  });

  gulp.watch("assets/styles/**/*.css");
  gulp.watch("pug/**/**/**/**/*.html");
});

gulp.task("default", function(fn) {
  run("serve", fn)
});

