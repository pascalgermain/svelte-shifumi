<script lang="ts">
	import game, { Step } from '$lib/stores/game'

	import GameChoice from '$lib/components/GameChoice.svelte'
	import GameIntro from '$lib/components/GameIntro.svelte'
	import GameScore from '$lib/components/GameScore.svelte'

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
