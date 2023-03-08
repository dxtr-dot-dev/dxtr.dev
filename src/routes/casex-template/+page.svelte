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
  {'_naMe_s'}: _NaMe_[]
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
	<h1 id="casex-template">CASE<span class="text-primary">X</span> TEMPLATE</h1>

	<p>
		Casex Template is a simple template engine that applies the casex pattern to all occurances in a
		template.
	</p>

	<p>
		Often creating templates feels tedious and time consuming, we wanted to create an engine that
		lets you pretty much copy an example file, replace a few <i class="text-info">__name__</i> patterns
		and you should be good to go.
	</p>
</section>

<section>
	<h2 id="source-code">Source Code</h2>

	<p>
		The source code for this project is available on <a
			href="https://github.com/dxtr-dot-dev/casex-template"
			target="_blank"
			rel="noreferrer"><i class="bi bi-github" /> GitHub</a
		>
	</p>
</section>

<section>
	<h2 id="install">Install</h2>

	<p>
		Case<span class="text-primary">x</span> Template is currently only available in Javascript (with
		Typescript types) as a ES Module. If you're interested in porting it to another language, feel free
		to reach out!
	</p>

	<Code>npm install -D @dxtr.dev/casex-template</Code>

	<p>or</p>

	<Code>yarn add @dxtr.dev/casex-template</Code>
</section>

<section>
	<h2 id="usage">Usage</h2>

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
		<h2 id="common-patterns">Common patterns</h2>

		<ul>
			{#each Object.entries(common) as [styleName, stylePattern]}
				<li>
					{styleName}: {stylePattern}
				</li>
			{/each}
		</ul>
	</section>

	<section>
		<h2 id="pluralization">Pluralization</h2>

		<p class="mb-2 ml-4">
			<span class="text-info">_name_</span> with only one <span class="text-info">_</span> means
			singular
			<br />
			<span class="text-info">_name_</span> with only one <span class="text-info">_</span> and
			<span class="text-info">s</span> means plural.
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
	<h2 id="how-it-works">How it works</h2>

	<p>
		Case<span class="text-primary">x</span> template uses
		<a href="/casex#how-it-works">case<span class="text-primary">x</span></a> to replace instances
		of <i class="text-info">__name__</i>-like patterns in a text.
	</p>

	<p />
</section>

<section>
	<h2 id="try-it-out">Try it out</h2>

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

<style lang="postcss">
	textarea {
		height: 500px;
	}
</style>
