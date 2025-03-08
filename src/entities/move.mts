import type { Point } from '../utils/point.mjs';
import { equals, indexToPoint, pointToIndex, repeat } from '../utils/point.mjs';
import { getNeighbor, pointIsSameLine } from '../utils/vector.mjs';
import { find } from './find.mjs';
import type { Sequence } from './sequence.mjs';
import type { Cell, Cells, CellsIndex } from './types.mjs';
import { validMove } from './validMove.mjs';

/** Type definition that the move parameters. */
export interface MoveParams extends Sequence {
  /** The cells. */
  readonly cells: Cells;
}

/** Type definition that the internal move parameters. */
interface InternalMoveParams extends Pick<MoveParams, 'vector'> {
  /** The current cell. */
  readonly cell: Cell;

  /** The index of the current cell. */
  readonly index: CellsIndex;

  /** The previous cells. */
  readonly prev: Cells;

  /** The target point. */
  readonly target: Point;
}

/**
 * Move the flip for the mapping.
 * @param params The move parameters.
 * @returns New cell.
 */
const moveFlip = (params: InternalMoveParams) => {
  const { cell, index, prev, target, vector } = params;
  const currentIsFrom = equals(index, target);
  const moveTo = repeat(getNeighbor(target, vector));
  return currentIsFrom || equals(index, moveTo)
    ? prev[pointToIndex(currentIsFrom ? moveTo : target)]
    : cell;
};

/**
 * Move the line for the mapping.
 * @param params The move parameters.
 * @returns New cell.
 */
const moveLine = (params: InternalMoveParams) => {
  const { cell, index, prev, target, vector } = params;
  return pointIsSameLine(index, target).includes(vector.dir)
    ? prev[pointToIndex(repeat(getNeighbor(index, vector)))]
    : cell;
};

/**
 * Move the target.
 * @param params The move parameters.
 * @returns The moved target.
 */
export const move = (params: MoveParams): Cells => {
  const { cells, mode, target, vector } = params;
  if (!validMove(params)) {
    return cells;
  }
  const point = indexToPoint(find({ cells, target }));
  return Object.freeze(
    cells.map((cell, i, p) => {
      const index = i as CellsIndex;
      const prev = p as Cells;
      const params = { cell, index, prev, target: point, vector } as const;
      return (mode === 'flip' ? moveFlip : moveLine)(params);
    }),
  ) as Cells;
};
