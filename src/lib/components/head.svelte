<script lang="ts">
	export let title = 'DXTR.DEV';
	export let description = 'Tools and apps for a delightful developer experience';
	export let image = 'dxtr.dev/dxtr.dev-cover.jpg';

	$: ogImage = `https://dxtr.dev/${image}`;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />

	<meta property="og:site_name" content="DXTR.DEV" />
	<meta property="og:title" content={title} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:width" content="1640" />
	<meta property="og:image:height" content="924" />

	<meta name="twitter:site" content="@dxtr_dot_dev" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content={ogImage} />
</svelte:head>
