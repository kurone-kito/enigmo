import type { IntRange, ReadonlyTuple } from 'type-fest';
import type { ArrayIndex } from '../utils/types.mjs';
import type { CELLS, COLORS, SPECIALS, WALLS } from '../constants.mjs';

/** Type definition that a cell. */
export type Cell = Special | Wall;

/** Type definition that the cell base. */
export interface CellBase {
  /** The initial index. */
  readonly initial: CellsIndex;
}

/** Type definition that the cells. */
export type Cells = ReadonlyTuple<Cell, typeof CELLS>;

/** Type definition that the cells index. */
export type CellsIndex = IntRange<0, typeof CELLS>;

/** Type definition that the color index. */
export type ColorsIndex = ArrayIndex<typeof COLORS>;

/** Type definition that the move mode. */
export type MoveMode = 'flip' | 'line';

/** Type definition that a special cell. */
export interface Special extends CellBase {
  /** The color index. */
  readonly sIndex: SpecialsIndex;

  /** The type for determine the special cell. */
  readonly type: 'special';
}

/** Type definition that the special index. */
export type SpecialsIndex = ArrayIndex<typeof SPECIALS>;

/** Type definition that the special target to move. */
export type Target = 1 | 2;

/** Type definition that a wall cell. */
export interface Wall extends CellBase {
  /** The color index. */
  readonly cIndex: ColorsIndex;

  /** The wall index. */
  readonly wIndex: WallsIndex;

  /** The type for determine the wall cell. */
  readonly type: 'wall';
}

/** Type definition that the wall index. */
export type WallsIndex = ArrayIndex<typeof WALLS>;
