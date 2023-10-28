<script lang="ts">
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/dialog';
	import * as Card from '$lib/components/ui/card';
	import { Coins, IndianRupee, Loader2, Minus, Plus } from 'lucide-svelte';
	import { cn } from '$lib/utils';
	import { Input } from '$lib/components/ui/input';
	import axios from 'axios';

	type UserDataType = {
		id: string;
		name: string | null;
		email: string;
		emailVerified: Date | null;
		image: string | null;
		credits: number | null;
		costPerCredit: number | null;
	}[];

	export let userData: UserDataType;
	let costPerCredit: number = userData[0]?.costPerCredit || 0;
	let credits_to_purchase: number = 10;

	let checkoutLoading = false;

	const blockInvalidChar = (e: KeyboardEvent) =>
		['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();

	const handleCheckout = async () => {
		try {
			checkoutLoading = true;
			const response = await axios.post('/api/checkout', {
				userData,
				credits_to_purchase
			});
			// console.log(response);
			window.location.assign(response.data.url);
		} catch (error) {
			console.log(error);
		} finally {
			checkoutLoading = false;
		}
	};
</script>

<Dialog.Root>
	<Dialog.Trigger class={cn('mt-4', buttonVariants({ variant: 'outline' }))}>
		<Coins class="mr-2" />
		Purchase Credits
	</Dialog.Trigger>
	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title>
				<div class="flex items-center">
					Purchase Credits <Coins class="ml-3" />
				</div>
			</Dialog.Title>
			<Dialog.Description>Purchase Credits to generate more Images.</Dialog.Description>
		</Dialog.Header>
		<Card.Root class="border-0 shadow-none">
			<Card.Header class="pb-4">
				<Card.Title class="text-base">Number of Credits</Card.Title>
			</Card.Header>
			<Card.Content class="pb-2">
				<div class="flex items-center justify-center space-x-2">
					<Button
						variant="outline"
						size="icon"
						class="h-8 w-8 shrink-0 rounded-full"
						on:click={() => {
							credits_to_purchase = Number(credits_to_purchase) - 10;
						}}
						disabled={+credits_to_purchase <= 10}
					>
						<Minus class="h-4 w-4" />
						<span class="sr-only">Decrease</span>
					</Button>
					<div class="flex-1 text-center">
						<div class="text-5xl font-bold tracking-tighter flex items-center justify-center">
							<Input
								type="number"
								class="w-auto text-center mt-3"
								bind:value={credits_to_purchase}
								min="0"
								name="credits_to_purchase"
								autofocus={false}
								on:keydown={blockInvalidChar}
								on:change={() => {
									credits_to_purchase = Number(credits_to_purchase);
									if (credits_to_purchase < 0) {
										credits_to_purchase = 0;
									}
								}}
								on:mouseleave={() => {
									credits_to_purchase = Number(credits_to_purchase);
									if (credits_to_purchase < 0) {
										credits_to_purchase = 0;
									}
								}}
							/>
							<!-- just to hide autofocus on above input element -->
							<div style="max-width: 0; max-height: 0; overflow: hidden;">
								<Input autofocus={true} />
							</div>
						</div>
						<div class="text-[0.70rem] uppercase text-muted-foreground mt-1">Credits</div>
					</div>
					<Button
						variant="outline"
						size="icon"
						class="h-8 w-8 shrink-0 rounded-full"
						on:click={() => {
							credits_to_purchase = Number(credits_to_purchase) + 10;
						}}
						disabled={+credits_to_purchase >= 50}
					>
						<Plus class="h-4 w-4" />
						<span class="sr-only">Increase</span>
					</Button>
				</div>
			</Card.Content>
			<Card.Footer>
				<Button
					class="w-full"
					disabled={credits_to_purchase <= 0}
					type="submit"
					on:click={handleCheckout}
				>
					<div class="flex items-center justify-between w-full">
						<div class="flex items-center justify-between">
							{#if checkoutLoading}
								<Loader2 class="mr-2 animate-spin" />
							{/if}
							Checkout
						</div>
						<div class="flex items-center gap-1">
							<IndianRupee size={15} />
							{costPerCredit * credits_to_purchase}
						</div>
					</div>
				</Button>
			</Card.Footer>
		</Card.Root>
	</Dialog.Content>
</Dialog.Root>
