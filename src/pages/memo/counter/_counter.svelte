<script lang="ts">
import { onDestroy, onMount } from "svelte";
import { interpret } from "xstate";
import Button from "~/components/button.svelte";
import { Machine } from "./counter-machine";

const service = interpret(Machine, { devTools: true });

onMount(() => {
  service.start();
});

onDestroy(() => {
  service.stop();
});
</script>

{#if $service}
  <div class="counter">
    <span class="count">{$service.context.count}</span>

    <div class="buttons">
      <Button on:click={() => service.send("INCREMENT")}>Count</Button>
      <Button on:click={() => service.send("RESET")}>Reset</Button>
    </div>
  </div>
{/if}

<style lang="scss">
.counter {
  @apply flex flex-col items-center space-y-5;

  .count {
    @apply font-bold text-4xl border-2 border-blue-200 p-4 rounded w-36 block text-center;
  }
}
</style>
