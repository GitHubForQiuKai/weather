var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('default', function() {
    gulp.src('nodeuii/**/*.es')
        .pipe(babel({
            presets: ['es2015', 'stage-3']
        }))
        .pipe(gulp.dest('./build'));
});