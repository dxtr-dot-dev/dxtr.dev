<script lang="ts">
	import FormGroup from '$components/form-group/FormGroup.svelte';
	import TextInput from '$components/text-input/TextInput.svelte';
	import { casex } from '@dxtr.dev/casex';

	let text = 'The super duper';
	let pattern = 'ca-se';

	$: casedText = casex({ text, pattern });
</script>

<h1 class="text-3xl font-bold text-blue-500">Casex</h1>

<FormGroup label="Text">
	<TextInput bind:value={text} />
</FormGroup>

<FormGroup label="Pattern">
	<TextInput bind:value={pattern} />
</FormGroup>

<div>{casedText}</div>
