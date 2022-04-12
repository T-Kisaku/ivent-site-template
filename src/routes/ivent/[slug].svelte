<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import type {Ivent} from '@/src/types/ivent'


	export const load: Load = async ({ fetch, url}) => {
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
	export let ivent: Ivent | null
</script>
<img src="{ivent.metadata.imageURL}" alt="{ivent.metadata.title}" class="h-1/2 mx-auto rounded-md">
<div class="mx-20 mt-20 p-7 bg-white rounded-md">
	{@html ivent.content}
</div>

