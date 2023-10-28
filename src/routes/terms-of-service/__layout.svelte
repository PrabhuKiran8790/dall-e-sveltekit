<script>
	import Footer from '$lib/components/footer.svelte';
</script>

<div class="prose max-w-7xl items-center dark:prose-invert mx-auto mt-12 pb-24 container px-3">
	<slot />
</div>

<div class="p-3 relative bottom-0">
	<Footer />
</div>
