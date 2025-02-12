import { render } from 'ink';
import { Cells } from './components/Cells.js';
import type { Cells as CellsType } from './entities/types.mjs';

/**
 * The entry point of the application.
 * @returns The rendered component.
 */
export const start = (cells: CellsType) =>
  render(<Cells cells={cells} />).waitUntilExit();
