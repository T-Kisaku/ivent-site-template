<script>
	import { goto } from '$app/navigation';
	import config from '@/__data/config.json'
	const routeList = [
		{ title: '会社概要', path: '/' },
		{ title: 'メンバー', path: '/' },
		{ title: 'サービス', path: '/' },
		{ title: 'お問い合わせ', path: '/history/search' }
	];
</script>

<div class="min-h-screen relative box-border pb-footer-height">
	<header class="flex top-0 w-full p-7 h-header-height px-20 shadow-md">
		<div class="flex-grow" on:click={() => goto('/')}>{config.project_name}</div>
		<div class="flex space-x-5">
			{#each routeList as route}
				<div on:click={() => goto(route.path)}>
					{route.title}
				</div>
			{/each}
		</div>
	</header>
	<main class="mt-header-height">
		<slot />
	</main>
	<footer class="absolute bottom-0 w-full h-footer-height">
		<div class="px-4 py-4 bg-slate-200 text-center">
			ご不明な点、ご質問がございましたらお気軽にお問い合わせください。
			<div class="bg-black text-white w-72 m-auto" on:click={() => goto('/contact')}>
				お問い合わせ
			</div>
		</div>
		<div class="h-full bg-black text-white">
			<div>{config.company.name}</div>
			<div>Copyright © 2021 {config.company.name} lcc. All rights reserved.</div>
			
		</div>
	</footer>
</div>