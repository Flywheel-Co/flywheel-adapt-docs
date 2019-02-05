/**
 * Pages configuration
 */

import Page from '../models/Page'

/** @type {Array} transformed data objects */
const transformed = [];

/** @type {Array} base data objects */
const data = [
	{
		id: 'get-started',
		info: "Getting started with Flywheel Adapt is as simple as installing the library and \
               including it in your project. Once up and running, modify any necessary settings and \
               you're off to the races.",
        basicTitles: true,
	},
	{
		id: 'mixins',
		info: "A number of mixins are packaged with Flywheel Adapt to assist in speedy development."
	},
	{
		id: 'classes',
		info: "A variety of helper CSS classes are provided by Flywheel Adapt to assist with common patterns."
	},
	{
		id: 'grid',
		title: 'Grid Library',
		info: "Flywheel Adapt includes a basic grid layout library which generates classes and \
		       modifiers for a simple grid pattern."
	},
	{
		id: 'functions',
		info: 'Utility functions to assist with commonly used calculations.'
	},
];

data.forEach(item => transformed.push(new Page(item)));

export default transformed;

