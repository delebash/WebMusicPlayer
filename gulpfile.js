let gulp = require('gulp');
let runSequence = require('run-sequence');
let npmConfig = require('./package.json')
let NwBuilder = require('nw-builder');
//let os = require('os');

let architecture  = npmConfig.nwjs.architecture;
let version = npmConfig.nwjs.version;
let flavor = npmConfig.nwjs.flavor;
let projectname = npmConfig.name;
let dash = '-';
let outputDir = './dist/';

//Download ffmpeg nwjs version that includes html5 audio and video
//Version should match your nwjs version
//https://github.com/iteufel/nwjs-ffmpeg-prebuilt/releases

//nwjs dist path
let distnw = outputDir + projectname +'/' + architecture;
let nwjscache = './cache/0.20.0-beta2-sdk/win64';

//ffmpeg file location
let getffmpeg = './ffmpeg/ffmpeg-0.20.0-beta1-win-x64/ffmpeg.dll';


let nw = new NwBuilder({
  files: './app/**/**',   // use the glob format
  platforms: [architecture],
  version: version,
  flavor:flavor,
  buildDir:  outputDir
});

gulp.task('build-nw', function () {
  return nw.build();
});

gulp.task('run-nw', function () {
  return nw.run();
});


gulp.task('cache-copy-ffmpeg', function () {
  return gulp.src(getffmpeg)
    .pipe(gulp.dest(nwjscache));
});

gulp.task('dist-copy-ffmpeg', function () {
  return gulp.src(getffmpeg)
    .pipe(gulp.dest(distnw));
});

gulp.task('build', function(callback) {
  runSequence('build-nw','dist-copy-ffmpeg',
    callback
  );
});

gulp.task('run', function(callback) {
  runSequence('cache-copy-ffmpeg','run-nw',
    callback
  );
});
