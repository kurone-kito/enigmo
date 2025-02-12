#!/usr/bin/env node

import { start } from './App.js';
import { initializedCells } from './entities/initializedCells.mjs';

await start(initializedCells);
process.exit();
