<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
</script>

<div {...$$props} class="bg-white rounded-md {$$props.class}" on:click={() => dispatch('click')}>
	<slot />
</div>
