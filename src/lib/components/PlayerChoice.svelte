<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte'

	import type { Player } from '$lib/stores/game'
	import { Choice, choices } from '$lib/stores/game'
	import { getRandomInt } from '$lib/utils/common'

	import ChoiceImage from '$lib/components/ChoiceImage.svelte'

	export let player: Player

	const dispatch = createEventDispatcher()

	let playerChoice = null as keyof typeof Choice | null

	$: isComputer = player.type === 'COMPUTER'
	$: readonly = isComputer || !!playerChoice
	$: selected = choices.map((choice) => !isComputer && playerChoice === choice)

	const update = (index: number) => {
		playerChoice = choices[index]
		dispatch('input', playerChoice)
	}

	const computerChoose = () => {
		const index = getRandomInt(choices.length)
		update(index)
	}

	onMount(() => isComputer && computerChoose())
</script>

<div class="flex flex-column w-full">
	<h2>Player {player.number}</h2>

	<div class="flex mx-auto">
		{#each choices as choice, index}
			<ChoiceImage
				{choice}
				number={player.number}
				clickable={!readonly}
				disabled={isComputer}
				active={selected[index]}
				on:click={() => update(index)}
			/>
		{/each}
	</div>
</div>
