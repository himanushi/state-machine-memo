<script lang="ts">
let className = "";
export { className as class };
export let disabled = false;
</script>

<button {disabled} class={className} on:click>
  <slot />
</button>

<style>
button {
  /* 子要素の位置 */
  @apply flex items-center justify-center rounded-full;
  /* color */
  @apply bg-white bg-opacity-0;
  /* animation */
  @apply transition duration-200;
  /* hover */
  @apply hover:bg-opacity-20;
  /* click */
  @apply active:bg-opacity-50 focus:outline-none;
  /* disabled */
  @apply disabled:opacity-50;
}
</style>
