<script>
	import { page } from '$app/stores';
</script>

<nav class="py-2">
	<ul class="flex gap-4">
		<li aria-current={$page.url.pathname === '/casex' ? 'page' : undefined}>
			<a href="/casex">Casex</a>
		</li>
		<li aria-current={$page.url.pathname === '/casex-template' ? 'page' : undefined}>
			<a href="/casex-template">Casex Template</a>
		</li>
	</ul>
</nav>
