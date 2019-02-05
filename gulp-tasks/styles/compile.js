/**
 * Compiles Sass into common CSS and applies browser prefixes
 */

import config     from '../../build.config';
import gulp       from 'gulp';
import gulpif     from 'gulp-if';
import sass       from 'gulp-sass';
import prefixer   from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import livereload from 'gulp-livereload';

module.exports = (done) => {

	var isDev = (config.env != 'production')

	return gulp.src(config.paths.sass)
		.pipe(gulpif(isDev, sourcemaps.init()))
			.pipe(sass(config.sass).on('error', sass.logError))
			.pipe(prefixer(config.prefixer))
		.pipe(gulpif(isDev, sourcemaps.write('/')))
		.pipe(gulp.dest(config.paths.css))
		.pipe(livereload());

}