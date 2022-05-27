<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte'
  import { sleep } from '@/utils/common'

  const dispatch = createEventDispatcher()
  const timing = 200
  const transitionDuration = 100

  let title = ''
  let hidden = true

  const setTitle = async (text: string) => {
    title = text
    hidden = false
    await sleep(transitionDuration + timing)
    hidden = true
    await sleep(transitionDuration)
    title = ''
    await sleep(timing)
  }

  onMount(async () => {
    await setTitle('Shi')
    await setTitle('Fu')
    await setTitle('Mi')
    dispatch('done')
  })
</script>

<style>
  div {
    margin-top: 80px;
    font-size: 40px;
    font-weight: bold;
    transition: opacity 100ms;
  }

  .hidden {
    opacity: 0;
  }
</style>

<div class="text-primary" class:hidden>{title}</div>
