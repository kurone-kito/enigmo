import type { Point } from './point.mjs';
import { addPoint, indexToPoint, repeat } from './point.mjs';

/** Type definition that the move direction. */
export type Dir = 'x' | 'y' | 'xy';

/** Type definition that the move velocity. */
export type Velocity = -1 | 1;

/** Type definition that the move vector. */
export interface Vector {
  /** The direction. */
  readonly dir: Dir;

  /** The velocity. */
  readonly velocity: Velocity;
}

/**
 * create a point from a vector.
 * @param vector The vector.
 * @returns The point.
 */
export const vectorToPoint = (vector: Vector): Point => {
  const { dir, velocity: vel } = vector;
  return { x: dir.includes('x') ? vel : 0, y: dir.includes('y') ? vel : 0 };
};

/** The neighbors positions */
const neighbors = Object.freeze(
  (
    [
      { dir: 'x', velocity: 1 },
      { dir: 'x', velocity: -1 },
      { dir: 'y', velocity: 1 },
      { dir: 'y', velocity: -1 },
    ] as const satisfies readonly Vector[]
  ).map(vectorToPoint),
);

/**
 * get the neighbor point.
 * @param point The point.
 * @param vector The vector.
 * @returns The neighbor point.
 */
export const getNeighbor = (point: Point | number, vector: Vector): Point =>
  addPoint(indexToPoint(point), vectorToPoint(vector));

/**
 * get the neighbors points.
 * @param point The point.
 * @returns The neighbors points.
 */
export const getNeighbors = (point: Point | number): readonly Point[] =>
  neighbors.map((neighbor) => repeat(addPoint(indexToPoint(point), neighbor)));

/**
 * determine the two points are on the same line.
 * @param a The point or index.
 * @param b The point or index.
 * @returns The direction.
 * If the points are not on the same line, return falsy string.
 */
export const pointIsSameLine = (
  a: Point | number,
  b: Point | number,
): Dir | '' => {
  const pa = indexToPoint(a);
  const pb = indexToPoint(b);
  return `${pa.y === pb.y ? 'x' : ''}${pa.x === pb.x ? 'y' : ''}` as const;
};
