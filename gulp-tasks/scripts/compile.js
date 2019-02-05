/**
 * Compile javascript assets
 */

import config  from '../../build.config';
import gulp    from 'gulp';
import named   from 'vinyl-named';
import webpack from 'webpack-stream';

module.exports = (done) => {
	// get the environment-specific webpack configuration object
	var webpackConfig = (config.env === 'production') ? config.js.production : config.js.development;

	return gulp.src(config.paths.js.src)
		.pipe(named())
		.pipe(webpack(webpackConfig))
		.pipe(gulp.dest(config.paths.js.dist));
}