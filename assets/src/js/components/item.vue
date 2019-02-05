<template>
    <section class="item" :id="item.slug">
        <h2 v-html="titleHtml(item.title)" />
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

const markdown = new MarkdownIt({
  html: true,
})

export default {

  /** @type {Array} component properties */
  props: {
    item: Object
  },

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
     * Generate the HTML for the title
     * @return {string}
     */
    titleHtml() {

      if(this.item.page.basicTitles) return this.item.title;

      let title = '<code>' + this.item.title;

      if(this.item.hasParams()) {

        let params = [];

        this.item.params.forEach(param => {
          let item = '<span>';

          if(param.type) item += '<em>' + param.type + '</em> ';

          item += '<strong>' + param.name + '</strong>';

          if(param.default) item += ' <i>= ' + param.default + '</i>';

          params.push(item + '</span>');
        })

        title += '<span class="title-params"><b>(</b>';
        title += params.join(', ');
        title += '<b>)</b></span>';
      }

      return title;
    },

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
