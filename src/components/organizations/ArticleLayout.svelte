<script lang="ts">
    export let title
	export let imageURL
</script>
<img src="{imageURL}" alt="{title}" class="h-1/2 mx-auto rounded-md">
<div class="mx-20 mt-20 p-7 bg-white rounded-md">
    <slot></slot>
</div>