/**
 * Single doc item model
 */

import slugify from 'underscore.string/slugify'

export default class Item {

    /**
     * Constructor
     * @param  {Object} item
     * @param  {Page} page
     */
	constructor(item, page) {
		this.title = item.name;
		this.info = item.info;
		this.params = item.params || [];
		this.returns = item.params || null;
		this.examples = item.examples || null;
		this.slug = slugify(item.name);
		this.url = page.url + '#' + this.slug;
		this.page = page;
	}

    /**
     * Does this item have parameters set?
     * @return {Boolean}
     */
	hasParams() {
		return this.params && this.params.length;
	}

    /**
     * Does this item have examples set?
     * @return {Boolean}
     */
	hasExamples() {
		return this.examples;
	}
}
