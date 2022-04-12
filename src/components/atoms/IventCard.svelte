<script lang="ts">
import type { Ivent } from "@/src/types/ivent";
import { goto } from "$app/navigation";
import dayjs from "dayjs";

import Paper from '@/src/components/atoms/Paper.svelte'

export let ivent: Ivent = undefined

</script>

<Paper class="shadow-xl max-w-94" on:click={() => goto(ivent.url)}>
    <img src="{ivent.metadata.imageURL}" alt="{ivent.metadata.title}">
    <div class="p-5">
        {ivent.url}
        <div>{ivent.metadata.title}</div>
        <div>{dayjs(ivent.metadata.eventDate).format('M月D日開催')}</div>
    </div>
</Paper>