<script lang="ts">
	import Code from '$lib/components/code.svelte';
	import Head from '$lib/components/head.svelte';
	import { casex } from '@dxtr.dev/casex';

	let text = 'i_am the-real JohnDoe';
	let pattern = 'Ca Se';

	const common = {
		lowercase: 'case',
		UPPERCASE: 'CASE',
		snake_case: 'ca_se',
		'kebab-case': 'ca-se',
		camelCase: 'caSe',
		UpperCamelCase: 'CaSe',
		'Sentence case': 'Ca se',
		'Title Case': 'Ca Se'
	};

	const special = {
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

	<p>
		Case<span class="text-primary">x</span> is a function that applies a case style given a pattern.
	</p>

	<p>
		Instead of having a specific function for each case style, I provide a self-expressive pattern
		that represent the desired output.
	</p>
</section>

<section>
	<h2>Source Code</h2>

	<p>
		The source code for this project is available on <a
			href="https://github.com/dxtr-dot-dev/casex"
			target="_blank"
			rel="noreferrer"><i class="bi bi-github" /> GitHub</a
		>
	</p>
</section>

<section>
	<h2>Install</h2>

	<Code>npm install -D @dxtr.dev/casex</Code>

	<p>or</p>

	<Code>yarn add @dxtr.dev/casex</Code>

	<p>then</p>

	<Code>import {'{ casex }'} from '@dxtr.dev/casex';</Code>
</section>

<section>
	<h2>Usage</h2>

	<p>
		Case<span class="text-primary">x</span> is pretty straight forward. You provide the text you want
		converted, and the pattern you'd like to apply.
	</p>

	<Code>casex({`{ text: 'your text', pattern: 'ca-se' }`})</Code>
</section>

<div class="md:grid md:grid-cols-2">
	<section>
		<h2>Common patterns</h2>

		<ul>
			{#each Object.entries(common) as [styleName, stylePattern]}
				<li>
					<button on:click={() => (pattern = stylePattern)}>{styleName}: {stylePattern}</button>
				</li>
			{/each}
		</ul>
	</section>

	<section>
		<h2>Special patterns</h2>

		<ul>
			{#each Object.entries(special) as [styleName, stylePattern]}
				<li>
					<button on:click={() => (pattern = stylePattern)}>{styleName}: {stylePattern}</button>
				</li>
			{/each}
		</ul>
	</section>
</div>

<section>
	<h2>How it works</h2>

	<p>To understand how the style convertion happens, let's go step by step.</p>

	<p>
		Let's use as an example the common title pattern <i class="text-info">Ca se</i> and the text
		<i class="text-info">i_am the-real JohnDoe</i>.
	</p>

	<ol>
		<li>
			<i class="text-info">i_am the-real JohnDoe</i> is separated into words by upper case letters,
			space, - and _. This gives us <i class="text-info">[i, am, the, real, John, Doe]</i>
		</li>

		<li>
			The pattern <i class="text-info">Ca Se</i> is interpreted. Each letter corresponds to one part
			of the string

			<ul>
				<li><i class="text-info">C</i> - 1st letter of the 1st word, in this case (upper case)</li>
				<li><i class="text-info">a</i> - 2nd+ letters of the 1st word, (lower case)</li>
				<li>
					<i class="text-info">" "</i> - the glue, the character that gets placed between words (a space)
				</li>
				<li><i class="text-info">S</i> - 1st letter of 2nd+ words (upper case)</li>
				<li><i class="text-info">e</i> - 2nd+ letters of 2nd+ words (lower case)</li>
			</ul>
		</li>

		<li>
			With the pattern gets applied to the words we get:

			<ul>
				<li><i class="text-info">I</i> - applied <i class="text-info">Ca</i></li>
				<li><i class="text-info">Am</i> - applied <i class="text-info">Se</i></li>
				<li><i class="text-info">The</i> - applied <i class="text-info">Se</i></li>
				<li><i class="text-info">Real</i> - applied <i class="text-info">Se</i></li>
				<li><i class="text-info">John</i> - applied <i class="text-info">Se</i></li>
				<li><i class="text-info">Doe</i> - applied <i class="text-info">Se</i></li>
			</ul>
		</li>

		<li>
			Then we <i class="text-info">glue</i> the parts together, in this case I provided an empty
			space <i class="text-info">" "</i>
		</li>

		<li>Result: <i class="text-success">I Am The Real John Doe</i></li>
	</ol>
</section>

<section>
	<h2>Try it out</h2>

	<div>
		<label for="text"> Text </label>
		<input id="text" type="text" class="w-full rounded" name="text" bind:value={text} />
	</div>

	<div>
		<label for="pattern">Pattern</label>
		<input id="pattern" type="text" class="w-full rounded" name="pattern" bind:value={pattern} />
	</div>

	<div>
		<b class="text-primary text-lg">Output:</b>
		{casedText}
	</div>
</section>
