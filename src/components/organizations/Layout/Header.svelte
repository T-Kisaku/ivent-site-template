<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '@/src/components/atoms/Button.svelte';
	import config from '$lib/config.json'

	const gotoContact = () => {
		if(window){
			window.open(config.company.contact_form_URL, '_blank')
		}
	}

	const routeList = [
		{ title: '会社概要', path: '/about/company' },
		{ title: 'メンバー', path: '/about/members' },
		{ title: 'お問い合わせ', onClick:  gotoContact}
	];
</script>

<header class="flex w-full h-header-heigh py-5 px-28 shadow-md bg-white">
	<div class="flex-grow" on:click={() => goto('/')}>{config.project.name}</div>
	<div class="flex space-x-5 hidden md:inline-block">
		{#each routeList as route}
			<Button
				on:click={() => {
					if(route.onClick){
						return route.onClick()
					}
					return goto(route.path)
				}}
			>
				{route.title}
			</Button>
		{/each}
	</div>
</header>