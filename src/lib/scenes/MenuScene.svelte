<script lang="ts">
	import game from '$lib/stores/game'

	import PlayerSelection from '$lib/components/PlayerSelection.svelte'

	const { state } = game

	const play = () => game.setScene('GAME')
</script>

<div class="flex">
	{#each $state.players as player}
		<PlayerSelection bind:player />
	{/each}
</div>

<button type="button" class="btn btn-primary mt" on:click={play}>Play</button>
