var gulp = require('gulp');
var less = require('gulp-less');
var fs = require('fs-extra');
var cssmin = require('gulp-clean-css');
var rename = require('gulp-rename');
var path = require('path');

const filePath = require("./config");

// const distPath = path.resolve(__dirname, './dist');
console.log(filePath);

gulp.task('buildLess', function () {
    //同步
    fs.emptyDirSync(filePath.dist);

	return gulp.src('../components/**/*.less')
    .pipe(less())
    //压缩css
    // .pipe(cssmin())
    .pipe(rename((path) => {
        //修改文件后缀
        path.extname = '.wxss';
      }))
	.pipe(gulp.dest(filePath.dist));

});

//warcher
var watcher = gulp.watch('../components/**/*.less', ['buildLess']);

watcher.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});