<script lang="ts">
	import { createEventDispatcher, tick } from 'svelte'

	import game, { Choice } from '$lib/stores/game'

	import PlayerChoice from '$lib/components/PlayerChoice.svelte'

	const dispatch = createEventDispatcher()
	const { state } = game

	$: allChose = $state.choices.every((choice) => choice)

	const handleInput = async ({ detail }: { detail: keyof typeof Choice }, index: number) => {
		game.setChoice(detail, index)
		await tick()
		if (allChose) dispatch('done')
	}

	game.resetChoices()
</script>

<div class="flex">
	{#each $state.players as player, index}
		<PlayerChoice {player} on:input={(event) => handleInput(event, index)} />
	{/each}
</div>
