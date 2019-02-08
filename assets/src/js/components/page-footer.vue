<template>
    <footer id="page-footer" class="row row-full row-justify-between">
        <p class="col col-6 credit">
            Made with love by <a href="https://flywheel.co" target="_blank">Flywheel Co.</a>
            &amp; <a href="https://github.com/Flywheel-Co/flywheel-adapt/graphs/contributors" target="_blank">Friends</a>.
        </p>
        <div class="col col-5 next-page" v-if="linkUrl">
            <a :href="linkUrl">{{ linkLabel }} <i class="fal fa-long-arrow-right"></i></a>
        </div>
    </footer>
</template>

<script>
export default {
    props: {
        linkLabel: {
            type: String,
            default: 'Next'
        },
        linkUrl: String
    }
}
</script>

