import { describe, expect, it } from 'vitest';
import { find, other } from './find.mjs';
import { initializedCells } from './initializedCells.mjs';
import type { Target } from './types.mjs';

describe('find', () => {
  it.each<[target: Target | 0, expected: number]>([
    [0, 31],
    [1, 30],
    [2, 32],
  ])('({ cells: [...] target: %i }) => %i', (target, expected) =>
    expect(find({ cells: initializedCells, target })).toBe(expected),
  );
});

describe('other', () => {
  it.each<[target: Target, expected: Target]>([
    [1, 2],
    [2, 1],
  ])('(%i) => %i', (target, expected) => expect(other(target)).toBe(expected));
});
