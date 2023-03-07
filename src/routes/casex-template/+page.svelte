<script lang="ts">
	import Code from '$lib/components/code.svelte';
	import Head from '$lib/components/head.svelte';
</script>

<Head
	title="Casex Template"
	description="Simple, self expressive template engine for scaffolding files based on casex."
	image="casex-template/casex-template-cover.jpg"
/>

<section>
	<h1>CASE<span class="text-primary">X</span> TEMPLATE</h1>

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
	<h2>Source Code</h2>

	<p>
		The source code for this project is available on <a
			href="https://github.com/dxtr-dot-dev/casex-template"
			target="_blank"
			rel="noreferrer"><i class="bi bi-github" /> GitHub</a
		>
	</p>
</section>

<section>
	<h2>Install</h2>

	<Code>npm install -D @dxtr.dev/casex-template</Code>

	<p>or</p>

	<Code>yarn add @dxtr.dev/casex-template</Code>

	<p>then</p>

	<Code>import {'{ casexTemplate }'} from '@dxtr.dev/casex-template';</Code>
</section>

<!-- <section>
	<h2>Example</h2>

	<p>Here's a simple example of what a template might look like:</p>
</section> -->

<!-- <Code>
// __na-me__-page.ts

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
        Here{"'"}s the list of _na me_s you've given me: {JSON.stringify(_naMe_s)}
      </div>
    </div>
  );
}
</Code>

And if we apply the name `foo bar` it becomes:

<Code>
// foo-bar-page.ts

type FooBarPageProps {
  fooBars: FooBar[]
}

export function FooBarPage({ fooBars }: FooBarPageProps) {
  return (
    <div>
      <header>
        Hello there - this file was scaffolded.
      </header>

      <div>
        Here's the list of foo bars you've given me: {JSON.stringify(fooBars)}
      </div>
    </div>
  );
}
</Code> -->
