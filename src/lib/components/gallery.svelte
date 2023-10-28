<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	type ImgType = {
		src: string;
		alt?: string;
		class?: string;
	};

	export let items: ImgType[] = [];
	export let imgClass: string =
		'h-auto max-w-full rounded-xl h-full w-full fill object-cover py-1 -mt-5';

	$: divClass = twMerge('grid', $$props.class);

	function init(node: HTMLElement) {
		if (getComputedStyle(node).gap === 'normal') node.style.gap = 'inherit';
	}
</script>

<div {...$$restProps} class={divClass} use:init>
	{#each items as item}
		<slot {item}>
			<div>
				<img
					src={item.src}
					alt={item.alt}
					class={twMerge(imgClass, $$props.classImg, item.class)}
				/>
			</div>
		</slot>
	{:else}
		<slot item={items[0]} />
	{/each}
</div>
