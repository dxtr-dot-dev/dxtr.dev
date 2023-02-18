<script lang="ts">
	import Button from '$components/button/Button.svelte';
	import FormGroup from '$components/form-group/FormGroup.svelte';
	import TextInput from '$components/text-input/TextInput.svelte';
	import { casex } from '@dxtr.dev/casex';

	let text = 'The super duper';
	let pattern = 'ca-se';

	$: casedText = casex({ text, pattern });
</script>

<FormGroup label="Text">
	<TextInput bind:value={text} />
</FormGroup>

<FormGroup label="Pattern">
	<TextInput bind:value={pattern} />
</FormGroup>

<div>{casedText}</div>

<Button>meu componente Button</Button>

<button>um botao normal</button>
