#!/usr/bin/env node

import { createInstance } from './genetic/createInstance.mjs';
import { start } from './App.js';

const search = createInstance();
await search.fit({ beforeStep: console.log, generationsCount: 200 });

await start(search.bestGenome.sequence);
process.exit();
