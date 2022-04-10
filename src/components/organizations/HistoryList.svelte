<script lang="ts">
    import HistoryCard from "../atoms/HistoryCard.svelte";
    import type { Metadata } from "@/src/types/history";
    export let historyList: Metadata[]
</script>

<div class="grid gap-10 grid-cols-1 sm:grid-cols-4">
	{#each historyList as history}
		<HistoryCard history={history} />
	{/each}
</div>
