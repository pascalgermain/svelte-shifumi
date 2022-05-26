export const splice = <T extends any>(
  input: T[],
  start: number,
  count = input.length - start,
  ...items: T[]
) => [...input.slice(0, start), ...items, ...input.slice(start + count)]
