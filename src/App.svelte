<script lang="ts">
  import GameScene from './scenes/GameScene.svelte'
  import MenuScene from './scenes/MenuScene.svelte'
  import game, { Game } from './stores/game'

  let sceneComponent: Game['Scene']
  game.state.subscribe(
    ({ scene }) => (sceneComponent = { MENU: MenuScene, GAME: GameScene }[scene]),
  )

  setTimeout(() => game.setScene('GAME'), 1000)
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
  <img src="/images/logo.svg" alt="Svelte logo" width="166" height="200" />
  <h1>Svelte Shifumi</h1>
  <div class="mx-auto mt scene">
    <svelte:component this={sceneComponent} />
  </div>
</main>
