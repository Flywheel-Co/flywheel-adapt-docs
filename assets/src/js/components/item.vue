<template>
    <section class="item" :id="item.slug">
        <item-title :item="item" />
        <div class="item-info" v-if="item.info" v-html="md(item.info)" />

        <div class="item-params item-panel" v-if="item.hasParams()">
            <h4>Parameters</h4>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="param in item.params">
                        <td scope="row"><code v-html="param.name"></code></td>
                        <td><code v-html="param.type" /></td>
                        <td>
                            {{ param.info }}
                            <div v-if="param.default" class="item-default"><strong>Default:</strong> <code>{{ param.default }}</code></div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="item-examples" v-if="item.hasExamples()">
            <h4 v-html="examplesHeadline"></h4>
            <div class="item-example" v-for="(example, lang) in item.examples">
                <div class="item-example-lang" v-html="lang"></div>
                <pre :class="'highlight-' + lang"><code>{{ example }}</code></pre>
            </div>
        </div>
    </section>
</template>

<script>
import MarkdownIt from 'markdown-it'
import Highlight from 'highlight.js'
import ItemTitle from './item/title.vue';

const markdown = new MarkdownIt({
    html: true,
})

export default {

    /** @type {Array} component properties */
    props: {
        item: Object
    },

    /** @type {Object} child components */
    components: { ItemTitle },

    /** @type {Object} computed properties */
    computed: {
        /**
         * Generate the headline for the examples section
         * @return {String}
         */
        examplesHeadline() {
            return (Object.keys(this.item.examples).length > 1) ? 'Examples' : 'Example';
        }
    },

    /**
    * Instance created lifecycle hook
    */
    created() {
        Highlight.initHighlightingOnLoad();
    },

    /** @type {Object} component methods */
    methods: {
        /**
         * Markdown rendering helper
         * @param  {String} text content to render
         * @return {String}
         */
        md(text) {
          return markdown.render(text);
        }
    }
}
</script>
