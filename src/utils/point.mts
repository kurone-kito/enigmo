import { HEIGHT, WIDTH } from '../constants.mjs';
import { repeat as mathRepeat } from './math.mjs';

export interface Point {
  /** The x-coordinate. */
  readonly x: number;

  /** The y-coordinate. */
  readonly y: number;
}

/**
 * add two points.
 * @param a The point.
 * @param b The point.
 * @returns The point.
 */
export const addPoint = (a: Point, b: Point): Point => ({
  x: a.x + b.x,
  y: a.y + b.y,
});

/**
 * convert the point to the index.
 * @param from The index.
 * @returns The point.
 */
export const indexToPoint = (from: Point | number): Point =>
  typeof from === 'number'
    ? { x: from % WIDTH, y: Math.floor(from / WIDTH) }
    : from;

/**
 * convert the point to the index.
 * @param from The point.
 * @returns The index.
 */
export const pointToIndex = (from: Point | number): number => {
  if (typeof from === 'number') {
    return from;
  }
  const { x, y } = from;
  return y * WIDTH + x;
};

/**
 * determine the two points are equals.
 * @param a The point or index.
 * @param b The point or index.
 * @returns Whether the two points are equals.
 */
export const equals = (a: Point | number, b: Point | number): boolean => {
  const { x: ax, y: ay } = indexToPoint(a);
  const { x: bx, y: by } = indexToPoint(b);
  return ax === bx && ay === by;
};

/**
 * determine whether the point is in the range.
 * @param value The point.
 * @returns Whether the point is in the range.
 */
export const inRange = (value: Point | number): boolean => {
  const { x, y } = indexToPoint(value);
  return x >= 0 && x < WIDTH && y >= 0 && y < HEIGHT;
};

/**
 * repeat the point.
 * @param from The point.
 * @returns The point.
 */
export const repeat = (from: Point | number): Point => {
  const { x, y } = indexToPoint(from);
  return { x: mathRepeat(x, WIDTH), y: mathRepeat(y, HEIGHT) };
};
