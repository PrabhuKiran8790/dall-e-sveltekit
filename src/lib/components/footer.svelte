<script>
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { MenuIcon } from 'lucide-svelte';

	const year = new Date().getFullYear();
	const footerLinks = [
		{ name: 'Home', href: '/' },
		{ name: 'About', href: '/about' },
		{ name: 'Privacy', href: '/privacy' },
		{ name: 'Terms', href: '/terms-of-service' }
	];
</script>

<div
	class="relative bottom-0 left-0 right-0 z-50 flex items-center justify-between w-full h-10 max-w-full shadow-sm text-foreground backdrop-opacity-100 backdrop-blur-3xl backdrop-brightness-100 dark:backdrop-brightness-50 bg-foreground/10 rounded-lg"
>
	<div class="container flex items-center justify-between w-full px-4 mx-auto max-w-7xl">
		<div>
			&copy; {year}{' '} Prabhu Kiran Konda
		</div>
		<div class="hidden lg:block">
			{#each footerLinks as link (link.href)}
				<a
					href={link.href}
					class="px-2 text-sm font-medium transition-colors hover:text-foreground/80"
				>
					{link.name}
				</a>
			{/each}
		</div>
		<div class="lg:hidden">
			<DropdownMenu.Root>
				<DropdownMenu.Trigger class="flex items-center justify-center">
					<MenuIcon class="w-6 h-6" />
				</DropdownMenu.Trigger>
				<DropdownMenu.Content>
					<DropdownMenu.Group>
						<DropdownMenu.Label>
							<a href="/" class="w-full">Home</a>
						</DropdownMenu.Label>
						<DropdownMenu.Separator />
						<DropdownMenu.Item>
							<a href="/about">About</a>
						</DropdownMenu.Item>
						<DropdownMenu.Item>
							<a href="/privacy">Privacy</a>
						</DropdownMenu.Item>
						<DropdownMenu.Item>
							<a href="/terms-of-service">Terms</a>
						</DropdownMenu.Item>
					</DropdownMenu.Group>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</div>
	</div>
</div>
