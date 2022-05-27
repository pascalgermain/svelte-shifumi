<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte'
  import ChoiceImage from '@/components/ChoiceImage.svelte'
  import { Player, Choice } from '@/stores/game'

  export let player: Player

  const dispatch = createEventDispatcher()
  const choices = Object.keys(Choice)

  let choice = null as keyof typeof Choice | null

  $: isComputer = player.type === 'COMPUTER'
  $: readonly = isComputer || !!choice
  $: selected = choices.map((_, index) => !isComputer && choice === choices[index])

  const update = (index: number) => {
    choice = choices[index]
    dispatch('input', choice)
  }

  const computerChoose = () => {
    const index = Math.floor(Math.random() * choices.length)
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
        on:click={() => update(index)} />
    {/each}
  </div>
</div>
