/**
 * Gulp entry file
 *
 * Available args:
 * 		--env  target environment (development, production)
 */

/**
 * Vendor imports
 */
import gulp from 'gulp';
import register from './gulp-tasks/register';

/**
 * Register the tasks
 */
register();

/**
 * Default task
 */
gulp.task('default', gulp.series(
	gulp.parallel(
		'utils:clean',
		'utils:version',
		'yaml:compile',
	),

	gulp.parallel(
		'styles:compile',
		'images:optimize'
	),

	gulp.parallel(
		'utils:reload',
		'fonts:deploy',
		'styles:minify',
		'styles:watch',
		'images:watch',
		'yaml:watch',
		'scripts:compile',
	)
));
