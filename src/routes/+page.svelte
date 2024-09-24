<script lang="ts">
	import Panel from '$components/Panel.svelte';
	import Background from '$components/Background.svelte';
	import ThemeToggle from '$components/ThemeToggle.svelte';
</script>

<main class="h-screen w-screen flex flex-col p-4 md:p-8 lg:p-16 items-center justify-center">
	<Background />
	<div class="absolute top-4 md:top-8 lg:top-12 right-4 md:right-8 lg:right-12">
		<ThemeToggle />
	</div>
	<Panel />
</main>
