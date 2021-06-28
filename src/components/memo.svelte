<script>
import Code from "~/components/code.svelte";
import Inspect from "~/components/inspect.svelte";

export let code: string;

let ready = false;
const onReady = () => (ready = true);
</script>

<div class="memo">
  {#if ready}
    <div class="content">
      <slot />
    </div>
  {/if}
  <div class="inspect">
    <Inspect class="w-[800px] h-[500px]" on:ready={onReady} />
  </div>
  <div class="code">
    <Code {code} />
  </div>
</div>

<style lang="scss">
.memo {
  @apply flex flex-col items-center space-y-6 py-10;
}
</style>
