<script lang="ts">
	import Code from '$lib/components/code.svelte';
	import Head from '$lib/components/head.svelte';
	import { casex } from '@dxtr.dev/casex';

	let text = 'My custom text';
	let pattern = 'ca-se';

	const commonStringStyles = {
		lowercase: 'case',
		UPPERCASE: 'CASE',
		snake_case: 'ca_se',
		'kebab-case': 'ca-se',
		camelCase: 'caSe',
		UpperCamelCase: 'CaSe',
		'Sentence case': 'Ca se',
		'Title Case': 'Ca Se'
	};

	const specialStyles = {
		'Capitalize first letter': 'C* **',
		'First letter of each word (initials)': 'C-S-'
	};

	$: casedText =
		pattern.length >= 4 ? casex({ text, pattern }) : 'Please provide a valid casex pattern';
</script>

<Head
	title="Casex"
	description="All in one, self-expressive pattern for string case styles"
	image="casex/casex-cover.jpg"
/>

<section>
	<h1>CASE<span class="text-primary">X</span></h1>

	<p>Casex is a function that applies a case style given a pattern.</p>

	<p>
		Instead of having a specific function for each case style, we provide a self-expressive pattern
		that represent the desired output.
	</p>
</section>

<section>
	<h2>Install</h2>

	<div class="flex flex-col gap-2">
		<Code>npm install -D @dxtr.dev/casex</Code>

		<p>or</p>

		<Code>yarn add @dxtr.dev/casex</Code>

		<p>then</p>

		<Code>import {'{ casex }'} from '@dxtr.dev/casex';</Code>
	</div>
</section>

<div class="md:grid md:grid-cols-2">
	<section>
		<h2>Common string styles</h2>

		<ul class="list-disc ml-8">
			{#each Object.entries(commonStringStyles) as [styleName, stylePattern]}
				<li>
					<button on:click={() => (pattern = stylePattern)}>{styleName}: {stylePattern}</button>
				</li>
			{/each}
		</ul>
	</section>

	<section>
		<h2>Special characters</h2>

		<ul class="list-disc ml-8">
			{#each Object.entries(specialStyles) as [styleName, stylePattern]}
				<li>
					<button on:click={() => (pattern = stylePattern)}>{styleName}: {stylePattern}</button>
				</li>
			{/each}
		</ul>
	</section>
</div>

<section>
	<h2>Try it out</h2>

	<div class="flex flex-col md:flex-row gap-8">
		<div>
			<label for="text"> Text </label>
			<input id="text" type="text" class="w-full rounded" name="text" bind:value={text} />
		</div>

		<div>
			<label for="pattern">Pattern</label>
			<input id="pattern" type="text" class="w-full rounded" name="pattern" bind:value={pattern} />
		</div>
	</div>

	<div>
		<b class="text-primary text-lg">Output:</b>
		{casedText}
	</div>
</section>
