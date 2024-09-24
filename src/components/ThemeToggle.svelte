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
	class="bg-primary-light dark:bg-primary-dark transition-colors motion-reduce:transform-none duration-300 flex w-28 h-12 p-2 rounded-full shadow-box shadow-accent"
>
	<div class="grid grid-cols-3 z-10 h-full w-full">
		<button on:click={() => mode.set(true)} class="w-8 h-8 rounded-full" aria-label="Light Theme" />
		<button
			on:click={() => mode.set(null)}
			class="w-8 h-8 rounded-full"
			aria-label="System Theme"
		/>
		<button on:click={() => mode.set(false)} class="w-8 h-8 rounded-full" aria-label="Dark Theme" />
	</div>
	<span
		class={`absolute ${localMode === null ? 'translate-x-8 p-1' : 'translate-x-0 dark:translate-x-16 p-1 dark:p-1.5'} transition-transform motion-reduce:transform-none duration-300 w-8 h-8 rounded-full bg-accent shadow-box-sm shadow-accent`}
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
