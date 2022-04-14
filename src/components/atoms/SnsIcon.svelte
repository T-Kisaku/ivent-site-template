<script lang="ts">
	export let type: 'twitter' | 'instagram';

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
</script>

<img
	src="/icon/{type}.png"
	alt={type}
	class="w-7 h-7"
	{...$$props}
	on:click={() => dispatch('click')}
/>
