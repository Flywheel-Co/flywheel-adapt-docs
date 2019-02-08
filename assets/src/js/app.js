/**
 * Main application entrypoint for Flywheel Adapt docs
 */

// vendor
import Vue from 'vue'
import VueRouter from 'vue-router'

// configuration
import pages from './config/pages'
import routes from './config/routes'

// components
import SiteHeader from './components/site-header.vue';
import SiteSidebar from './components/site-sidebar.vue';

// register vue router
Vue.use(VueRouter);

// initialize vue router
const router = new VueRouter({
	mode: 'history',
    linkActiveClass: 'active',
	routes,
    scrollBehavior(to) {
        return (to.hash) ? {selector: to.hash} : {x: 0, y: 0};
    },
});

// main app instance
const app = new Vue({
	/** @type {String} application container selector */
	el: '#app',

	/** VueRouter instance */
	router,

	/** @type {Object} child components*/
	components: {
        SiteHeader,
        SiteSidebar,
    },

	/**
	 * Component data generator
	 * @return {Object}
	 */
	data() {
		return {
			pages: pages,
		}
	},
})
