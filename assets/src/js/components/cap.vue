<template>
    <div class="row row-justify-between row-align-center cap">
        <div class="col col-3">
            <div class="logo">Flywheel <strong>Adapt</strong></div>
        </div>
        <div class="col col-9 cap-nav">
            <router-link v-for="page in pages" :to="{name: page.id}" :key="page.id + '_link'">{{ page.title }}</router-link>
            <a href="https://github.com/flywheel-co/flywheel-adapt" target="_blank">GitHub</a>
        </div>
    </div>
</template>

<script>
export default {
    /** @type {Array} component properties */
    props: ['pages']
}
</script>
