<script lang="ts">
	import { page } from '$app/stores';

	export let title = 'DXTR.DEV';
	export let description = 'Tools and apps for a delightful developer experience';
	export let image = 'dxtr.dev/dxtr.dev-cover.jpg';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:image" content={`${$page.url.origin}/${image}`} />
</svelte:head>
