<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import PlayerChoice from '@/components/PlayerChoice.svelte'
  import game, { Choice } from '@/stores/game'

  const dispatch = createEventDispatcher()
  const { state } = game

  let allChose: boolean
  state.subscribe(({ choices }) => (allChose = choices.every(choice => choice)))

  const handleInput = ({ detail }: { detail: keyof typeof Choice }, index) => {
    game.setChoice(detail, index)
    if (allChose) dispatch('done')
  }

  game.resetChoices()
</script>

<div class="flex">
  {#each $state.players as player, index}
    <PlayerChoice {player} on:input={event => handleInput(event, index)} />
  {/each}
</div>
