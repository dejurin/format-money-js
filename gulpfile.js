const gulp = require('gulp');
const uglifyES = require('uglify-es');
const composer = require('gulp-uglify/composer');
const concat = require('gulp-concat');
const del = require('del');
const uglify = composer(uglifyES, console);

const clean = () => del(['dist/*']);

const dest = () => {
  return gulp.src('./dist/format-money.js', { allowEmpty: true })
    .pipe(concat('format-money.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist', { sourcemaps: true }));
}

gulp.task('clean', clean);
const build = gulp.series(dest);
gulp.task('build', build);

exports.clean = clean;
exports.default = build;
