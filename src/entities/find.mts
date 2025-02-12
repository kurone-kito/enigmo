import type { Cells, CellsIndex, Target } from './types.mjs';

/** Type definition that the move parameters. */
export interface FindParams {
  /** The cells. */
  readonly cells: Cells;

  /** The target to move. */
  readonly target: Target | 0;
}

/**
 * Find the target.
 * @param params The parameters.
 * @returns The target.
 */
export const find = ({ cells, target }: FindParams): CellsIndex | -1 =>
  cells.findIndex(
    (cell) => cell.type === 'special' && cell.sIndex === target,
  ) as CellsIndex | -1;

/**
 * Determine the other target.
 * @param target The target.
 * @returns The other target.
 */
export const other = (target: Target): Target => {
  switch (target) {
    case 1:
      return 2;
    case 2:
      return 1;
  }
};
