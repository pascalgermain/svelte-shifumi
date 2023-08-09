<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte'

	import { sleep } from '$lib/utils/common'
	import styles from '$styles/exports.module.scss'

	const dispatch = createEventDispatcher()
	const timing = 200
	const transitionDuration = parseInt(styles.transitionDuration)

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

<div class="text-primary" class:hidden>{title}</div>

<style module lang="scss">
	div {
		margin-top: 80px;
		font-size: 40px;
		font-weight: bold;
		transition: opacity $transition-duration;
	}

	.hidden {
		opacity: 0;
	}
</style>
