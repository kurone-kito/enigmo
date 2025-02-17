import type { ReadonlyTuple } from 'type-fest';
import { getNeighbors } from '../utils/vector.mjs';
import { initializedCells } from './initializedCells.mjs';
import type { Cell, Cells, CellsIndex } from './types.mjs';
import { pointToIndex } from '../utils/point.mjs';
import { find } from './find.mjs';

/** Type definition that the neighbor cells. */
export type NeighborCells = ReadonlyTuple<Cell, 4>;

/**
 * Get the neighbor cells.
 * @param cells The cells.
 * @param index The index.
 * @returns The neighbor cells.
 */
export const getNeighborCells = (
  cells: Cells,
  index: CellsIndex,
): NeighborCells =>
  Object.freeze(
    getNeighbors(index).map((point) => cells[pointToIndex(point)]!),
  ) as NeighborCells;

/**
 * Evaluate the cell.
 * @param a the cell.
 * @param b the cell.
 * @returns The evaluated value.
 */
export const evaluateCell = (a: Cell, b: Cell): number => {
  if (a.type !== b.type) {
    return 5;
  }
  if (a.type === 'special' && b.type === 'special' && a.sIndex !== b.sIndex) {
    return 1;
  }
  if (a.type === 'wall' && b.type === 'wall') {
    if (a.wIndex !== b.wIndex) {
      return 2;
    }
    if (a.cIndex !== b.cIndex) {
      return 1;
    }
  }
  return 0;
};

/**
 * Evaluate the neighbor cells.
 * @param a the neighbor cells.
 * @param b the neighbor cells.
 * @returns The evaluated value.
 */
export const evaluateNeighbors = (a: NeighborCells, b: NeighborCells) =>
  a.reduce((acc, cur, index) => acc + evaluateCell(cur, b[index]!), 0);

/**
 * Evaluate the cells.
 * @param a the cells.
 * @param b the cells.
 * @return The evaluated value.
 */
export const evaluate = (a: Cells, b: Cells): number => {
  if (a === b) {
    return -1000;
  }
  return b.reduce((acc, cell, index) => {
    const initNeighbors = getNeighborCells(initializedCells, cell.initial);
    const neighbors = getNeighborCells(b, index as CellsIndex);
    const scoreNeighbors = evaluateNeighbors(initNeighbors, neighbors);
    const scoreMovedSp0 =
      cell.type === 'special' &&
      cell.sIndex === 0 &&
      find({ cells: a, target: 0 }) !== index
        ? 50
        : 0;
    return acc + scoreNeighbors + scoreMovedSp0;
  }, 0);
};
