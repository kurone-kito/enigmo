import { resolve } from 'node:path';
import { defineConfig } from 'vite';

/** The name of the output file. */
const out = '[name].mjs';

export default defineConfig({
  build: {
    lib: { entry: resolve('src', 'index.mts'), formats: ['es'] },
    rollupOptions: { output: { chunkFileNames: out, entryFileNames: out } },
    sourcemap: true,
    ssr: true,
    target: 'esnext',
  },
});
