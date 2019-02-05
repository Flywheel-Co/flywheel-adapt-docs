<template>
	<div id="get-started" class="page">
        <div class="page-intro">
            <h1 v-html="page.title" />
		    <div class="page-intro" v-if="page.info" v-html="page.info" />
        </div>

		<div class="page-items">
			<Item v-for="item in page.items" :item="item" :key="item.slug" />
		</div>
	</div>
</template>

<script>
import Item from './item.vue';

export default {
	/** @type {Array} component properties */
	props: {
        page: Object
    },

	/** @type {Object} child components */
	components: {Item},
}
</script>
