<script lang="ts">
  import GithubCorner from './components/GithubCorner.svelte'
  import GameScene from './scenes/GameScene.svelte'
  import MenuScene from './scenes/MenuScene.svelte'
  import game, { Game, Scene } from './stores/game'

  const sceneComponents = { [Scene.MENU]: MenuScene, [Scene.GAME]: GameScene }
  let sceneComponent: Game['Scene']
  game.state.subscribe(({ scene }) => (sceneComponent = sceneComponents[scene]))
</script>

<style>
  main {
    margin-top: 60px;
  }

  .scene {
    max-width: 1200px;
  }
</style>

<main class="text-center">
  <img src="images/logo.svg" alt="Svelte logo" width="166" height="200" />

  <h1>Svelte Shifumi</h1>

  <div class="mx-auto mt scene">
    <svelte:component this={sceneComponent} />
  </div>
</main>

<GithubCorner url="pascalgermain/svelte-shifumi" />
