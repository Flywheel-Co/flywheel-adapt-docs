/**
 * Convert YAML data to JS for quick and easy import at runtime
 */

import config from '../../build.config';
import gulp from 'gulp';
import yaml from 'gulp-yaml';
import changed from 'gulp-changed';

module.exports = done => {

	return gulp.src(config.paths.data.src)
		.pipe(changed(config.paths.data.dist))
		.pipe(yaml({ space: 2}))
		.pipe(gulp.dest(config.paths.data.dist))
}