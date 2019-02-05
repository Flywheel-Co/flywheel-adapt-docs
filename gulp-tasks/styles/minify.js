/**
 * Minify stylesheets
 *
 * This task should only be run in production mode
 */

import config  from '../../build.config';
import log     from 'fancy-log';
import chalk   from 'chalk';
import gulp    from 'gulp';
import cssnano from 'gulp-cssnano';

module.exports = (done) => {

	// if we're not in prod mode, skip task execution
	if(config.env !== 'production') {
		log(chalk.yellow('Skipping ') + chalk.cyan("'styles:minify'") + '. Not in production mode');
		return done();
	}

	// minify the stylesheets
	return gulp.src(config.paths.css + '/**/*.css')
		.pipe(cssnano())
		.pipe(gulp.dest(config.paths.css));
}