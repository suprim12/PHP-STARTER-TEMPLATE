var gulp = require('gulp'),
    connect = require('gulp-connect-php'),
    browserSync = require('browser-sync');
postcss = require('gulp-postcss');
cssnano = require('cssnano');
sass = require('gulp-sass');
autoprefixer = require('autoprefixer');


function style() {
    return gulp
        .src('./assets/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(gulp.dest('./assets/css'))
        .pipe(browserSync.stream());
}

gulp.task('dev', function () {
    connect.server({}, function () {
        browserSync({
            proxy: '127.0.0.1:8000'
        });
    });

    gulp.watch('**/*.php').on('change', function () {
        browserSync.reload();
    });
    gulp.watch('./assets/scss/**/*.scss').on('change', style);
    gulp.watch('./assets/js/**/*.js').on('change', browserSync.reload);
});

