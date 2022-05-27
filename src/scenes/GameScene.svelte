<script lang="ts">
  import GameChoice from '@/components/GameChoice.svelte'
  import GameIntro from '@/components/GameIntro.svelte'
  import GameScore from '@/components/GameScore.svelte'
  import game, { Step } from '@/stores/game'

  const { state } = game

  const start = () => game.setStep('INTRO')
  const choose = () => game.setStep('CHOICE')
  const score = () => game.setStep('SCORE')
  const menu = () => game.setScene('MENU')

  start()
</script>

{#if $state.step === Step.INTRO}
  <svelte:component this={GameIntro} on:done={choose} />
{:else if $state.step === Step.CHOICE}
  <svelte:component this={GameChoice} on:done={score} />
{:else if $state.step === Step.SCORE}
  <svelte:component this={GameScore} on:start={start} on:menu={menu} />
{/if}
