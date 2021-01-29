const gulp = require("gulp"),
 concat = require("gulp-concat"),
 autoprefixer = require("gulp-autoprefixer"),
 sass = require("gulp-sass"),
 pug = require("gulp-pug");
livereload = require("gulp-livereload");
sourcemaps = require("gulp-sourcemaps");
minify = require("gulp-minify");
notify = require("gulp-notify");

//HTML Task
gulp.task("html", function () {
 return gulp
  .src("public/html/*.pug")
  .pipe(pug({ pretty: true }))
  .pipe(gulp.dest("dist"))
  .pipe(livereload({ start: true }));
});

//css task
gulp.task("css", function () {
 return gulp
  .src(["public/css/**/*.css", "public/css/**/*.scss"])
  .pipe(sourcemaps.init())
  .pipe(sass({ outputStyle: "compressed" }))
  .pipe(autoprefixer("last 2 versions"))
  .pipe(concat("main.css"))
  .pipe(sourcemaps.write("."))
  .pipe(gulp.dest("dist/assets/css"))
  .pipe(livereload({ start: true }));
});

//JS task
gulp.task("js", function () {
 return (
  gulp
   .src("public/js/*.js")
   .pipe(concat("main.js"))
   // .pipe(minify())
   .pipe(gulp.dest("dist/assets/js"))
   .pipe(livereload({ start: true }))
 );
});

//Watch Tasks
gulp.task("watch", function () {
 require("./server.js");
 livereload.listen();
 gulp.watch("public/html/**/*.pug", gulp.series("html"));
 gulp.watch(
  ["public/css/**/*.css", "public/css/**/*.scss"],
  gulp.series("css")
 );
 gulp.watch("public/js/*.js", gulp.series("js"));
});
