var gulp = require('gulp');

gulp.task('default', function () {

	gulp.src('node_modules/gentelella/src/scss/**')
		.pipe(gulp.dest('resources/assets/sass/'));
});