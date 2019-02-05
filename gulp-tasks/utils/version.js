/**
 * Generates a VERSION file
 *
 * This task generates a VERSION file in the project root, or in the location specified in the
 * build configuration file. If the project is a git repository, this file contains the short
 * version of the current commit hash. Otherwise, it simply contains the number "1" as a placeholder.
 *
 * @todo ability to specify version number via command line argument
 */

import config from '../../build.config.js';
import git    from 'gulp-git';
import fs     from 'fs';

module.exports = (done) => {
	let filepath = config.paths.version ? config.paths.version : 'VERSION';

	if(fs.existsSync('.git')) { // if it's a git repo
		git.exec({args : 'log --pretty="%h" -n1 HEAD', quiet: true}, (err, version) => {
			if(err) throw err;

			return fs.writeFile(filepath, version, done);
		});
	} else { // not a git repo, default to version #1
		fs.writeFile(filepath, 1, done);
	}
}