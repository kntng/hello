<script lang="ts">
  import Briefcase from '$icons/Briefcase.svelte';
  import LinkedIn from '$icons/LinkedIn.svelte';
  import GitHub from '$icons/GitHub.svelte';
</script>

<div
  class="color-text color-highlight bg-background dark:bg-foreground scrollbar-thin scrollbar-thumb-accent scrollbar-thumb-rounded-xl hover:scrollbar-thumb-accent/60 scrollbar-track-transparent shadow-solid dark:before:bg-foreground/10 relative my-auto flex max-h-full min-h-min flex-col justify-center space-y-4 rounded-lg px-4 py-4 shadow-black transition duration-300 md:space-y-8 md:px-8 md:py-4 lg:px-16 lg:py-8 dark:before:absolute dark:before:inset-0 dark:before:z-0 dark:before:mix-blend-multiply"
>
  <h1 class="z-10 text-5xl sm:text-6xl lg:text-8xl">kenneth tang</h1>
  <div class="flex flex-col space-y-4 text-6xl">
    <a
      href="https://github.com/kntng"
      rel="noreferrer"
      target="_blank"
      class="link-button animate"
      aria-label="GitHub"
    >
      <GitHub />
      <p>GitHub</p>
    </a>
    <a
      href="https://www.linkedin.com/in/kennethtang0/"
      rel="noreferrer"
      target="_blank"
      class="link-button animate"
      aria-label="LinkedIn"
    >
      <LinkedIn />
      <p>LinkedIn</p>
    </a>
    <a
      href="https://www.kennethtang.org"
      rel="noreferrer"
      target="_blank"
      class="link-button animate"
      aria-label="Portfolio"
    >
      <Briefcase />
      <p>Portfolio</p>
    </a>
  </div>
</div>
