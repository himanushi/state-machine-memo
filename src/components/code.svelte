<script lang="ts">
import hljs from "highlight.js";
import "highlight.js/styles/github.css";

export let code: string;

const html = hljs.highlight(code, { language: "typescript" }).value;
</script>

<pre><code>{@html html}</code></pre>

<style lang="scss">
code {
  @apply text-sm;
}
</style>
