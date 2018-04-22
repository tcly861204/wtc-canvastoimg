const gulp = require('gulp');
const babel = require("gulp-babel");
const uglify = require('gulp-uglify');
const Browsersync = require('browser-sync').create();
const rename = require('gulp-rename');

//开启自动刷新服务
gulp.task('serve', function() {
  Browsersync.init({
      open: 'localhost:8082', //用局域网ip打开
      server: {
          baseDir: "./",
          directory: true
      }
  });
});

// canvastoimg.min
/*压缩js*/
gulp.task('default',['serve'],function (cb) {
  return gulp.src("./src/*.js")
      .pipe(babel())
      .pipe(uglify({
        mangle: true, //类型：Boolean 默认：true 是否修改变量名
        compress: true  //类型：Boolean 默认：true 是否完全压缩
      }))
      .pipe(rename(function (path) {
        path.dirname += "./dist";
        path.basename += ".min";
        path.extname = ".js"
      }))
      .pipe(gulp.dest("./dist"));
});