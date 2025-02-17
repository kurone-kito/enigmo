import { describe, expect, it } from 'vitest';
import type { Point } from './point.mjs';
import type { Dir, Vector } from './vector.mjs';
import { getNeighbor, pointIsSameLine, vectorToPoint } from './vector.mjs';

describe('getNeighbor', () => {
  it.each<[point: Point | number, vector: Vector, expected: Point]>([
    [
      { x: 1, y: 2 },
      { dir: 'x', velocity: 1 },
      { x: 2, y: 2 },
    ],
    [
      { x: 3, y: 4 },
      { dir: 'y', velocity: -1 },
      { x: 3, y: 3 },
    ],
    [0, { dir: 'x', velocity: -1 }, { x: -1, y: 0 }],
  ])('(%o, %o) => %o', (point, vector, expected) =>
    expect(getNeighbor(point, vector)).toEqual(expected),
  );
});

describe('pointIsSameLine', () => {
  it.each<[a: Point | number, b: Point | number, expected: Dir | '']>([
    [{ x: 1, y: 2 }, { x: 3, y: 4 }, ''],
    [{ x: 1, y: 2 }, { x: 1, y: 7 }, 'y'],
    [{ x: 5, y: 6 }, { x: 5, y: 6 }, 'xy'],
    [0, 1, 'x'],
    [0, 0, 'xy'],
  ])('(%o, %o) => %o', (a, b, expected) =>
    expect(pointIsSameLine(a, b)).toBe(expected),
  );
});

describe('vectorToPoint', () => {
  it.each<[vector: Vector, expected: Point]>([
    [
      { dir: 'x', velocity: 1 },
      { x: 1, y: 0 },
    ],
    [
      { dir: 'y', velocity: -1 },
      { x: 0, y: -1 },
    ],
    [
      { dir: 'xy', velocity: -1 },
      { x: -1, y: -1 },
    ],
  ])('(%o) => %o', (vector, expected) =>
    expect(vectorToPoint(vector)).toEqual(expected),
  );
});
