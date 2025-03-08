import { equals, inRange } from '../utils/point.mjs';
import { getNeighbor, pointIsSameLine } from '../utils/vector.mjs';
import type { Sequence } from './sequence.mjs';
import type { Cells } from './types.mjs';
import { find, other } from './find.mjs';

/** Type definition that the valid move parameters. */
export interface ValidMoveParams extends Sequence {
  /** The cells. */
  readonly cells: Cells;
}

/**
 * Check the move is valid.
 * @param params The parameters.
 * @returns The result.
 */
export const validMove = (params: ValidMoveParams): boolean => {
  const { cells, mode, target, vector } = params;
  const index = find({ cells, target });
  const enemy = find({ cells, target: other(target) });
  const neighbor = getNeighbor(index, vector);
  return (
    index >= 0 &&
    enemy >= 0 &&
    inRange(neighbor) &&
    !equals(neighbor, enemy) &&
    (mode === 'flip' || !pointIsSameLine(index, enemy).includes(vector.dir))
  );
};
