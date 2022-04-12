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
import Header from './Header.svelte'
import Main from './Main.svelte'
import Footer from './Footer.svelte'

export let config
</script>

<Header config={config} />
<Main><slot/></Main>
<Footer config={config} />
