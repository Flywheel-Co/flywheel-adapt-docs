/**
 * Register Gulp Tasks
 * Tasks are automatically registered and keyed with their file location
 */

import fs from 'fs';
import gulp from 'gulp';

export default () => {
	let dir   = './gulp-tasks/',
		folders = fs.readdirSync(dir),
		tasks = [];

	folders.forEach(group => {
		if(fs.statSync(dir + group).isDirectory()) {
			let groupFiles = fs.readdirSync(dir + group);

			if(groupFiles) {
				groupFiles.forEach(file => {
					let key = group + ':' + file.replace('.js', ''),
						filepath = './' + group + '/' + file;

					gulp.task(key, require(filepath));
				})
			}
		}
	})
}