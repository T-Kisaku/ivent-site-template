<script lang="ts">
    import dayjs from "dayjs";
    import Paper from "@/src/components/atoms/Paper.svelte";
    import Button from "@/src/components/atoms/Button.svelte";
    import Title from "../atoms/Title.svelte";

    export let title
	export let imageURL
	export let ticketURL
    export let place
    export let price
    export let schedule
    export let eventDate
</script>

<img src="{imageURL}" alt="{title}" class="h-1/2 mx-auto rounded-md">

<Title class="text-2xl mt-20">{title}</Title>
<div class="flex flex-col sm:flex-row justify-center text-center gap-5 mt-20 font-medium text-lg">
    <div>場所：{place}</div>
    <div>金額：{price}</div>
    <div>開催日:{dayjs(eventDate).format('YYYY年M月D日')}</div>
</div>
<Paper class="mx-2 sm:mx-20 mt-20 mb-20 p-7">
    <slot></slot>
</Paper>

<Title>Schedule</Title>

<Paper class="w-96 mx-auto p-5 mb-40 font-medium">
    {#each Object.entries(schedule) as [time, content]}
        <div class="grid grid-cols-2 my-4">
            <div>{time}</div>
            <div>{content}</div>
        </div>
    {/each}
</Paper>

<Button
    type="contain"
    id="ticket-button"
    class="absolute bottom-8 left-1/2 -translate-x-1/2 bg-orange-500"
    on:click={() => window.open(ticketURL, '_blank')}
>
        チケット購入
</Button>