<script>
	import { page } from '$app/stores';
	import { Gallery } from '$lib/components';
	import { buttonVariants } from '$lib/components/ui/button';
	import { cn } from '$lib/utils';
	import { Sparkles } from 'lucide-svelte';
	import { MetaTags } from 'svelte-meta-tags';

	const images1 = [
		{
			alt: 'A bowl of soup that is also a portal to another dimension, digital art',
			src: 'A bowl of soup that is also a portal to another dimension, digital art.webp'
		},
		{ alt: 'small bag', src: '0_1_384_N.webp' },
		{ alt: 'erbology', src: '0_3_384_N_robot.webp', class: 'h-full w-full' }
	];
	const images2 = [
		{ alt: 'watch', src: '0_0_384_N_flower.webp', class: 'h-full w-full' },
		{
			alt: 'A van Gogh style painting of an American football player',
			src: 'A van Gogh style painting of an American football player.webp'
		},
		{
			alt: 'A cyberpunk monster in a control room',
			src: 'A cyberpunk monster in a control room.webp'
		}
	];
	const images3 = [
		{
			alt: 'mystical fruits and flowers',
			src: '0_1_384_N_flowers_fruits.webp'
		},
		{ alt: 'cream', src: '0_0_384_N_sky.webp', class: 'h-96 w-full' }
		// { alt: 'small bag', src: '0_1_384_N_cat.webp', class: '' },
	];
	const images4 = [
		{
			alt: 'A cartoon of a monkey in space',
			src: 'A cartoon of a monkey in space.webp',
			class: 'h-full w-full'
		},
		{
			alt: 'playstation',
			src: '0_0_384_N.webp'
		},
		{
			alt: 'A computer from the 90s in the style of vaporwave',
			src: 'A computer from the 90s in the style of vaporwave.webp'
		}
	];
</script>

<MetaTags
	title="Dall-E Clone | Built by Prabhu Kiran Konda | SvelteKit"
	description="Dall-E Clone built by Prabhu Kiran Konda using SvelteKit"
	openGraph={{
		title: 'Dall-E Clone',
		description: 'Dall-E Clone built by Prabhu Kiran Konda using SvelteKit',
		images: [
			{
				url: 'https://raw.githubusercontent.com/PrabhuKiran8790/dall-e-sveltekit/main/static/home-min.png',
				width: 800,
				height: 600,
				alt: 'Og Image Alt'
			}
		],
		siteName: 'Dall-E Clone'
	}}
	twitter={{
		handle: '@prabhukirantwt',
		site: '@dall-e-clone',
		cardType: 'summary_large_image',
		title: 'Dall-E Clone',
		description: 'Dall-E Clone built by Prabhu Kiran Konda using SvelteKit',
		image:
			'https://raw.githubusercontent.com/PrabhuKiran8790/dall-e-sveltekit/main/static/home-min.png',
		imageAlt: 'Twitter image alt'
	}}
/>

<div
	class="flex flex-col items-center h-full gap-6 lg:flex-row md:justify-center lg:space-y-6 px-6"
>
	<div class="flex flex-col gap-6 mx-4 mt-10 mb-4 text-center md:mt-28 lg:mt-20 lg:p-20">
		<h1 class="text-3xl font-extrabold md:text-5xl lg:text-6xl">AI Image Generation</h1>
		<p>Turn your imagination into awesome pictures</p>
		<a
			href={$page.data.session ? '/dashboard' : '/login'}
			class="buttonClass flex items-center justify-center"
		>
			Get Started
			<Sparkles class="ml-2" />
		</a>
		<div>
			<a href="/about" class={cn('-mt-4', buttonVariants({ variant: 'outline' }))}>About</a>
		</div>
	</div>
	<Gallery class="gap-[12px] grid-cols-2 md:grid-cols-4 lg:mb-0 w-auto -mx-2 lg:px-28">
		<Gallery items={images1} />
		<Gallery items={images2} />
		<Gallery items={images3} />
		<Gallery items={images4} />
	</Gallery>

	<div class="h-20 lg:hidden mt-2">
		<h1 class="invisible">hidden</h1>
	</div>
</div>
