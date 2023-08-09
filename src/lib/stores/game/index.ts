import { writable } from 'svelte/store'

import { objectKeys, splice } from '$lib/utils/common'

import type { Game, Player } from './game.types'
import { Choice } from './game.types'

export * from './game.types'

export const choices = objectKeys(Choice)

const state = writable<Game>({
	scene: 'MENU',
	players: [
		{ number: 1, type: 'HUMAN' },
		{ number: 2, type: 'COMPUTER' },
	],
	step: 'INTRO',
	choices: [null, null],
})

export default {
	state,

	setScene(scene: Game['scene']) {
		state.update((data) => ({ ...data, scene }))
	},

	setPlayer(player: Player, index: number) {
		state.update((data) => ({
			...data,
			players: splice(data.players, index, 1, player) as Game['players'],
		}))
	},

	setStep(step: Game['step']) {
		state.update((data) => ({ ...data, step }))
	},

	setChoice(choice: keyof typeof Choice, index: number) {
		state.update((data) => ({
			...data,
			choices: splice(data.choices, index, 1, choice) as Game['choices'],
		}))
	},

	resetChoices() {
		state.update((data) => ({ ...data, choices: [null, null] }))
	},
}
