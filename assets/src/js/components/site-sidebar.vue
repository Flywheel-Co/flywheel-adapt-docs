<template>
	<div id="sidebar" class="col col-layout-left">
        <div id="sidebar-inner">
            <div class="sidebar-group" :class="{active: active == 'home', open: open == 'home'}">
                <h6><router-link :to="{name: 'home'}">Welcome</router-link></h6>
            </div>

    		<div v-for="page in pages" :key="page.id + '_sidebar_group'" class="sidebar-group" :class="{active: active == page.id, open: open == page.id}">
    			<h6>
                    <router-link :to="{name: page.id}">{{ page.title }}</router-link>
                    <i v-if="page.items" @click.prevent="open = page.id"></i>
                </h6>
    			<ul :class="{active: page.id == $route.name}">
    				<li v-for="item in page.items" :key="item.slug + '_sidebar_link'">
    					<a :href="item.url">{{ item.title }}</a>
    				</li>
    			</ul>
    		</div>
        </div>
	</div>
</template>

<script>
import gumshoe from 'gumshoejs'
import stickybits from 'stickybits'

export default {
	/** @type {Object} component props */
	props: {
		pages: Array
	},

    /** component mutable properties */
    data() {
        return {
            active: this.$route.name,
            open: this.$route.name,
        }
    },

    /** @type {Object} watched properties */
    watch: {
        /** watch the route for updates */
        '$route': 'updateActive',
    },

    /**
     * DOM ready lifecycle hook
     */
    mounted() {
        this.initGumshoe();
        stickybits('#sidebar-inner');
    },

    /** @type {Object} component methods */
    methods: {
        /**
         * Shortcut to update the active items
         */
        updateActive() {
            gumshoe.destroy();

            this.active = this.$route.name;
            this.open = this.$route.name;

            this.initGumshoe();
        },

        /**
         * Initialize the gumshoe instance
         */
        initGumshoe() {
            this.$nextTick(() => {
                gumshoe.init({selector: '#sidebar ul.active a'});
            });
        }
    }
}
</script>
