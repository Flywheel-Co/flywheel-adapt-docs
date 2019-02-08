<template>
	<div id="home" class="page">
        <div class="page-content">
            <p class="lg">Welcome to Flywheel Adapt, a dead-simple Sass library geared towards lightening the load.</p>
            <p>
                Adapt was initially created as an internal utility over at <a href="https://flywheel.co">Flywheel Co.</a>
                as an alternative to all the larger, more bloated Sass utility libraries available.
            </p>
            <p>
                Comprised of a basic, yet powerful set of mixins, classes, a grid layout library,
                and helper functions, Adapt is geared towards getting your project's styles moving forward quickly.
                With a quick and easy install process, and an unintrusive presence, Flywheel Adapt can
                be integrated with projects both old and new without all the hassle.
            </p>
            <p>
                <a href="/get-started" class="button">Get Started <i class="fal fa-long-arrow-right"></i></a>
            </p>
        </div>
        <page-footer link-label="Get Started" link-url="/get-started"></page-footer>
	</div>
</template>

<script>
import PageFooter from './page-footer.vue';

export default {
    components: {PageFooter}
}
</script>
