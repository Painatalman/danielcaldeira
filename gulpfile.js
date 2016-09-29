"use strict";

// gulp and plugins
var
  gulp = require('gulp'),
  gutil = require('gulp-util'), // logging
  notify = require('gulp-notify'), // workspace notifications
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  precss = require('precss'),
  cssnano = require('cssnano'),
  simplevars = require('postcss-simple-vars'),
  inlineComment = require('postcss-inline-comment'),
  sourcemaps = require('gulp-sourcemaps'),
  // uglify = require('gulp-uglify'),
  // imagemin = require('gulp-imagemin'),
  browserSync = require('browser-sync'),
  duration = require('gulp-duration'),
  source = require('vinyl-source-stream'), // transform browserify stream into something that can be "comsumed" by gulp utilities,
  webpack = require("webpack"),
  webpackConfig = require("./webpack.config.js");

// paths
var BASE_TEMPLATE = "./",
  TEMPLATES = BASE_TEMPLATE,
  PUBLIC = BASE_TEMPLATE + "public/",
  IMAGES = PUBLIC + "pictures/",
  IMAGES_MIN = BASE_TEMPLATE + "pictures_raw",
  STYLES = "styles/",
  PUBLIC_STYLES = PUBLIC + "styles/",
  SCRIPTS = "scripts/",
  // SCRIPTS_MIN = SCRIPTS + "min/",
  // SCRIPTS_VENDOR = SCRIPTS + "vendor/",
  // SCRIPTS_DEPS = SCRIPTS + "dependencies/",
  // SCRIPTS_HELPERS = SCRIPTS + "helpers/",
  // SCRIPTS_BUNDLED = SCRIPTS + "bundled/",
  // SCRIPTS_BROWSERIFY_APP = SCRIPTS + "greetApp.js",
  DOCS = BASE_TEMPLATE + "_docs/";

// Start browserSync server
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: BASE_TEMPLATE
    }
  });
});

gulp.task('imagemin', function() {
  return gulp.src(IMAGES + '**')
    .pipe(imagemin())
    .pipe(gulp.dest(IMAGES));
});

gulp.task("webpack:build", function(callback) {
	// modify some webpack config options
	var myConfig = Object.create(webpackConfig);

	// run webpack
	webpack(myConfig, function(err, stats) {
		if(err) throw new gutil.PluginError("webpack:build", err);
		gutil.log("[webpack:build]", stats.toString({
			colors: true
		}));
		callback();
	});
});

gulp.task('css', function () {
    return gulp.src(STYLES + "main.css")
      .pipe(sourcemaps.init())
      .pipe(postcss([
        require('postcss-partial-import')({ /* options */ }),
        autoprefixer({browsers: ['last 1 version']}),
        simplevars,
        require('postcss-strip-units')(),
        require('postcss-calc')({warnWhenCannotResolve: true}),
        require('postcss-nested')({ /* options */ }),
        require('postcss-inline-comment'),
        cssnano]))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(PUBLIC_STYLES)
    );
});

// Keep an eye on changes...
gulp.task('watch', function() {
  gulp.watch(STYLES + '**/*.+(css)', ['css']);
  gulp.watch([SCRIPTS + '**/*.jsx', SCRIPTS+"*.js"], ['webpack:build']);
  // gulp.watch([IMAGES + '*'], ['imagemin']);
  // gulp.watch(TEMPLATES + '*.html', browserSync.reload);
});

// What tasks does running gulp trigger?
gulp.task('default', [
  // 'browserSync',
  'css',
  // 'imagemin',
  'watch'
]);
