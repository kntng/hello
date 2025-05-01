<script lang="ts">
  import Briefcase from '$icons/Briefcase.svelte';
  import LinkedIn from '$icons/LinkedIn.svelte';
  import GitHub from '$icons/GitHub.svelte';
</script>

<div
  class="bg-primary-light dark:bg-primary-dark text-primary-dark dark:text-primary-light recessed scrollbar-thin scrollbar-thumb-accent scrollbar-thumb-rounded-xl hover:scrollbar-thumb-accent/60 scrollbar-track-transparent selection:text-primary-light selection:bg-accent selection:dark:text-accent selection:dark:bg-primary-light flex h-2/3 flex-col justify-center space-y-4 overflow-y-auto rounded-lg px-4 py-4 transition duration-300 md:h-2/3 md:space-y-8 md:px-8 md:py-4 lg:px-16 lg:py-8"
>
  <h1 class="text-5xl sm:text-6xl lg:text-8xl">kenneth tang</h1>
  <div class="flex flex-col space-y-4 text-6xl">
    <a
      href="https://github.com/kntng"
      rel="noreferrer"
      target="_blank"
      class="link-button recessed"
      aria-label="GitHub"
    >
      <GitHub />
      <p>GitHub</p>
    </a>
    <a
      href="https://www.linkedin.com/in/kennethtang0/"
      rel="noreferrer"
      target="_blank"
      class="link-button recessed"
      aria-label="LinkedIn"
    >
      <LinkedIn />
      <p>LinkedIn</p>
    </a>
    <a
      href="https://www.kennethtang.org"
      rel="noreferrer"
      target="_blank"
      class="link-button recessed"
      aria-label="Portfolio"
    >
      <Briefcase />
      <p>Portfolio</p>
    </a>
  </div>
</div>
