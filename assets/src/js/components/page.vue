<template>
	<div id="get-started" class="page">
        <div class="page-content">
            <div class="page-intro">
                <h1 v-html="page.title" />
    		    <div v-if="page.info" v-html="page.info"></div>
            </div>

    		<div class="page-items">
    			<Item v-for="item in page.items" :item="item" :key="item.slug" />
    		</div>
        </div>
        <page-footer :link-label="nextItem.label" :link-url="nextItem.url"></page-footer>
	</div>
</template>

<script>
import Item from './item.vue';
import PageFooter from './page-footer.vue';

export default {
	/** @type {Array} component properties */
	props: {
        page: Object
    },

    /** @type {Object} computed properties */
    computed: {

        /** Determine the next navigation item */
        nextItem() {
            let currentIndex = this.$root.pages.indexOf(this.page),
                data = {
                    label: 'Continue on GitHub',
                    url: 'https://github.com/flywheel-co/flywheel-adapt'
                };

            if(currentIndex < this.$root.pages.length - 1) {
                let nextItem = this.$root.pages[currentIndex + 1];

                data.label = nextItem.title;
                data.url = '/' + nextItem.id;
            }

            return data;
        }
    },

	/** @type {Object} child components */
	components: {Item, PageFooter},
}
</script>
