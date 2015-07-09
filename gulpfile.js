var gulp = require('gulp'); //require node package
var uglify = require('gulp-uglify');
var sass = require('gulp-ruby-sass');
var livereload = require('gulp-livereload')
//scripts task
//uglifies

function errorLog(error) {
	console.error.bind(error);
	this.emit('end');
}

gulp.task('scripts', function() {
	gulp.src('js/*.js')//load files
		.pipe(uglify()) //uglify them
		.on('error',errorLog)
		.pipe(gulp.dest('build/js')) //save files to minjs
})

//styles task
//uglifies
gulp.task('styles', function() {
	return sass('scss/', {style:'compressed'})
	.on('error',errorLog)
	.pipe(gulp.dest('css/'))
	.pipe(livereload())
})
//watch task
//watches JS


gulp.task('watch', function() {
	livereload.listen();
	gulp.watch('js/*.js', ['scripts']);
	gulp.watch('scss/*.scss', ['styles'])
})

// gulp.src allows us to run commands on particular directory
//.pipe allows us to run command on this selected file.
gulp.task('default',['scripts', 'styles', 'watch']);

