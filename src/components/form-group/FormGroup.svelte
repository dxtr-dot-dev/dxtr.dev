<script lang="ts">
	export let label: string = '';
</script>

<label>
	<span>{label}</span>

	<slot />
</label>

<style>
	label {
		display: block;
		margin-bottom: 16px;
	}

	span {
		display: block;
	}
</style>
