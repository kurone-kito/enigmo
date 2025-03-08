import { describe, expect, it } from 'vitest';
import type { Vector } from '../utils/vector.mjs';
import { initializedCells } from './initializedCells.mjs';
import type { MoveMode, Target } from './types.mjs';
import { validMove } from './validMove.mjs';

describe('validMove', () => {
  it.each<[target: Target, vector: Vector, mode: MoveMode, expected: boolean]>([
    [1, { dir: 'x', velocity: 1 }, 'line', false],
    [1, { dir: 'x', velocity: -1 }, 'line', false],
    [1, { dir: 'y', velocity: 1 }, 'line', true],
    [1, { dir: 'y', velocity: -1 }, 'line', true],
    [2, { dir: 'x', velocity: 1 }, 'line', false],
    [2, { dir: 'x', velocity: -1 }, 'line', false],
    [2, { dir: 'y', velocity: 1 }, 'line', true],
    [2, { dir: 'y', velocity: -1 }, 'line', true],
  ])(
    '({ cells: [...] target: %i, vector: %o }) => %o',
    (target, vector, mode, expected) =>
      expect(validMove({ cells: initializedCells, mode, target, vector })).toBe(
        expected,
      ),
  );
});
