import { describe, expect, it } from 'vitest';
import type { Vector } from '../utils/vector.mjs';
import { initializedCells } from './initializedCells.mjs';
import type { Target } from './types.mjs';
import { validMove } from './validMove.mjs';

describe('validMove', () => {
  it.each<[target: Target, vector: Vector, expected: boolean]>([
    [1, { dir: 'x', velocity: 1 }, false],
    [1, { dir: 'x', velocity: -1 }, false],
    [1, { dir: 'y', velocity: 1 }, true],
    [1, { dir: 'y', velocity: -1 }, true],
    [2, { dir: 'x', velocity: 1 }, false],
    [2, { dir: 'x', velocity: -1 }, false],
    [2, { dir: 'y', velocity: 1 }, true],
    [2, { dir: 'y', velocity: -1 }, true],
  ])(
    '({ cells: [...] target: %i, vector: %o }) => %o',
    (target, vector, expected) =>
      expect(validMove({ cells: initializedCells, target, vector })).toBe(
        expected,
      ),
  );
});
