/**
 * Clean the build directory
 *
 * This task removes all previously generated dist/ assets, leaving the directory empty
 */

import config from '../../build.config.js';
import del    from 'del';

module.exports = (done) => {
	del(config.paths.clean, {force: true}).then(done());
}