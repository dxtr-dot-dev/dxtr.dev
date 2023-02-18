<script lang="ts">
	export let type: 'reset' | 'button' | 'submit' = 'submit';
</script>

<button {type} on:click>
	<slot />
</button>

<style>
	button {
		background: red;
	}
</style>
