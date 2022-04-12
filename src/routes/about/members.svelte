<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

    export const load: Load = async ({ fetch, params }) => {
		const
            response = await fetch('/api/config.json'),
            config = await response.json()
        return {
            props: {config}
        }
	};
</script>
<script lang="ts">
    import {MetaTags} from 'svelte-meta-tags'
    import Title from '@/src/components/atoms/Title.svelte';
    import Paper from '@/src/components/atoms/Paper.svelte';
    import SnsIcon from '@/src/components/atoms/SnsIcon.svelte';
    export let config
</script>
<MetaTags title="MEMBER" />
<Title>MEMBER</Title>
<div class="flex flex-col">
    {#each config.project.members as member}
        <Paper class="flex flex-col sm:flex-row gap-5 mx-auto mb-7 py-5 px-3 shadow-lg" style="max-width: 700px;">
            <img src="{member.image_URL}" alt="tset" class="w-80">
            <div class="py-5 space-y-4">
                <div class="text-sm text-slate-400">{member.job}</div>
                <div class="font-medium" style="font-size: 30px;">{member.name}</div>
                <div class="text-lg">{member.comment}</div>
            </div>
            <div class="flex gap-2">
                <SnsIcon type="instagram" on:click={() => window.open(member.contact.instagram, '_blank')} />
                <SnsIcon type="twitter" on:click={() => window.open(member.contact.twitter, '_blank')} />
            </div>
        </Paper>
    {/each}
</div>

<Title>SUPPORTER</Title>
<div class="mx-10 grid grid-cols-1 sm:grid-cols-4 gap-5">
    {#each config.project.supporters as supporter}
        <Paper class="shadow-lg">
            <img src="{supporter.image_URL}" alt="{supporter.name}">
            <div class="p-5 space-y-2">
                <div class="text-center text-2xl">{supporter.name}</div>
                <div class="flex gap-5 justify-center">
                    <SnsIcon type="instagram" on:click={() => window.open(supporter.contact.instagram, '_blank')} />
                    <SnsIcon type="twitter" on:click={() => window.open(supporter.contact.twitter, '_blank')} />
                </div>
            </div>
        </Paper>
    {/each}
</div>