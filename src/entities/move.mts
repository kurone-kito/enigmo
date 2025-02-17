import { indexToPoint, pointToIndex, repeat } from '../utils/point.mjs';
import { getNeighbor, pointIsSameLine } from '../utils/vector.mjs';
import { find } from './find.mjs';
import type { Sequence } from './sequence.mjs';
import { validMove } from './validMove.mjs';
import type { Cells } from './types.mjs';

/** Type definition that the move parameters. */
export interface MoveParams extends Sequence {
  /** The cells. */
  readonly cells: Cells;
}

/**
 * Move the target.
 * @param params The move parameters.
 * @returns The moved target.
 */
export const move = (params: MoveParams): Cells => {
  const { cells, target, vector } = params;
  if (!validMove(params)) {
    return cells;
  }
  const { dir } = vector;
  const point = indexToPoint(find({ cells, target }));
  return Object.freeze(
    cells.map((cell, index, prev) =>
      pointIsSameLine(index, point).includes(dir)
        ? prev[pointToIndex(repeat(getNeighbor(index, vector)))]
        : cell,
    ),
  ) as Cells;
};
