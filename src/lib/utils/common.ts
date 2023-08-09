export const getRandomInt = (max: number) => Math.floor(Math.random() * max)

export const objectKeys = <T extends { [key: string | number | symbol]: unknown }>(o: T) =>
	Object.keys(o) as (keyof T)[]

export const sleep = (ms = 0) => new Promise((resolve) => setTimeout(resolve, ms))

export const splice = <T>(
	input: T[],
	start: number,
	count = input.length - start,
	...items: T[]
) => [...input.slice(0, start), ...items, ...input.slice(start + count)]

export const ucfirst = (string: string) => string[0].toUpperCase() + string.substring(1)
