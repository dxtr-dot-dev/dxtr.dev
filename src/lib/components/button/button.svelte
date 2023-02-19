<script lang="ts">
	export let type: 'reset' | 'button' | 'submit' = 'submit';
	export let storybookSlot: string | undefined = undefined;
</script>

<button class="bg-primary" {type} on:click>
	<slot>{storybookSlot}</slot>
</button>
