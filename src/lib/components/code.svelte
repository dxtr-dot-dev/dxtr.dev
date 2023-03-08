<script lang="ts">
	import ClipboardIcon from 'svelte-bootstrap-icons/lib/Clipboard.svelte';
	import ClipboardCheckIcon from 'svelte-bootstrap-icons/lib/ClipboardCheck.svelte';

	let copied = false;

	function copyToClipboard(event: Event) {
		copied = true;

		const code = (event.currentTarget as HTMLDivElement).querySelector('code') as HTMLElement;
		navigator.clipboard.writeText(code.innerText);

		setTimeout(() => {
			copied = false;
		}, 1000);
	}
</script>

<div
	role="button"
	on:click={copyToClipboard}
	on:keyup={copyToClipboard}
	on:keypress={copyToClipboard}
>
	<code><slot /></code>

	<footer class:copied>
		{#if copied}
			<ClipboardCheckIcon width="12px" /> copied
		{:else}
			<ClipboardIcon width="12px" /> click to copy
		{/if}
	</footer>
</div>

<style lang="postcss">
	div {
		@apply border border-paper;
		@apply rounded w-auto overflow-hidden;
		@apply font-subheading;
		@apply cursor-pointer select-none;
	}

	code {
		@apply py-4 px-4;
		@apply block w-full;
	}

	footer {
		@apply py-2 px-4;
		@apply border-t border-t-paper;
		@apply text-xs text-info;
	}

	.copied {
		@apply text-success;
	}
</style>
