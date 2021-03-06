/**
 * Watch Sass files for changes
 *
 * This task should only be run when in development mode
 */

import config  from '../../build.config';
import log     from 'fancy-log';
import chalk   from 'chalk';
import gulp    from 'gulp';
import watch   from 'gulp-watch';

module.exports = (done) => {

	// if we're not in development mode, skip task execution
	if(config.env !== 'development') {
		log(chalk.yellow('Skipping ') + chalk.cyan("'styles:watch'") + '. Not in development mode');
		return done();
	}

	// watch .scss files for changes
	return watch(config.paths.sass, gulp.parallel('styles:compile'));
}