<script lang="ts">
	import { createEventDispatcher } from 'svelte'

	import type { Choice } from '$lib/stores/game'
	import { ucfirst } from '$lib/utils/common'

	export let choice: keyof typeof Choice | null
	export let number: number
	export let clickable = false
	export let disabled = false
	export let active = false

	const dispatch = createEventDispatcher()

	$: choiceLower = choice?.toLowerCase() || ''
	$: src = choice ? `images/choices/${choiceLower}_${number}.png` : ''
	$: alt = ucfirst(choiceLower)

	const click = () => clickable && dispatch('click')
</script>

<input type="image" {src} {alt} class:clickable class:disabled class:active on:click={click} />

<style lang="scss">
	$border-width: 3px;

	input {
		width: 57px;
		height: 57px;
		margin: 20px 4px 0;
	}

	:not(.clickable) {
		cursor: default;
	}

	.disabled {
		opacity: 0.3;
		cursor: not-allowed;
	}

	.active {
		margin: (20px - $border-width) (4px - $border-width) (0 - $border-width);
		border: $border-width solid $primary;
	}
</style>
