<script lang="ts">
	import Code from '$lib/components/code.svelte';
	import Head from '$lib/components/head.svelte';
	import { casexTemplate } from '@dxtr.dev/casex-template';

	const common = {
		lowercase: '__name__',
		UPPERCASE: '__NAME__',
		snake_case: '__na_me__',
		'kebab-case': '__na-me__',
		camelCase: '__naMe__',
		UpperCamelCase: '__NaMe__',
		'Sentence case': '__Na me__',
		'Title Case': '__Na Me__'
	};

	const pluralization = {
		singular: '_name_',
		plural: '_name_s'
	};

	let name = 'cool component';
	let text = `// __na-me__-page.ts

type __NaMe__PageProps {
  _naMe_s: _NaMe_[]
}

export function __NaMe__Page({ _naMe_s }: __NaMe__PageProps) {
  return (
    <div>
      <header>
        Hello there - this file was scaffolded.
      </header>

      <div>
        Here's the list of _na me_s you've given me: {JSON.stringify(_naMe_s)}
      </div>
    </div>
  );
}
  `;

	$: casedTemplateText = casexTemplate({ name, text });
</script>

<Head
	title="Casex Template"
	description="Simple, self expressive template engine for scaffolding files based on casex."
	image="casex-template/casex-template-cover.jpg"
/>

<section>
	<h1 id="casex-template">
		<a href="#casex-template">CASE<span class="text-primary">X</span> TEMPLATE</a>
	</h1>

	<p>
		Casex Template is a simple template engine that applies the casex pattern to all occurances in a
		template.
	</p>

	<p>
		Often creating templates feels tedious and time consuming, I wanted to create an engine that
		lets someone pretty much copy an example file, replace a few words and you should be good to go.
	</p>
</section>

<section>
	<h2 id="source-code">
		<a href="#source-code">Source Code</a>
	</h2>

	<p>
		The source code for this project is available on <a
			href="https://github.com/dxtr-dot-dev/casex-template"
			target="_blank"
			rel="noreferrer"><i class="bi bi-github" /> GitHub</a
		>
	</p>
</section>

<section>
	<h2 id="install">
		<a href="#install">Install</a>
	</h2>

	<p>
		Case<span class="text-primary">x</span> Template is currently only available in Javascript (with
		Typescript types) as a ES Module.
	</p>

	<Code>npm install -D @dxtr.dev/casex-template</Code>

	<p>or</p>

	<Code>yarn add @dxtr.dev/casex-template</Code>
</section>

<section>
	<h2 id="usage">
		<a href="#usage">Usage</a>
	</h2>

	<p>
		<span class="text-info">{`{ casexTemplate }`}</span> is available as a named import, it expects
		a
		<span class="text-info">text</span>
		and a <span class="text-info">name</span>. Here's how it looks like:
	</p>

	<Code>
		import {'{ casexTemplate }'} from '@dxtr.dev/casex-template';
		<br />
		<br />
		const text = "const __na_me__ = () => '#TODO: Implement Na Me'";
		<br />
		casexTemplate({`{ text, name: 'cool component' }`})
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
					{styleName}: {stylePattern}
				</li>
			{/each}
		</ul>
	</section>

	<section>
		<h2 id="pluralization">
			<a href="#pluralization">Pluralization</a>
		</h2>

		<p class="mb-2 ml-4">
			<span class="text-primary">_name_</span> with only one <span class="text-primary">_</span>
			means singular
			<br />
			<span class="text-primary">_name_s</span> with only one <span class="text-primary">_</span>
			and
			<span class="text-primary">s</span> means plural.
			<br />
		</p>

		<p class="mb-8 ml-4 text-sm">
			Pluralization is handled by
			<a href="https://www.npmjs.com/package/pluralize" target="_blank" rel="noreferrer"
				>pluralize</a
			>, which also takes care of irregular words.
		</p>

		<ul>
			{#each Object.entries(pluralization) as [styleName, stylePattern]}
				<li>
					{styleName}: {stylePattern}
				</li>
			{/each}
		</ul>
	</section>
</div>

<section>
	<h2 id="try-it-out">
		<a href="#try-it-out">Try it out</a>
	</h2>

	<div>
		<label for="name">Name</label>
		<input type="text" id="name" name="name" bind:value={name} />
	</div>

	<div>
		<label for="text">Text</label>
		<textarea id="text" name="text" bind:value={text} />
	</div>

	<div>
		<label class="font-bold text-primary text-lg" for="output">Output:</label>
		<textarea id="output" readonly bind:value={casedTemplateText} />
	</div>
</section>

<section>
	<h2 id="how-it-works">
		<a href="#how-it-works">How it works</a>
	</h2>

	<p>
		Case<span class="text-primary">x</span> Template scans the text for
		<span class="text-primary">casex-like occurances</span> of
		<span class="text-primary">_name_</span>
		and <span class="text-primary">__name__</span>
		uses
		<a href="/casex#how-it-works">case<span class="text-primary">x</span></a> to replaces them
		according to their Case<span class="text-primary">x</span> pattern.
	</p>

	<p>
		To get a practical understanding, let's break down the steps, we'll use as an example the name <i
			class="text-info">cool component</i
		>
		and the text
		<i class="text-info">I have many _name_s, my favorite __na-me__ is the _Na Me_</i>.
	</p>

	<ol>
		<li>
			The text provided gets scanned and we extract the name patterns, resulting in:

			<ul>
				<li>
					<i class="text-info">_name_s</i> - ends with <span class="text-primary">_s</span> so it's
					plural, with the <span class="text-info">name</span> pattern (all lowercase)
				</li>

				<li>
					<i class="text-info">__na-me__</i> <span class="text-primary">__</span> double underscore
					(no plural or singular transformation), with the <span class="text-info">na-me</span> pattern
					(kebab-case)
				</li>

				<li>
					<i class="text-info">_Na Me_</i> - ends with <span class="text-primary">_</span> so it's
					singular, with the <span class="text-info">NaMe</span> pattern (title case)
				</li>
			</ul>
		</li>

		<li>
			The next step is applying the name <i class="text-info">cool component</i> to each part
			extracted

			<ul>
				<li><i class="text-info">_name_s</i>: coolcomponents</li>
				<li><i class="text-info">__na-me__</i>: cool-component</li>
				<li><i class="text-info">_Na Me_</i>: Cool Component</li>
			</ul>
		</li>

		<li>Replace the occurances and the result is...</li>

		<li>
			<span class="text-success"
				>I have many <u>coolcomponents</u>, my favorite <u>cool-component</u> is the
				<u>Cool Component</u></span
			>
		</li>
	</ol>
</section>

<style lang="postcss">
	textarea {
		height: 500px;
	}
</style>
