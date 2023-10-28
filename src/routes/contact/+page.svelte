<script lang="ts">
	import { buttonVariants } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import * as Avatar from '$lib/components/ui/avatar';
	import { Switch } from '$lib/components/ui/switch';
	import { cn } from '$lib/utils';
	import { AtSign, ExternalLink, PhoneCallIcon } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Contact | Dall-E Clone</title>
	<meta name="robots" content="noindex nofollow" />
	<html lang="en" />
</svelte:head>

<div class="h-full flex items-center justify-center">
	<Card.Root class="w-[380px]">
		<Card.Header>
			<div class="flex items-center justify-between">
				<div class="space-y-1">
					<Card.Title>Contact</Card.Title>
					<Card.Description>Contact for any support or queries</Card.Description>
				</div>
				<div>
					<Avatar.Root>
						<Avatar.Image src="profile_picture.jpg" alt="@prabhukirankonda" />
					</Avatar.Root>
				</div>
			</div>
		</Card.Header>
		<Card.Content>
			<div class=" flex items-center flex-col space-y-4 rounded-md border p-4">
				<div class="flex items-center justify-between gap-x-7 w-full">
					<PhoneCallIcon class="h-5 w-5" />
					<div>+91 9515451705</div>
				</div>
				<div class="flex items-center justify-between gap-x-7 w-full">
					<AtSign class="h-5 w-5" />
					<a
						class="flex items-center gap-1 underline-offset-4 hover:underline"
						href="mailto:prabhukiran426@gmail.com"
					>
						prabhukiran426@gmail.com
						<ExternalLink class="h-3 w-3" />
					</a>
				</div>
			</div>
		</Card.Content>
		<Card.Footer>
			<a href="mailto:prabhukiran426@gmail.com" class={cn('w-full', buttonVariants())}
				>Write to us</a
			>
		</Card.Footer>
	</Card.Root>
</div>
