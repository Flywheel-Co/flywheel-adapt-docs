<template>
	<div id="sidebar" class="col col-3">
		<div v-for="page in pages" :key="page.id + '_sidebar_group'" class="sidebar-group">
			<h6><router-link :to="{name: page.id}">{{ page.title }}</router-link></h6>
			<ul>
				<li v-for="item in page.items" :key="item.slug + '_sidebar_link'">
					<router-link :to="item.url">{{ item.title }}</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	/** @type {Object} component props */
	props: {
		pages: Array
	}
}
</script>