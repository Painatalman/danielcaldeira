"use strict";

// gulp and plugins
var
  gulp = require('gulp'),
  plumber = require('gulp-plumber'), // do not stop watch on error
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
  // concat = require('gulp-concat'),
  // imagemin = require('gulp-imagemin'),
  browserSync = require('browser-sync'),
  duration = require('gulp-duration'),
  source = require('vinyl-source-stream'), // transform browserify stream into something that can be "comsumed" by gulp utilities,
  browserify = require('browserify'),
  watchify = require('watchify'),
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


function handleErrors() {
  var args = Array.prototype.slice.call(arguments);
  notify.onError({
    title: "Compile Error",
    message: "<%= error.message %>"
  }).apply(this, args);
  this.emit('end'); // Keep gulp from hanging on this task
}

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

  //https://github.com/webpack/webpack-with-common-libs/blob/master/gulpfile.js
	// myConfig.plugins = myConfig.plugins.concat(
	// 	new webpack.DefinePlugin({
	// 		"process.env": {
	// 			// This has effect on the react lib size
	// 			"NODE_ENV": JSON.stringify("production")
	// 		}
	// 	}),
	// 	new webpack.optimize.DedupePlugin(),
	// 	new webpack.optimize.UglifyJsPlugin()
	// );

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
      .pipe(plumber())
      .pipe(sourcemaps.init())
      .pipe(
        postcss([
          require('postcss-partial-import')({ /* options */ }),
          autoprefixer({browsers: ['last 1 version']}),
          simplevars,
          require('postcss-nested')({ /* options */ }),
          require('postcss-inline-comment'),
          cssnano
        ]))
        .pipe(sourcemaps.write('./'))
        .pipe(
        gulp.dest(PUBLIC_STYLES)
    );
});

// Concat scripts and then uglify the result
gulp.task('scripts', function() {
  return gulp.src([SCRIPTS_DEPS + "*.js", SCRIPTS_VENDOR + "*.js", SCRIPTS_HELPERS + "*.js", SCRIPTS + '*.js'])
    .pipe(sourcemaps.init())
    .pipe(concat('app.min.js'))
    // .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(SCRIPTS_MIN))
    .pipe(notify('JS dealt with'))
    // .pipe(browserSync.reload({
    //   stream: true
    // }))
    .pipe(duration('Time for scripts: '))
    .on('error', gutil.log);
});

gulp.task('sassdoc', function() {
  var options = {
    dest: DOCS,
    verbose: true,
    display: {
      access: ['public', 'private'],
      alias: true,
      watermark: true,
    },
    groups: {
      'undefined': 'Ungrouped',
      foo: 'Foo group',
      bar: 'Bar group',
    },
    //basePath: 'https://github.com/SassDoc/sassdoc',
  };

  return gulp.src(SASS + '/**/*.scss')
    .pipe(sassDoc(options));
});


gulp.task('watch-watchify', function() {
  var watcher = watchify(browserify(SCRIPTS_BROWSERIFY_APP));
  bundle(watcher);
  watcher.on('update', function() {
    bundle(watcher);
  });
  watcher.on('log', gutil.log);
});

// http://blog.avisi.nl/2014/04/25/how-to-keep-a-fast-build-with-browserify-and-reactjs/
// BASED on: https://gist.github.com/Sigmus/9253068
// Based on: http://blog.avisi.nl/2014/04/25/how-to-keep-a-fast-build-with-browserify-and-reactjs/
function buildScript(file, watch, isDev, withReact) {

  // console.log("the bundler is:", watch)

  var props = {
      entries: [SCRIPTS + file],
      debug: isDev,
      cache: {},
      packageCache: {},
      fullPaths: watch
    },
    bundler = browserify(props);

    if (watch) {
      bundler = watchify(bundler);
    }



  if (withReact) {
    bundler.transform(reactify);
  }

  function rebundle() {
    var stream = bundler.bundle();
    return stream.on('error', handleErrors)
      .pipe(source(file))
      //.pipe(uglify())
      .pipe(gulp.dest(SCRIPTS_BUNDLED))
      .pipe(notify('JS dealt with'))
      .pipe(duration('Time for scripts: '));
  }
  bundler.on('update', function() {
    rebundle();
    gutil.log('Rebundle...');
  });
  return rebundle();
}

gulp.task('buildBrowserify', function() {
  return buildScript('main.js', false, true);
});

gulp.task('watchBrowserify', function() {
  return buildScript('main.js', true, true);
});

// Keep an eye on changes...
gulp.task('watch', function() {
  gulp.watch(STYLES + '**/*.+(css)', ['css']);
  gulp.watch([SCRIPTS + '**/*.jsx', SCRIPTS+"*.js"], ['webpack:build']);
  // gulp.watch([SCRIPTS + '**/*.js', "!"+SCRIPTS_MIN+"**/*.js"], ['scripts']);
  // gulp.watch([SCRIPTS + '**/*.js', "!"+SCRIPTS_MIN+"**/*.js"], ['watchBrowserify']);
  // gulp.watch([IMAGES + '*'], ['imagemin']);
  // gulp.watch(TEMPLATES + '*.html', browserSync.reload);
});

// What tasks does running gulp trigger?
gulp.task('default', [
  // 'browserSync',
  'css',
  //'buildBrowserify',
  // 'scripts',
  // 'imagemin',
  'watch'
], function() {
  // return buildScript('main.js', true)
});
