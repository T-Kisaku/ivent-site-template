<script context="module" lang="ts">
	import dayjs from 'dayjs';
	import type { Load } from '@sveltejs/kit';
	import type {Ivent} from '@/src/types/ivent'


	export const load: Load = async ({ fetch, params }) => {
		const
            response = await fetch('/api/ivents.json'),
            data: Ivent[] = await response.json()
        return {
            props: {data}
        }
		// return {
		// 	error: 'Page not found',
		// 	status: 404
		// };
	};
</script>

<script lang="ts">
	// import HistoryList from '@/src/components/organizations/HistoryList.svelte';
    import {MetaTags} from 'svelte-meta-tags'
    import { goto } from '$app/navigation';

	export let data: Ivent[];
</script>


<!-- <MetaTags title="Home"/> -->

<div>
    Big swiper
    <div>
        Big swiper card
    </div>
</div>

{#each data as ivent}
<div class="shadow-lg border-2 w-40 p-1" on:click={() => goto('/tst')}>
    <h1>{ivent.metadata.title}</h1>
	<p>場所: {ivent.metadata.place}</p>
	<p>料金: {ivent.metadata.price}</p>
	<p>{dayjs(ivent.metadata.eventDate).format('YYYY月M月D日')}</p>
	<div>{ivent.content}</div>
    {ivent.url}
</div>
{/each}

<div class="mx-20 h-96">
    <div>
        <div>Ivents</div>
        <div class="shadow-lg">
            This is card
        </div>
    </div>
    <div>
        <div>Service</div>
        <div>
            This is service
        </div>
        <div>
            This is service
        </div>
        <div>
            This is service
        </div>
    </div>
</div>