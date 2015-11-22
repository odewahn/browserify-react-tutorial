//var uglify = require('gulp-uglify');
//var htmlreplace = require('gulp-html-replace');
//var streamify = require('gulp-streamify');

var gulp = require('gulp');
var connect = require('gulp-connect');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');


var path = {
  HTML: 'src/index.html',
  MINIFIED_OUT: 'build.min.js',
  OUT: 'bundle.js',
  DEST: 'public',
  DEST_BUILD: 'public/build',
  DEST_SRC: 'public',
  ENTRY_POINT: './src/jsx/App.jsx'
};

gulp.task('copy', function(){
  gulp.src(path.HTML)
    .pipe(gulp.dest(path.DEST));
});

gulp.task('server', function() {
  connect.server({
    root: ['.','public']
  });
});

gulp.task('watch', function() {
  gulp.watch(path.HTML, ['copy']);

  var watcher  = watchify(browserify({
    entries: [path.ENTRY_POINT],
    extensions: ['.jsx'],
    transform: [reactify],
    debug: true,
    cache: {}, packageCache: {}, fullPaths: true
  }));

  return watcher.on('update', function () {
    watcher.bundle()
      .pipe(source(path.OUT))
      .pipe(gulp.dest(path.DEST_SRC))
      console.log('Updated');
  })
    .bundle()
    .pipe(source(path.OUT))
    .pipe(gulp.dest(path.DEST_SRC));
});

gulp.task('default', ['copy', 'server', 'watch'])
