/**
 * Move src font files into the dist directory
 */

import config     from '../../build.config';
import gulp       from 'gulp';

module.exports = (done) => {

	var isDev = (config.env != 'production')

	return gulp.src(config.paths.videos.src)
		.pipe(gulp.dest(config.paths.videos.dist))
}