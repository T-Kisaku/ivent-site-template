<script lang="ts">
	const data = {
		description: 'I started coding from almost end of junior high school. ',
		basic: [
			{ title: 'Name', content: 'Takashi Kisaku - 箕作天志' },
			{ title: 'From', content: 'Tokyo Japan' },
			{ title: 'What I can', content: 'Coding of backend and frontand' }
		]
	};
</script>

<div class="mb-10">
	{data.description}
</div>
<table>
	{#each data.basic as row}
		<td>{row.title}</td>
		<td>{row.content}</td>
	{/each}
</table>
<ul>
	<li>Name: Takashi Kisaku -箕作天志</li>
	<li>From: Tokyo Japan</li>
	<li>What I can: Coding of backend and frontand</li>
</ul>
