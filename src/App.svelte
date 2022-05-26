<script lang="ts">
  import MenuScene from './scenes/MenuScene.svelte'
  import { Scene } from './stores/GameStore'

  const sceneComponents = {
    [Scene.MENU]: MenuScene,
  }

  const sceneComponent = sceneComponents.MENU
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
  <svelte:component this={sceneComponent} class="mx-auto mt scene" />
</main>
