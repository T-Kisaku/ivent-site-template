<script lang="ts">
import type { Ivent } from "@/src/types/ivent";
import { goto } from "$app/navigation";
import dayjs from "dayjs";

import Paper from '@/src/components/atoms/Paper.svelte'

export let ivent: Ivent = undefined

</script>

<Paper class="max-w-94 shadow-xl hover:shadow-2xl hover:opacity-50" on:click={() => goto(ivent.url)}>
    <img src="{ivent.metadata.imageURL}" alt="{ivent.metadata.title}">
    <div class="p-5">
        <div>{ivent.metadata.title}</div>
        <div>{dayjs(ivent.metadata.eventDate).format('M月D日開催')}</div>
    </div>
</Paper>