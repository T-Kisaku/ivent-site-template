<script lang="ts">
import type { Ivent } from "@/src/types/ivent";
import { goto } from "$app/navigation";
import dayjs from "dayjs";

export let ivent: Ivent = undefined

</script>

<div class="shadow-xl flex w-96 bg-white" on:click={() => goto(ivent.url)}>
    <div>
        <img src="{ivent.metadata.imageURL}" alt="{ivent.metadata.title}">
        <div class="p-5">
            <div>{ivent.metadata.title}</div>
            <div>{dayjs(ivent.metadata.eventDate).format('M月D日開催')}</div>
        </div>
    </div>
</div>