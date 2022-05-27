<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import { Choice } from '@/stores/game'
  import { ucfirst } from '@/utils/common'

  export let choice: Choice
  export let number: number
  export let clickable = false
  export let disabled = false
  export let active = false

  const dispatch = createEventDispatcher()

  $: choiceLower = choice.toLowerCase()
  $: src = `images/choices/${choiceLower}_${number}.png`
  $: alt = ucfirst(choiceLower)
  $: title = disabled ? '' : alt

  const click = () => clickable && dispatch('click')
</script>

<style>
  img {
    width: 57px;
    height: 57px;
    margin: 20px 4px 0;
  }

  .clickable {
    cursor: pointer;
  }

  .disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  .active {
    margin: 17px 1px -3px;
    border: 3px solid #e64c1f;
  }
</style>

<img {src} {alt} {title} class:clickable class:disabled class:active on:click={click} />
