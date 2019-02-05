/**
 * Routing configuration
 */

import pages from './pages';
import Page from '../components/page.vue';

const routes = [];

// add all pages registered in config
pages.forEach(page => {
	routes.push({
		path: '/' + page.id,
		name: page.id,
		component: Page,
		props: {page: page}
	})
})

// home
routes.push({
	path: '/',
	name: 'home',
	redirect: '/' + pages[0].id
})

export default routes
