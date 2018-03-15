var gulp = require('gulp');
var less = require('gulp-less');
var fs = require('fs-extra');
// clean = require('gulp-clean');
var parseArgs = require('minimist')(process.argv);
var cssmin = require('gulp-clean-css');
var rename = require('gulp-rename');
var path = require('path');

const filePath = require("./config");

let { dist } = parseArgs;

gulp.task('build', function () {
    //同步
    fs.emptyDirSync(dist);

	return gulp.src(['../components/**/*.less','!../components/**/_*.less'])
    .pipe(less())
    //压缩css
    // .pipe(cssmin())
    .pipe(rename((path) => {
        //修改文件后缀
        path.extname = '.wxss';
      }))
	.pipe(gulp.dest(dist));

});

//warcher
var watcher = gulp.watch('../components/**/*.less', ['build']);

watcher.on('change', function(event) {
  console.log('\n'+'File ' + event.path + ' was ' + event.type + ', running tasks...'+'\n');
});