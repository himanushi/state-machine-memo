<script>
import Code from "~/components/code.svelte";
import Inspect from "~/components/inspect.svelte";
import { code } from "./traffic-light-machine";
import TrafficLight from "./_traffic-light.svelte";

let ready = false;
const onReady = () => (ready = true);
</script>

<div>
  {#if ready}
    <div class="content">
      <TrafficLight />
    </div>
  {/if}
  <Inspect class="w-[800px] h-[500px]" on:ready={onReady} />
  <Code {code} />
</div>

<style lang="scss">
div {
  @apply flex flex-col items-center;
}
</style>
