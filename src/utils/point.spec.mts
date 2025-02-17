import { describe, expect, it } from 'vitest';
import type { Point } from './point.mjs';
import {
  addPoint,
  indexToPoint,
  inRange,
  pointToIndex,
  repeat,
} from './point.mjs';

describe('addPoint', () => {
  it.each<[a: Point, b: Point, expected: Point]>([
    [
      { x: 1, y: 2 },
      { x: 3, y: 4 },
      { x: 4, y: 6 },
    ],
    [
      { x: 5, y: 6 },
      { x: 7, y: 8 },
      { x: 12, y: 14 },
    ],
  ])('(a: %o, b: %o) => %o', (a, b, expected) =>
    expect(addPoint(a, b)).toEqual(expected),
  );
});

describe('indexToPoint', () => {
  it.each<[index: Point | number, expected: Point]>([
    [0, { x: 0, y: 0 }],
    [8, { x: 8, y: 0 }],
    [9, { x: 0, y: 1 }],
    [17, { x: 8, y: 1 }],
    [
      { x: 0, y: 0 },
      { x: 0, y: 0 },
    ],
    [
      { x: 1, y: 2 },
      { x: 1, y: 2 },
    ],
  ])('(%o) => %o', (index, expected) =>
    expect(indexToPoint(index)).toEqual(expected),
  );
});

describe('inRange', () => {
  it.each<[point: Point | number, expected: boolean]>([
    [{ x: 0, y: 0 }, true],
    [{ x: 8, y: 6 }, true],
    [{ x: 9, y: 1 }, false],
    [{ x: 1, y: 7 }, false],
    [{ x: 1, y: -1 }, false],
    [{ x: -1, y: 1 }, false],
    [0, true],
    [1, true],
    [63, false],
    [-1, false],
  ])('(%o) => %s', (point, expected) => expect(inRange(point)).toBe(expected));
});

describe('pointToIndex', () => {
  it.each<[point: Point | number, expected: number]>([
    [{ x: 0, y: 0 }, 0],
    [{ x: 8, y: 0 }, 8],
    [{ x: 9, y: 0 }, 9],
    [{ x: 0, y: 1 }, 9],
    [{ x: 8, y: 1 }, 17],
    [0, 0],
    [1, 1],
  ])('(%o) => %i', (point, expected) =>
    expect(pointToIndex(point)).toBe(expected),
  );
});

describe('repeat', () => {
  it.each<[point: Point | number, expected: Point]>([
    [
      { x: 0, y: 0 },
      { x: 0, y: 0 },
    ],
    [
      { x: 8, y: 6 },
      { x: 8, y: 6 },
    ],
    [
      { x: 9, y: 7 },
      { x: 0, y: 0 },
    ],
    [
      { x: 19, y: 15 },
      { x: 1, y: 1 },
    ],
    [
      { x: -1, y: -1 },
      { x: 8, y: 6 },
    ],
    [
      { x: -9, y: -7 },
      { x: 0, y: 0 },
    ],
    [
      { x: -10, y: -8 },
      { x: 8, y: 6 },
    ],
  ])('(%o) => %o', (point, expected) =>
    expect(repeat(point)).toEqual(expected),
  );
});
