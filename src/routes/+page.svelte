<script lang="ts">
	import '../styles/main.scss'

	import GameScene from '$lib/scenes/GameScene.svelte'
	import MenuScene from '$lib/scenes/MenuScene.svelte'
	import game, { Scene } from '$lib/stores/game'

	import GithubCorner from '$lib/components/GithubCorner.svelte'

	const sceneComponents = { [Scene.MENU]: MenuScene, [Scene.GAME]: GameScene }
	const { state } = game

	$: sceneComponent = sceneComponents[$state.scene]
</script>

<GithubCorner url="pascalgermain/svelte-shifumi" />

<main class="text-center">
	<img src="images/logo.svg" alt="Svelte logo" width="166" height="200" />

	<h1>Shifumi</h1>

	<div class="mx-auto mt scene">
		<svelte:component this={sceneComponent} />
	</div>
</main>

<style lang="scss">
	main {
		margin-top: 50px;
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: $secondary;
	}

	.scene {
		max-width: 1200px;
	}
</style>
