import type { ForegroundColorName } from 'chalk';
import type { Add, Multiply } from 'type-plus';

/** the bpm of the music */
export const BPM = 190;

/** the width of the cells */
export const WIDTH = 9;

/** the height of the cells */
export const HEIGHT = 7;

/** the number of the cells */
export const CELLS = (WIDTH * HEIGHT) as Multiply<typeof WIDTH, typeof HEIGHT>;

/** the entry position of the special cells */
export const SP_POS = (WIDTH * 3 + 3) as Add<Multiply<typeof WIDTH, 3>, 3>;

/** the colors of the cells */
export const COLORS = [
  'blackBright',
  'blueBright',
  'redBright',
  'magentaBright',
  'greenBright',
  'cyanBright',
  'yellowBright',
  'whiteBright',
] as const satisfies readonly ForegroundColorName[];

/** the special characters */
export const SPECIALS = ['◬', '◭', '◮'] as const;

/** the number of the turns */
export const TURNS = 50;

/** the word of the cells */
export const WALLS = ['N', 'U', 'L', 'L', 'R', 'I', 'S', 'E'] as const;
