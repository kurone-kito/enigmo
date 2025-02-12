import { render } from 'ink';
import { CellsSequence } from './components/CellsSequence.js';
import type { Sequences } from './entities/sequences.mjs';

/**
 * The entry point of the application.
 * @returns The rendered component.
 */
export const start = (sequences: Sequences) =>
  render(<CellsSequence sequences={sequences} />).waitUntilExit();
