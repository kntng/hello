<script lang="ts">
  import { mode } from '$utils/theme';
  import Cog from '$icons/Cog.svelte';
  import Sun from '$icons/Sun.svelte';
  import Moon from '$icons/Moon.svelte';

  // Create local state to mirror store
  let localMode = mode;
  mode.subscribe((value) => {
    localMode = value;
  });
</script>

<div
  class="bg-primary-light dark:bg-primary-dark recessed flex h-12 w-28 rounded-full p-2 transition-colors duration-300 motion-reduce:transform-none"
>
  <div class="z-10 grid h-full w-full grid-cols-3">
    <button
      on:click={() => mode.set(true)}
      class="h-8 w-8 rounded-full"
      aria-label="Light Theme"
    ></button>
    <button
      on:click={() => mode.set(null)}
      class="h-8 w-8 rounded-full"
      aria-label="System Theme"
    ></button>
    <button
      on:click={() => mode.set(false)}
      class="h-8 w-8 rounded-full"
      aria-label="Dark Theme"
    ></button>
  </div>
  <span
    class={`absolute ${localMode === null ? 'translate-x-8 p-1' : 'translate-x-0 p-1 dark:translate-x-16 dark:p-1.5'} bg-accent shadow-box-sm shadow-accent h-8 w-8 rounded-full transition-transform duration-300 motion-reduce:transform-none`}
  >
    {#if localMode === null}
      <Cog class="dark:text-primary-dark text-primary-light stroke-[1.5px]" />
    {:else if localMode}
      <Sun class="text-primary-light stroke-2" />
    {:else}
      <Moon class="text-primary-dark stroke-2" />
    {/if}
  </span>
</div>
