#!/usr/bin/env node

import { start } from './App.js';
import { initializedCells } from './entities/initializedCells.mjs';
import { move } from './entities/move.mjs';

const moved = move({
  cells: move({
    cells: initializedCells,
    target: 1,
    vector: { dir: 'y', velocity: -1 },
  }),
  target: 2,
  vector: { dir: 'x', velocity: 1 },
});

await start(moved);
process.exit();
