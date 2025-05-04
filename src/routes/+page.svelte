<script lang="ts">
  import Panel from '$components/Panel.svelte';
  import Background from '$components/Background.svelte';
  import ThemeToggle from '$components/ThemeToggle.svelte';
</script>

<main
  class="flex min-h-screen w-screen flex-col items-center overflow-y-auto px-4 py-12"
>
  <Background />
  <div
    class="flex w-full justify-end sm:absolute sm:top-4 sm:right-4 sm:w-min md:top-8 md:right-8 lg:top-12 lg:right-12"
  >
    <ThemeToggle />
  </div>
  <Panel />
</main>
