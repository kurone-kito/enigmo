import { describe, expect, it } from 'vitest';
import { repeat } from './math.mjs';

describe('repeat', () => {
  it.each<[from: number, length: number, expected: number]>([
    [0, 8, 0],
    [1, 8, 1],
    [8, 8, 0],
    [9, 8, 1],
    [16, 8, 0],
    [17, 8, 1],
    [-1, 8, 7],
    [-8, 8, 0],
    [-9, 8, 7],
    [-16, 8, 0],
    [-17, 8, 7],
    [0, 5, 0],
    [4, 5, 4],
    [5, 5, 0],
    [9, 5, 4],
    [10, 5, 0],
    [-1, 5, 4],
    [-5, 5, 0],
    [-6, 5, 4],
    [-10, 5, 0],
    [-11, 5, 4],
  ])('(%i, %i) => %i', (from, length, expected) =>
    expect(repeat(from, length)).toBe(expected),
  );
});
