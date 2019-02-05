<template>
    <div class="item-title">
        <h2>
            <code v-if="titleHasCode">
                {{ item.title }}<span class="title-params" v-if="item.hasParams()"><b>(</b><template v-for="(param, index) in item.params"><template v-if="index">, </template><span><em v-if="param.type" v-html="param.type" /> <strong v-html="param.name" /><i v-if="param.default">= <i v-html="param.default" /></i></span></template><b>)</b></span>
            </code>
            <template v-else>{{ item.title }}</template>
        </h2>
        <div class="item-alias" v-if="item.hasAliases()">
            <strong>Alias:</strong>
            <template v-for="(alias, index) in item.aliases">
                <code v-html="alias"></code><template v-if="index < item.aliases.length - 1">, </template>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    /** @type {Object} component properties */
    props: {
        item: Object
    },

    /** @type {Object} computed properties */
    computed: {
        titleHasCode() {
            return !this.item.page.basicTitles;
        }
    }
}
</script>
