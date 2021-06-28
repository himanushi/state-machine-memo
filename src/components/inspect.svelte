<script lang="ts">
import type { Inspector } from "@xstate/inspect";
import { inspect } from "@xstate/inspect";
import { createEventDispatcher, onDestroy } from "svelte";

let className = "";
export { className as class };

const dispatch = createEventDispatcher();
let iframe: any;
let inspectIframe: Inspector | undefined;

$: if (iframe) {
  inspectIframe = inspect({
    iframe,
    url: "https://statecharts.io/inspect",
  });

  dispatch("ready");
}

onDestroy(() => {
  if (inspectIframe) {
    inspectIframe.disconnect();
  }
});
</script>

<iframe class={className} title="debug" bind:this={iframe} />

<style lang="scss">
iframe {
  @apply rounded min-w-[650px];
}
</style>
