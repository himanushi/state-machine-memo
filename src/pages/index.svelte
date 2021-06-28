<script lang="ts">
import { goto } from "@roxi/routify";
import Button from "~/components/button.svelte";
import IconButton from "~/components/icon-button.svelte";
import Github from "~/icons/github.svelte";
</script>

<main>
  <span> State Machine MEMO </span>
  <li>
    <ul>
      <Button on:click={() => $goto("/memo/traffic-light")}>
        Traffic Light
      </Button>
    </ul>
    <ul>
      <a href="https://github.com/himanushi/xstate-memo" target="_blank">
        <IconButton class="w-10 h-10">
          <Github class="w-10 h-10" />
        </IconButton>
      </a>
    </ul>
  </li>
</main>

<style lang="scss">
main {
  @apply h-full flex flex-col items-center justify-center;

  span {
    @apply text-4xl mb-6;
  }

  li {
    @apply flex flex-col space-y-3;

    ul {
      @apply self-center;
    }
  }
}
</style>
