<script lang="ts">
	import { goto } from '$app/navigation';
	import config from '@/__data/config.json'

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
	<div class="flex space-x-5">
		{#each routeList as route}
			<div
				on:click={() => {
					if(route.onClick){
						return route.onClick()
					}
					return goto(route.path)
				}}
			>
				{route.title}
			</div>
		{/each}
	</div>
</header>
<main class="overflow-auto pt-header-height py-20 h-screen">
	<slot />
</main>
<footer class="w-full mt-auto h-footer-height">
	<div class="px-4 py-10 bg-slate-100 text-center">
		ご不明な点、ご質問がございましたらお気軽にお問い合わせください。
		<div class="bg-zinc-700 text-white w-72 my-5 mx-auto" on:click={gotoContact}>
			お問い合わせ
		</div>
	</div>
	<div class="h-full bg-black text-white">
		<div>{config.company.name}</div>
		<div class="border-t-white">Copyright © 2021 {config.company.name} lcc. All rights reserved.</div>
	</div>
</footer>
