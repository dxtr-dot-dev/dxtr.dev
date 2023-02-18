<script lang="ts">
	export let type: 'reset' | 'button' | 'submit' = 'submit';
</script>

<button class="bg-white-500" {type} on:click>
	<slot />
</button>
