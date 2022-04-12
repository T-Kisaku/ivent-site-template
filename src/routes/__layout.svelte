<script lang="ts">
	import Layout from '@/src/components/organizations/Layout/index.svelte';
	import { MetaTags } from 'svelte-meta-tags';
	import config from '@/__data/config.json'
	import '@/src/styles/app.css';
</script>

<MetaTags
	title="Page"
	titleTemplate="%s | {config.project.name}"
/>
<Layout><slot /></Layout>
