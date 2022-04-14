<script lang="ts">
	import Button from '@/src/components/atoms/Button.svelte';
	import config from '$lib/config.json';

	const gotoContact = () => {
		if (window) {
			window.open(config.company.contact_form_URL, '_blank');
		}
	};
</script>

<footer class="w-full mt-auto h-footer-height">
	<div class="px-4 py-10 bg-slate-100 text-center">
		<div class="mb-5">ご不明な点、ご質問がございましたらお気軽にお問い合わせください。</div>
		<Button type="contain" on:click={gotoContact}>お問い合わせ</Button>
	</div>
	<div class="h-full flex flex-col justify-between bg-black text-white px-20 pt-10">
		<div class="text-2xl">{config.company.name}</div>
		<div class="border-t border-white text-center text-sm py-3">
			Copyright © 2021 {config.company.name} lcc. All rights reserved.
		</div>
	</div>
</footer>
