<script lang="ts">
    import { goto } from '$app/navigation';
    import type {Metadata} from '@/src/t@/src/types/iventexport let history: Metadata
</script>

<div class="bg-white drop-shadow-xl" on:click={() => goto(history.path)}>
    {#if history.meta.imageURL}
        <img alt="{history.meta.title}" src="{history.meta.imageURL}">
    {/if}
    <div class="m-5 text-center">
        {history?.meta?.title}
    </div>
</div>
