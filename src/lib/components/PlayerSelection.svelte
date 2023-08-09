<script lang="ts">
	import type { Player } from '$lib/stores/game'
	import { PlayerType } from '$lib/stores/game'

	export let player: Player

	const playerTypes = {
		[PlayerType.HUMAN]: 'Human',
		[PlayerType.COMPUTER]: 'Computer',
	}
</script>

<div class="flex flex-column w-full">
	<h2>Player {player.number}</h2>

	<select bind:value={player.type} class="mx-auto mt">
		{#each Object.entries(playerTypes) as [value, text]}
			<option {value}>{text}</option>
		{/each}
	</select>
</div>
