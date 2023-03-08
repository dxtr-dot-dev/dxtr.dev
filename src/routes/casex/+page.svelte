<script lang="ts">
	import Code from '$lib/components/code.svelte';
	import Head from '$lib/components/head.svelte';
	import { casex } from '@dxtr.dev/casex';
	import GithubIcon from 'svelte-bootstrap-icons/lib/Github.svelte';
	import LightningChargeIcon from 'svelte-bootstrap-icons/lib/LightningCharge.svelte';

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
	<h1 id="casex">
		<a href="#casex">CASE<span class="text-primary">X</span></a>
	</h1>

	<p>
		Case<span class="text-primary">x</span> is a function that applies a case style given a pattern.
	</p>

	<p>
		Instead of having a specific function for each case style, I provide a self-expressive pattern
		that represent the desired output.
	</p>
</section>

<section>
	<h2 id="source-code">
		<a href="#source-code">Source Code</a>
	</h2>

	<p>
		The source code for this project is available on <a
			href="https://github.com/dxtr-dot-dev/casex"
			target="_blank"
			rel="noreferrer"><GithubIcon /> GitHub</a
		>
	</p>
</section>

<section>
	<h2 id="install">
		<a href="#install">Install</a>
	</h2>

	<p>
		Case<span class="text-primary">x</span> is currently only available in Javascript (with Typescript
		types) as a ES Module.
	</p>

	<Code>npm install -D @dxtr.dev/casex</Code>

	<p>or</p>

	<Code>yarn add @dxtr.dev/casex</Code>
</section>

<section>
	<h2 id="usage">
		<a href="#usage">Usage</a>
	</h2>

	<p>
		<span class="text-info">{`{ casex }`}</span> is available as a named import, it expects a
		<span class="text-info">text</span>
		and a <span class="text-info">pattern</span>. Here's how it looks like:
	</p>

	<Code>
		import {'{ casex }'} from '@dxtr.dev/casex';
		<br />
		<br />
		casex({`{ text: 'your text', pattern: 'ca-se' }`})
	</Code>
</section>

<div class="md:grid md:grid-cols-2">
	<section>
		<h2 id="common-patterns">
			<a href="#common-patterns">Common patterns</a>
		</h2>

		<ul>
			{#each Object.entries(common) as [styleName, stylePattern]}
				<li>
					<button
						class:pattern-selected={pattern === stylePattern}
						on:click={() => (pattern = stylePattern)}
						><LightningChargeIcon class="text-success" /> {styleName}: {stylePattern}</button
					>
				</li>
			{/each}
		</ul>

		<h2 id="special-patterns">
			<a href="#special-patterns">Special patterns</a>
		</h2>

		<ul>
			{#each Object.entries(special) as [styleName, stylePattern]}
				<li>
					<button
						class:pattern-selected={pattern === stylePattern}
						on:click={() => (pattern = stylePattern)}
						><LightningChargeIcon class="text-success" /> {styleName}: {stylePattern}</button
					>
				</li>
			{/each}
		</ul>

		<p class="mt-4 ml-4">
			<span class="text-primary">*</span> for keeping the current capitalization
			<br />
			<span class="text-primary">-</span> is used for removing characters
		</p>
	</section>

	<section>
		<h2 id="try-it-out">
			<a href="#try-it-out">Try it out</a>
		</h2>

		<p class="text-sm">
			You can click the <LightningChargeIcon class="text-success" /> patterns to quickly go through them!
		</p>

		<div>
			<label for="text"> Text </label>
			<input id="text" type="text" name="text" bind:value={text} />
		</div>

		<div>
			<label for="pattern">Pattern</label>
			<input id="pattern" type="text" name="pattern" bind:value={pattern} />
		</div>

		<div>
			<b class="text-success text-lg">Output:</b>
			{casedText}
		</div>
	</section>
</div>

<section>
	<h2 id="how-it-works">
		<a href="#how-it-works">How it works</a>
	</h2>

	<p>
		Case<span class="text-primary">x</span> takes the
		<span class="text-primary">first two letters</span> and
		<span class="text-primary">last two letters</span>
		to extract a pattern (lower case or upper case), everything in between is
		<span class="text-primary">glue</span> that gets added between words. All the examples below
		will use the word <span class="text-info">case</span> to express the pattern, but it could be "name",
		or "abcd", or any other 4 letters.
	</p>

	<p>
		To have more concrete understanding, let's go step by step. We'll use as an example the common
		title pattern <i class="text-info">Ca se</i> and the text
		<i class="text-info">i_am the-real JohnDoe</i>.
	</p>

	<ol>
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
			<i class="text-info">i_am the-real JohnDoe</i> is separated into words by
			<span class="text-primary">upper case letters</span>,
			<span class="text-primary">space</span>, <span class="text-primary">-</span> and
			<span class="text-primary">_</span>. This gives us
			<i class="text-info">[i, am, the, real, John, Doe]</i>
		</li>

		<li>
			We combine the two parts, applying the <span class="text-info">pattern</span> to each
			<span class="text-info">word</span>
			and we get:

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

<style lang="postcss">
	.pattern-selected {
		@apply transition-all;
		@apply bg-primary text-background px-2 rounded;
	}
</style>
