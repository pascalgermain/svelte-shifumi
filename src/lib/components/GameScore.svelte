<script lang="ts">
	import { createEventDispatcher } from 'svelte'

	import game, { choices } from '$lib/stores/game'

	import ChoiceImage from '$lib/components/ChoiceImage.svelte'

	const dispatch = createEventDispatcher()
	const { state } = game

	let score: string

	$: if ($state.choices[0] === $state.choices[1]) {
		score = 'Nobody wins :('
	} else {
		const choiceIndexes = $state.choices.map((playerChoice) =>
			choices.findIndex((choice) => playerChoice === choice),
		)
		const diff = choiceIndexes[1] - choiceIndexes[0]
		const winner = diff === 1 || diff === -2 ? 1 : 2
		score = `Player ${winner} wins :)`
	}

	const handleClick = (detail: string) => dispatch(detail)
</script>

<div class="flex">
	{#each $state.players as player, index}
		<div class="flex flex-column w-full">
			<h2>Player {player.number}</h2>

			<div class="flex mx-auto">
				<ChoiceImage choice={$state.choices[index]} number={player.number} />
			</div>
		</div>
	{/each}
</div>

<h2>{score}</h2>

<button class="btn btn-primary mx mt" on:click={() => handleClick('start')}>Replay</button>
<button class="btn btn-primary mx mt" on:click={() => handleClick('menu')}>Menu</button>
