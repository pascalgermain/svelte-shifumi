export enum Scene {
  MENU = 'MENU',
  GAME = 'GAME',
}

export enum Player {
  HUMAN = 'HUMAN',
  COMPUTER = 'COMPUTER',
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
  players: [keyof typeof Player, keyof typeof Player]
  step: keyof typeof Step
  choices: [keyof typeof Choice | null, keyof typeof Choice | null]
}
