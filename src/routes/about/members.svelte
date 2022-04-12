<script lang="ts">
    import {MetaTags} from 'svelte-meta-tags'
    import Title from '@/src/components/atoms/Title.svelte';
    import config from '@/__data/config.json'
</script>
<MetaTags title="MEMBER" />
<Title>MEMBER</Title>

{#each config.project.members as member}
<div class="bg-white py-5 px-3 shadow-lg flex gap-5 mb-7">
    <img src="{member.image_URL}" alt="tset" class="w-80">
    <div>
        <div>{member.job}</div>
        <div>{member.name}</div>
        <div>{member.comment}</div>
    </div>
    <div class="flex gap-2">
        <img src="/icon/instagram.png" alt="instagram" class="w-7 h-7" on:click={() => window.open(member.contact.instagram, '_blank')}>
        <img src="/icon/twitter.png" alt="twitter" class="w-7 h-7" on:click={() => window.open(member.contact.twitter, '_blank')}>
    </div>
</div>
{/each}

<Title>SUPPORTER</Title>