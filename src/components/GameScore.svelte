<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import ChoiceImage from '@/components/ChoiceImage.svelte'
  import game, { Choice } from '@/stores/game'

  const dispatch = createEventDispatcher()
  const { state } = game
  const choiceKeys = Object.keys(Choice) as (keyof typeof Choice)[]

  let score: string
  state.subscribe(({ choices }) => {
    let winner: number | null
    if (choices[0] === choices[1]) {
      winner = null
    } else {
      const choiceIndexes: number[] = choices.map(choice =>
        choiceKeys.findIndex(choiceKey => choice === choiceKey),
      )
      const diff = choiceIndexes[1] - choiceIndexes[0]
      winner = diff === 1 || diff === -2 ? 1 : 2
    }
    score = winner === null ? 'Nobody wins :(' : `Player ${winner} wins :)`
  })

  const handleClick = detail => dispatch(detail)
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
