/**
 * Watch images for changes and update single image if changed
 */

import config     from '../../build.config';
import gulp       from 'gulp';
import log        from 'fancy-log';
import chalk      from 'chalk';
import watch      from 'gulp-watch';

module.exports = (done) => {
	// if we're not in development mode, skip task execution
	if(config.env !== 'development') {
		log(chalk.yellow('Skipping ') + chalk.cyan("'images:watch'") + '. Not in development mode');
		return done();
	}

	// watch images for changes
	return watch(config.paths.img.src, gulp.parallel('images:update'));
}