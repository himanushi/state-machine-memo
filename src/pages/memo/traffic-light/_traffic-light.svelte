<script lang="ts">
import { onDestroy, onMount } from "svelte";
import { interpret } from "xstate";
import { Machine } from "./traffic-light-machine";

const service = interpret(Machine, { devTools: true });

onMount(() => {
  service.start();
});

onDestroy(() => {
  service.stop();
});
</script>

{#if $service}
  <div class="traffic-light">
    <div
      class={`green ${
        $service.matches("green") ? "bg-green-500" : "bg-green-100"
      }`}
    />
    <div
      class={`yellow ${
        $service.matches("yellow") ? "bg-yellow-500" : "bg-yellow-100"
      }`}
    />
    <div
      class={`red ${$service.matches("red") ? "bg-red-500" : "bg-red-100"}`}
    />
  </div>
{/if}

<style lang="scss">
.traffic-light {
  @apply w-72 p-3 bg-gray-500 rounded-full;
  @apply flex flex-row items-center justify-center;

  div {
    @apply rounded-full h-20 w-20;
  }
}
</style>
