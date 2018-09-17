var gulp = require('gulp');
var sequence = require('run-sequence');
var sass = require('gulp-sass');
var cleanCss = require('gulp-clean-css');

gulp.task('default', function() {
  sequence('sass', 'sass-watch')
});

gulp.task('sass', function(){
	gulp.src('assets/css/main.scss')
	.pipe(sass())
	//.pipe(cleanCss())
	.pipe(gulp.dest('css/'))
})
gulp.task('sass-watch', function(){
	gulp.watch('assets/css/*.scss', ['sass'])
})

