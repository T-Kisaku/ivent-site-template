<script lang="ts">
	import Layout from '@/src/components/organizations/Layout/index.svelte';
	import { MetaTags } from 'svelte-meta-tags';
	import '@/src/styles/app.css';

	import config from '$lib/config.json'

</script>

<MetaTags
	title="Page"
	titleTemplate="%s | {config.project.name}"
/>
<Layout><slot/></Layout>
