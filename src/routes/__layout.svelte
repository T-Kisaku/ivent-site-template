<script lang="ts">
	import Layout from '@/src/components/organizations/Layout.svelte';
	import { MetaTags } from 'svelte-meta-tags';
	import config from '@/__data/config.json'
	import '@/src/styles/app.css';
</script>

<MetaTags
	title="Page"
	titleTemplate="%s | {config.project_name}"
/>
<Layout><slot /></Layout>
