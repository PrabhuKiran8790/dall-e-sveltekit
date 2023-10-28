<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Alert from '$lib/components/ui/alert';
	import * as Card from '$lib/components/ui/card';
	import * as Form from '$lib/components/ui/form';
	import { Download, ImageIcon, Sparkles, AlertCircle } from 'lucide-svelte';
	import { imageFormSchema, ImageOptions, ResolutionOptions } from './constants';
	import CheckoutCard from '$lib/components/checkout-card.svelte';

	export let data;
	export let form;

	let userData = data.userData;

	let loading = false;
	let zeroCredits = false;

	// variables for required credits validation
	let notEnoughCredits = false;
	let requiredCredits: number;
	let availableCredits: number;

	// loading = false when form is invalid
	$: if (!form?.form?.valid) {
		loading = false;
	}

	$: if (data.userData[0]?.credits !== undefined && data.userData[0].credits! <= 0) {
		zeroCredits = true;
	}

	$: if (form?.creditsError) {
		notEnoughCredits = true;
		loading = false;
		requiredCredits = form.creditsNeeded;
		availableCredits = form.availableCredits as number;
	}

	// loading = false when form.image.data is present (image is generated)
	$: if (form?.image?.data) {
		loading = false;
		notEnoughCredits = false;
		window.scrollTo(0, document.body.scrollHeight / 4);
	}
</script>

<svelte:head>
	<title>Dashboard | {userData[0]?.name}</title>
	<meta name="robots" content="noindex nofollow" />
	<html lang="en" />
</svelte:head>

<div class="h-full p-8">
	<div class="flex flex-col items-center justify-center">
		<div class="flex items-center justify-between gap-4">
			<ImageIcon class="lg:h-14 lg:w-14" />
			<h1 class="text-xl font-bold lg:text-5xl">AI Image Generation</h1>
		</div>
		{#if data?.userData}
			<CheckoutCard {userData} />
		{/if}
	</div>

	<div class="mt-12 -mx-9">
		<Form.Root
			method="POST"
			form={data.form}
			schema={imageFormSchema}
			let:config
			class="container max-w-4xl border w-full p-3 rounded-lg space-y-2 relative"
		>
			<Button
				type="button"
				class="absolute top-1 right-1"
				size="sm"
				variant={zeroCredits ? 'destructive' : 'secondary'}
			>
				Credits left: {data.userData[0]?.credits}
			</Button>
			<Form.Field {config} name="prompt">
				<Form.Item>
					<Form.Label>Prompt</Form.Label>
					<Form.Input
						on:change={() => {
							loading = false;
							notEnoughCredits = false;
						}}
					/>
					<Form.Validation />
				</Form.Item>
			</Form.Field>
			<div class="grid grid-cols-2 gap-4">
				<Form.Field {config} name="count">
					<Form.Item>
						<Form.Label>Count</Form.Label>
						<Form.Select selected={ImageOptions[0]}>
							<Form.SelectTrigger placeholder="Number of Images" on:click={() => {}} />
							<Form.SelectContent>
								{#each ImageOptions as option}
									<Form.SelectItem value={option.value} disabled={option.diabled}
										>{option.label}</Form.SelectItem
									>
								{/each}
							</Form.SelectContent>
						</Form.Select>
						<Form.Validation />
					</Form.Item>
				</Form.Field>
				<Form.Field {config} name="resolution">
					<Form.Item>
						<Form.Label>Resolution</Form.Label>
						<Form.Select selected={ResolutionOptions[0]}>
							<Form.SelectTrigger placeholder="Image Resolution" on:click={() => {}} />
							<Form.SelectContent>
								{#each ResolutionOptions as option}
									<Form.SelectItem value={option.value} disabled={option.diabled}
										>{option.label}</Form.SelectItem
									>
								{/each}
							</Form.SelectContent>
						</Form.Select>
						<Form.Validation />
					</Form.Item>
				</Form.Field>
			</div>
			<div class="flex items-center justify-center">
				<Form.Button
					variant="secondary"
					class="w-96 border border-foreground"
					type="submit"
					disabled={zeroCredits}
					on:click={() => {
						loading = true;
					}}
				>
					{#if loading}
						Generating...
					{:else}
						Generate
					{/if}
					<Sparkles class="ml-3 h-5 w-5" />
				</Form.Button>
			</div>
		</Form.Root>
		{#if zeroCredits}
			<div class="container max-w-4xl w-full p-3 rounded-lg space-y-2 mt-12">
				<Alert.Root variant="destructive" class="ring-red-500">
					<AlertCircle class="h-4 w-4 dark:text-red-500" />
					<Alert.Title class="dark:text-red-500">Oops! Not enough credits</Alert.Title>
					<Alert.Description class="dark:text-red-500"
						>You do not have enough credits to generate an Image. Please consider pusrchasing more
						credits to continue.</Alert.Description
					>
				</Alert.Root>
			</div>
		{/if}

		{#if notEnoughCredits}
			<div class="container max-w-4xl w-full p-3 rounded-lg space-y-2 mt-12">
				<Alert.Root variant="destructive" class="ring-red-500">
					<AlertCircle class="h-4 w-4 dark:text-red-500" />
					<Alert.Title class="dark:text-red-500">Oops! Not enough credits</Alert.Title>
					<Alert.Description class="dark:text-red-500"
						>You do not have enough credits to generate an Image. Your request requires {requiredCredits}
						credits, but you only have {availableCredits} credits available. Please consider pusrchasing
					</Alert.Description>
				</Alert.Root>
			</div>
		{/if}
	</div>

	<div class="flex items-center justify-center mt-10">
		{#if loading}
			<p>loading...</p>
		{:else if form?.image?.data}
			<div class="flex mb-32">
				<div class="flex flex-col md:flex-row gap-4 mt-8 lg:px-32">
					{#each form?.image?.data as src}
						<Card.Card class="rounded-xl overflow-hidden">
							<div class="relative aspect-square">
								<!-- svelte-ignore a11y-img-redundant-alt -->
								<img src={src.url} alt="Image" />
							</div>
							<Card.CardFooter class="p-2">
								<Button variant="secondary" class="w-full" on:click={() => window.open(src.url)}>
									<Download class="h-4 w-4 mr-2" />
									Download
								</Button>
							</Card.CardFooter>
						</Card.Card>
					{/each}
				</div>
			</div>
		{:else}
			<p />
		{/if}
	</div>
</div>
