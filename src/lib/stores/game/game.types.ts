export enum Scene {
	MENU = 'MENU',
	GAME = 'GAME',
}

export enum PlayerType {
	HUMAN = 'HUMAN',
	COMPUTER = 'COMPUTER',
}

export type Player = {
	number: number
	type: keyof typeof PlayerType
}

export enum Step {
	INTRO = 'INTRO',
	CHOICE = 'CHOICE',
	SCORE = 'SCORE',
}

export enum Choice {
	STONE = 'STONE',
	SCISSOR = 'SCISSOR',
	PAPER = 'PAPER',
}

export type Game = {
	scene: keyof typeof Scene
	players: [Player, Player]
	step: keyof typeof Step
	choices: [keyof typeof Choice | null, keyof typeof Choice | null]
}
