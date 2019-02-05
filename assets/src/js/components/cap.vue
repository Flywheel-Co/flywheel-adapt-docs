<template>
    <div class="row row-justify-between row-align-center cap">
        <div class="col col-3 col-logo">
            <div class="logo">Flywheel <strong>Adapt</strong></div>
        </div>
        <div class="col col-9 cap-nav hide-lte-mobile" :class="{active: menuActive}">
            <router-link v-for="page in pages" :to="{name: page.id}" :key="page.id + '_link'">{{ page.title }}</router-link>
            <a href="https://github.com/flywheel-co/flywheel-adapt" target="_blank">GitHub</a>
        </div>

        <div class="col col-2 col-burger">
            <button class="hamburger hamburger--stack" :class="{active: menuActive}" type="button" @click.prevent="menuActive = !menuActive">
                <div class="inner">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    /** @type {Array} component properties */
    props: ['pages'],

    /** component data */
    data() {
        return {
            /** @type {Boolean} whether or not the mobile menu is active */
            menuActive: false
        }
    },

    watch: {
        menuActive(value) {
            document.body.classList.toggle('no-scroll');
        }
    }
}
</script>
