/**
 * Single doc item model
 */

import slugify from 'underscore.string/slugify'
import Highlight from 'highlight.js'

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
        this.aliases = item.aliases || [];
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

    /**
     * Does this item have any aliases?
     * @return {Boolean}
     */
    hasAliases() {
        return this.aliases && this.aliases.length;
    }

    /**
     * Getter for parsed examples syntax object
     * @return {Object}
     */
    get examplesHtml() {
        if(!this.examples) return null;

        let parsed = {};

        Object.keys(this.examples).map((lang, index) => {
            let raw = this.examples[lang];
            parsed[lang] = Highlight.highlight(lang, raw).value;
        });

        return parsed;
    }

}
