/**
 * Page model
 */

import slugify from 'underscore.string/slugify'
import titleize from 'underscore.string/titleize'
import humanize from 'underscore.string/humanize'

import Item from './Item';

export default class Page {

    /**
     * Constructor
     * @param  {Object} item
     */
	constructor(item) {
		this.id = item.id;
		this.info = item.info;
		this.slug = slugify(this.id);
		this.title = item.title || titleize(humanize(this.id));
		this.items = this.getItems();
		this.basicTitles = item.basicTitles || false;
	}

    /**
     * URL prop getter
     * @return {String}
     */
	get url() {
		return '/' + this.slug;
	}

    /**
     * Get the child items for population
     * @return {Array}
     */
	getItems() {
		const data = require('../../../dist/data/' + this.id + '.json');
		const items = [];

		data.forEach(item => items.push(new Item(item, this)));

		return items;
	}

}
