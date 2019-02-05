/**
 * Update changed images
 *
 * @link https://github.com/sindresorhus/gulp-imagemin
 */

import config from '../../build.config';
import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import changed from 'gulp-changed';
import livereload from 'gulp-livereload';

module.exports = (done) => {
	return gulp.src(config.paths.img.src)
		.pipe(changed(config.paths.img.dist))
		.pipe(imagemin([imagemin.svgo({plugins: [
					{cleanupIDs: false},
					{convertStyleToAttrs: false},
					{minimizeStyles: false},
					{mergePaths: false},
				]}
			)]
		))
		.pipe(gulp.dest(config.paths.img.dist))
		.pipe(livereload());
}