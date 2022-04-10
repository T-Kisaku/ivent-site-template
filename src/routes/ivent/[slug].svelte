<script context="module" lang="ts">
	import dayjs from 'dayjs';

	import type { Load } from '@sveltejs/kit';
	import type { Metadata } from '@/src/types/history';

	export const load: Load = async ({ fetch, params }) => {
		const response = await fetch('/api/history.json'),
			data: Metadata[] = await response.json(),
			yearData = data.filter(({ meta: { date } }) => {
				const endedDate = typeof date === 'string' ? date : date.ended;
				return dayjs(endedDate).year() === Number(params.year);
			});

		if (yearData.length > 0) {
			return {
				props: {
					year: params.year,
					historyList: yearData
				}
			};
		}
		return {
			error: 'Page not found',
			status: 404
		};
	};
</script>

<script lang="ts">
	import HistoryList from '@/src/components/organizations/HistoryList.svelte';

	export let year;
	export let historyList: Metadata[];
</script>

{year}
<HistoryList historyList={historyList} />
