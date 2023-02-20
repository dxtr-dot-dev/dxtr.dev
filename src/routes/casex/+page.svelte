<script lang="ts">
	import ButtonOrLink from '$lib/components/button-or-link/button-or-link.svelte';
	import FormGroup from '$lib/components/form-group/form-group.svelte';
	import TextInput from '$lib/components/text-input/text-input.svelte';
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

<div class="flex flex-col md:flex-row gap-8 flex-1 overflow-hidden">
	<div
		class="w-full md:w-80 order-3 md:order-1 md:border-none border-t border-t-paper py-4 md:py-0"
	>
		<header class="mb-4">
			<h2 class="text-2xl font-subheading font-bold">Try it out</h2>
		</header>

		<FormGroup label="Text">
			<TextInput bind:value={text} />
		</FormGroup>

		<FormGroup label="Pattern">
			<TextInput bind:value={pattern} />
		</FormGroup>

		<div>
			Output:
			<div>{casedText}</div>
		</div>
	</div>

	<div class="flex flex-col gap-12 overflow-auto order-2">
		<section>
			<header class="mb-4">
				<h1 class="text-3xl font-subheading text-center font-bold">Casex</h1>
			</header>

			<p>Casex is a function that applies a case style given a pattern.</p>

			<br />

			<p>
				Instead of having a specific function for each case style, we provide a self-expressive
				pattern that represent the desired output.
			</p>
		</section>

		<section>
			<header class="mb-4">
				<h3 class="text-2xl text-center font-subheading">Install</h3>
			</header>

			<div class="flex flex-col gap-2">
				<div class="bg-paper p-2 rounded">npm install -D casex</div>

				<div>or</div>

				<div class="bg-paper p-2 rounded inline-flex">yarn add casex</div>

				<div>then</div>

				<div class="bg-paper p-2 rounded">
					import {'{ casex }'} from 'casex';
				</div>
			</div>
		</section>

		<section>
			<header class="mb-3">
				<h3 class="text-2xl text-center font-subheading">Common string styles</h3>
			</header>

			<ul>
				{#each Object.entries(commonStringStyles) as [styleName, stylePattern]}
					<li>
						<ButtonOrLink on:click={() => (pattern = stylePattern)} variant="text"
							>{styleName}: {stylePattern}</ButtonOrLink
						>
					</li>
				{/each}
			</ul>
		</section>

		<section>
			<header class="mb-3">
				<h3 class="text-2xl text-center font-subheading">Special characters</h3>
			</header>

			<ul>
				{#each Object.entries(specialStyles) as [styleName, stylePattern]}
					<li>
						<ButtonOrLink on:click={() => (pattern = stylePattern)} variant="text"
							>{styleName}: {stylePattern}</ButtonOrLink
						>
					</li>
				{/each}
			</ul>
		</section>

		<div class="h-4" />
	</div>
</div>
