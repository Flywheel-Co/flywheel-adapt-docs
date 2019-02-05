/**
 * Setup livereload and listen for changes on static files
 */

import config  from '../../build.config';
import livereload from 'gulp-livereload';
import log        from 'fancy-log';
import chalk        from 'chalk';
import watch   from 'gulp-watch';

module.exports = (done) => {


	// if we're not in prod mode, skip task execution
	if(config.env !== 'development') {
		log(chalk.yellow('Skipping ') + chalk.cyan("'utils:reload'") + '. Not in development mode');
		return done();
	}

	// spin up the livereload instance
	livereload.listen();

	return watch(config.paths.reload)
		.pipe(livereload());





}