/**
 * Main application entrypoint for Flywheel Adapt docs
 */

// vendor
import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'

// configuration
import pages from './config/pages'
import routes from './config/routes'

// components
import Cap from './components/cap.vue'
import Sidebar from './components/sidebar.vue'

// register vue router
Vue.use(VueRouter);

// initialize vue router
const router = new VueRouter({
	mode: 'history',
	routes,
    scrollBehavior(to) {
        return (to.hash) ? {selector: to.hash} : {x: 0, y: 0};
    }
});

// main app instance
const app = new Vue({
	/** @type {String} application container selector */
	el: '#app',

	/** VueRouter instance */
	router,

	/** @type {Object} child components*/
	components: {
        Cap,
        Sidebar
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
