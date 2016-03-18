var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    //mix.sass('app.scss');
    mix
      .sass('app.scss')
      .browserify('app.jsx')
      .version([
        'css/app.css',
        'js/app.js'
      ])
      .copy("resources/assets/vendor/font-awesome/fonts", "public/build/fonts");
});

/* Not elixir
var gulp        = require('gulp');
var browserify  = require('browserify');
var babelify    = require('babelify');
var uglify      = require('gulp-uglify');
var source      = require('vinyl-source-stream');
var buffer      = require('vinyl-buffer');
var sourcemaps  = require('gulp-sourcemaps');

gulp.task('browserify', function() {
  browserify('./resources/src/app.jsx', { debug: true })
    .transform(babelify)
    .bundle()
    .on("error", function (err) { console.log("Error : " + err.message); })
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./public/dist'));
});

gulp.task('default', ['browserify']);
*/
