/**
 * Routing configuration
 */

import pages from './pages';
import Page from '../components/page.vue';
import Home from '../components/home.vue'

// homepage
const routes = [{
    path: '/',
    name: 'home',
    component: Home,
}];

// add all pages registered in config
pages.forEach(page => {
	routes.push({
		path: '/' + page.id,
		name: page.id,
		component: Page,
		props: {page: page}
	})
})


export default routes
