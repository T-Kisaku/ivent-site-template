<script context="module" lang="ts">
	import dayjs from 'dayjs';
	import type { Load } from '@sveltejs/kit';
	import type {Ivent} from '@/src/types/ivent'


	export const load: Load = async ({ fetch, params, url}) => {
		
		const
            response = await fetch('/api/ivents.json'),
            data: Ivent[] = await response.json(),
			ivent = data.find(x => x.url === url.pathname)

		return {
			props: {
				ivent
			}
		}
	};
</script>

<script lang="ts">
	// import HistoryList from '@/src/components/organizations/HistoryList.svelte';

	// export let data: Ivent[];
	export let ivent: Ivent
</script>

{ivent.content}
