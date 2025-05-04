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
  class="bg-background dark:bg-foreground shadow-solid flex h-12 w-28 rounded-full p-2 transition-colors duration-300 motion-reduce:transform-none"
>
  <div class="z-10 grid h-full w-full grid-cols-3">
    <button
      on:click={() => mode.set(true)}
      class="h-8 w-8 rounded-full p-1"
      aria-label="Light Theme"
    >
      <Sun class="dark:text-background text-foreground stroke-2" />
    </button>
    <button
      on:click={() => mode.set(null)}
      class="h-8 w-8 rounded-full p-1"
      aria-label="System Theme"
    >
      <Cog class="dark:text-background text-foreground stroke-[1.5px]" />
    </button>
    <button
      on:click={() => mode.set(false)}
      class="h-8 w-8 rounded-full p-1.5"
      aria-label="Dark Theme"
    >
      <Moon class="dark:text-background text-foreground stroke-2" />
    </button>
  </div>
  <div
    class={`absolute ${localMode === null ? 'translate-x-8' : 'translate-x-0 dark:translate-x-16'} inline-flex h-8 w-8 rounded-full transition-transform duration-300 motion-reduce:transform-none`}
  >
    <span
      class="bg-secondary dark:bg-primary shadow-solid-sm h-full w-full rounded-full transition-colors duration-300"
    ></span>
  </div>
</div>
