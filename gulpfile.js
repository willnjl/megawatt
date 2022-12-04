const gulp = require("gulp");
const { task, series, watch, dest } = require("gulp");
const browserSync = require("browser-sync");
const reload = browserSync.reload;
const autoprefixer = require("gulp-autoprefixer");
const rename = require("gulp-rename");
const cleanCSS = require("gulp-clean-css");
const uglify = require("gulp-uglify");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const concat = require("gulp-concat");
///////////////////////////////////////////////////

// Settings

let static = true; // static or local project ?;

const localUrl = "http://green14.local/"; // Local Site Url

//////////////////////////////////////////////////

let localOptions = {
  proxy: localUrl,
  https: true,
};

let staticOptions = {
  server: {
    https: true,
    baseDir: "./",
  },
};

const extention = static ? ".html" : ".php";

task("browser-sync", (cb) => {
  browserSync.init(static ? staticOptions : localOptions);
  cb();
});

const logCssWeight = (details) =>
  console.log(
    `${details.name}: ${details.stats.originalSize} => ${details.stats.minifiedSize}`
  );

task("compile-css", () => {
  return gulp
    .src("sass/app.scss")
    .pipe(sourcemaps.init())
    .pipe(sass.sync().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS({ compatibility: "ie8", debug: true }, logCssWeight))
    .pipe(sourcemaps.write())
    .pipe(rename({ basename: "style" }))
    .pipe(rename({ suffix: ".min" }))
    .pipe(dest("./css"));
});

let browserReload = (cb) => {
  reload();
  cb();
};
task("compressJs", () => {
  return (
    gulp
      .src("./js/src/**/*.js")
      .pipe(sourcemaps.init())
      // .pipe(babel({ presets: ["@babel/env"] }))
      .pipe(concat("all.min.js"))
      .pipe(uglify())
      .pipe(sourcemaps.write("."))
      .pipe(dest("./js/dist"))
  );
});

task("watcher", () => {
  watch("sass/**/*.scss", series("compile-css", browserReload));
  watch([`./**/*${extention}`, "!./node_modules", "!vendor"], browserReload);
  watch("./js/src/**/*.js", series("compressJs"));
  watch("./js/dist/*.js", browserReload);
});

task("default", series("browser-sync", "watcher"));
