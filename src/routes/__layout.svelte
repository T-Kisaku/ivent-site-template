<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

    export const load: Load = async ({ fetch }) => {
		const
            response = await fetch('/api/config.json'),
            config = await response.json()
        return {
            props: {config}
        }
	};
</script>
<script lang="ts">
	import Layout from '@/src/components/organizations/Layout/index.svelte';
	import { MetaTags } from 'svelte-meta-tags';
	import '@/src/styles/app.css';

	export let config
</script>

<MetaTags
	title="Page"
	titleTemplate="%s | {config.project.name}"
/>
<Layout config={config}><slot/></Layout>
