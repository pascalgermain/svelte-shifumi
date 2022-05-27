<script lang="ts">
  import PlayerSelection from '@/components/PlayerSelection.svelte'
  import game from '@/stores/game'

  const { state } = game

  const play = () => game.setScene('GAME')
</script>

<div class="flex">
  {#each $state.players as player}
    <PlayerSelection bind:player />
  {/each}
</div>

<button type="button" class="btn btn-primary mt" on:click={play}>Play</button>
