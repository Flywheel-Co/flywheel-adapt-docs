<template>
    <header id="site-header">
        <div class="row row-full">
            <div class="col col-layout-left">
                <a href="/" class="logo"><img src="/assets/dist/img/logo.png" alt="Flywheel Adapt"></a>
            </div>

            <div class="col col-9 col-layout-right" :class="{active: menuActive}">
                <nav id="primary-navigation">
                    <router-link v-for="page in pages" :to="{name: page.id}" :key="page.id + '_link'" @click="menuActive = false">{{ page.title }}</router-link>
                    <a href="https://github.com/flywheel-co/flywheel-adapt" target="_blank" @click="menuActive = false">GitHub</a>
                </nav>

                <button class="hamburger hamburger--stack" :class="{active: menuActive}" type="button" @click.prevent="menuActive = !menuActive">
                    <div class="inner">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </div>
                </button>
            </div>
        </div>
    </header>
</template>

<script>
export default {

    /** @type {Object} component properties */
    props: {
        pages: Array
    },

    data() {
        return {
            /** @type {Boolean} whether or not the mobile menu is active */
            menuActive: false
        }
    },

    /** @type {Object} property watcher callbacks */
    watch: {
        /**
         * Toggle the body class
         */
        menuActive() {
            document.body.classList.toggle('no-scroll');
        }
    }

}
</script>
