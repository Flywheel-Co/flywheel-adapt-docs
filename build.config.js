/**
 * Main build system configuration
 *
 * This file is used to configure gulp and the submodules it utilizes to produce the build process
 */

import gulpif from 'gulp-if';
import minimist from 'minimist';
import path from 'path';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import { VueLoaderPlugin } from 'vue-loader';

/**
 * Assets directory
 * @todo this should be moved somewhere more logical when restructuring the config
 * @type {String}
 */
const assets = {
	src: './assets/src/',
	dist: './assets/dist/'
}

/**
 * Webpack base config
 * @todo this should be moved somewhere more logical when restructuring the config
 * @type {Object}
 */
const webpackBase = {
	module: {
		rules: [
			{
			  	test: /\.js$/,
			  	exclude: /node_modules/,
			  	use: {
			    	loader: 'babel-loader',
			  	}
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					transformToRequire: {
					  vector: 'src',
					  img: 'src', image: 'xlink:href'
					}
				}
			},
			{
				test: /\.svg$/,
  				loader: 'svg-inline-loader'
			}
		]
	},
};

export default {

	/** @type {String} current environment */
	env: getOptions().env,

	/** @type {Object} project paths */
	paths: {
		assets: assets,
		clean: assets.dist + '*',
		sass: assets.src + 'sass/**/*.scss',
		css:  assets.dist + 'css',
		js: {
			src: assets.src + 'js/*.js',
			dist: assets.dist + 'js'
		},
		img: {
			src: assets.src + 'img/**/*',
			dist: assets.dist + 'img'
		},
		fonts: {
			src: ['./node_modules/@fortawesome/fontawesome-pro/webfonts/*', assets.src + 'fonts/*'],
			dist: assets.dist + 'fonts',
		},
		data: {
			src: assets.src + 'data/**/*.yml',
			dist: assets.dist + 'data'
		},
		reload: ['./index.html', assets.dist + 'data/**/*.json', assets.dist + 'js/**/*.js']
	},

	/** @type {Object} gulp-sass configuration */
	sass: {
		outputStyle: 'nested',
		includePaths: ['./node_modules']
	},

	/** @type {Object} gulp-autoprefixer configuration */
	prefixer: {
		browsers: [
			'last 4 versions',
		]
	},

	/**
	 * Environment-specific webpack configuration data
	 * @type {Object}
	 */
	js: {

		/**
		 * Development webpack configuration
		 * @type {Object}
		 */
		development: Object.assign({
			mode: 'development',
			watch: true,
			devtool: 'cheap-module-eval-source-map',
			resolve: {
				modules: [
					path.resolve('./node_modules'),
					path.resolve(assets.src + 'js/modules')
				],
				alias: {
				    vue: 'vue/dist/vue.js'
				}
			},
			plugins: [
				new VueLoaderPlugin()
			]
		}, webpackBase),


		/**
		 * Production webpack configuration
		 * @type {Object}
		 */
		production: Object.assign({
			mode: 'production',
			watch: false,
			resolve: {
				modules: [
					path.resolve('./node_modules'),
					path.resolve(assets.src + 'js/modules')
				],
				alias: {
				    vue: 'vue/dist/vue.min.js'
				}
			},
			plugins: [
				new UglifyJsPlugin(),
				new VueLoaderPlugin()
			]
		}, webpackBase),
	}
}

/**
 * Helper function to retrieve command line arguments
 * @return {Object}
 */
function getOptions() {
	var knownOpts = {
		string: 'env',
		default: { env: 'development' }
	};

	return minimist(process.argv.slice(2), knownOpts);
}
