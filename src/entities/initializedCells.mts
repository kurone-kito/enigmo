import { CELLS, COLORS, SP_POS, WALLS } from '../constants.mjs';
import type {
  Cell,
  Cells,
  CellsIndex,
  ColorsIndex,
  Special,
  SpecialsIndex,
  WallsIndex,
} from './types.mjs';

/** The offset of the special cells. */
const specials = Object.freeze(
  [1, 0, 2].map<Special>((item, index) => {
    const sIndex = item as SpecialsIndex;
    const initial = (SP_POS + index) as CellsIndex;
    return Object.freeze<Special>({ initial, sIndex, type: 'special' });
  }),
);

/**
 * Initialize the cells.
 * @returns the cells
 */
const initializeCells = (): Cells =>
  COLORS.reduce<readonly Cell[]>(
    (cAcc, _, ci) =>
      WALLS.reduce<readonly Cell[]>((acc, __, wi) => {
        const cIndex = ci as ColorsIndex;
        const wIndex = wi as WallsIndex;
        const length = acc.length;
        const ins = length - SP_POS === 0;
        const initial = (length + (ins ? specials.length : 0)) as CellsIndex;
        const wall = { cIndex, initial, wIndex, type: 'wall' } as const;
        return length >= CELLS ? acc : [...acc, ...(ins ? specials : []), wall];
      }, cAcc),
    [],
  ) as Cells;

/** The initialized cells. */
export const initializedCells = initializeCells();
