<script lang="ts">
import Highlight from "svelte-highlight";
import typescript from "highlight.js/lib/languages/typescript";

export let code: string;
const language = { name: "typescript", register: typescript };
</script>

<div>
  <Highlight class="selection:bg-yellow-200" {language} {code} />
</div>

<style lang="scss">
@import "svelte-highlight/src/styles/github.css";

div {
  @apply text-sm;
}
</style>
