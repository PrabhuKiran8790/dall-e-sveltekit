<script lang="ts">
	import { page } from '$app/stores';
	import { Footer } from '$lib/components';
	import { AuthJS, MySQL, Prisma, Svelte, TypeScript } from '$lib/components/icons';
	import Openai from '$lib/components/icons/openai.svelte';
	import * as Avatar from '$lib/components/ui/avatar';
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { cn } from '$lib/utils';
	import { Github, Linkedin } from 'lucide-svelte';
</script>

<svelte:head>
	<title>About | Dall-E Clone</title>
	<meta name="robots" content="noindex nofollow" />
	<html lang="en" />
	<meta
		property="og:title"
		content="AI Image Generation | Buit by Prabhu Kiran Konda | SvelteKit"
	/>
	<meta property="og:type" content="website" />
	<meta property="og:image" content="home.png" />
	<meta property="og:url" content="https://dall-e-sveltekit.vercel.app" />
</svelte:head>

<div class="overflow-hidden">
	<div class="p-3">
		<div class="text-center text-xl font-bold lg:text-3xl">
			<h1>About</h1>
		</div>
		<div
			class="flex items-center justify-center absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2"
		>
			<Card.Root class="w-[400px]">
				<Card.Header>
					<div class="flex items-center justify-between">
						<div class="space-y-1">
							<Card.Title>Dall-E Clone</Card.Title>
							<Card.Description
								>This App is made with SvelteKit by <span
									><a
										href="https://linkedin.com/in/prabhukirankonda"
										target="_blank"
										class="underline-offset-4 hover:underline">@prabhukirankonda</a
									></span
								></Card.Description
							>
						</div>
						<div>
							<Avatar.Root>
								<Avatar.Image src="profile_picture.jpg" alt="@prabhukirankonda" />
							</Avatar.Root>
						</div>
					</div>
				</Card.Header>
				<Card.Content class="grid gap-4">
					<h1>Tech Stack Used</h1>
					<div class="flex items-center space-x-4 rounded-md border p-4">
						<Svelte className="h-10 w-10" />
						<TypeScript className="h-10 w-10" />
						<MySQL className="h-10 w-10" />
						<Prisma />
						<Openai />
						<AuthJS />
					</div>
				</Card.Content>
				<Card.Footer class="flex flex-col items-center justify-center gap-3">
					<div class="grid grid-cols-2 gap-2 items-center justify-center w-full">
						<a
							class={cn(
								'w-full',
								buttonVariants({
									variant: 'secondary'
								})
							)}
							href="https://github.com/prabhukiran8790"
							target="_blank"
						>
							<Github class="h-5 w-5" />
							<span class="ml-2">Github</span>
						</a>
						<a
							class={cn(
								'w-full flex items-center justify-between',
								buttonVariants({
									variant: 'secondary'
								})
							)}
							href="https://linkedin.com/in/prabhukirankonda"
							target="_blank"
						>
							<svg viewBox="0 0 128 128" class="h-6 w-6">
								<path
									fill="#0076b2"
									d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3z"
								/><path
									fill="#fff"
									d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 11-10.5 10.49 10.5 10.5 0 0110.5-10.49M50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"
								/>
							</svg>
							<span class="ml-2">Linkedin</span>
						</a>
					</div>
					<a
						class={cn(
							'w-full flex items-center justify-between',
							buttonVariants({
								variant: 'secondary'
							})
						)}
						href="/contact"
					>
						Contact Me
					</a>
				</Card.Footer>
			</Card.Root>
		</div>
	</div>
	<div class="absolute bottom-0 w-full p-3">
		<Footer />
	</div>
</div>
