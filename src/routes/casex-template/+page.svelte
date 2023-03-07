<script lang="ts">
	import Code from '$lib/components/code.svelte';
	import Head from '$lib/components/head.svelte';
</script>

<Head
	title="Casex Template"
	description="Simple, self expressive template engine for scaffolding files based on casex."
	image="casex-template/casex-template-cover.jpg"
/>

<h1>CASE<span class="text-primary">X</span> TEMPLATE</h1>

<p>Here's a simple example of what a template might look like:</p>

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
