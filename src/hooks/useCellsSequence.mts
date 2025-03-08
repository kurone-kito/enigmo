import { useApp } from 'ink';
import { useEffect, useState } from 'react';
import { BPM } from '../constants.mjs';
import type { Cells } from '../entities/types.mjs';

/**
 * Use the cells sequence.
 * @param cellsSequence The cells sequence.
 * @returns The cells.
 */
export const useCellsSequence = (cellsSequence: readonly Cells[]) => {
  const [index, setIndex] = useState(cellsSequence.length - 1);
  const { exit } = useApp();
  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => prev - 2), 60_000 / BPM);
    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    if (index < 0) {
      exit();
    }
  }, [cellsSequence, index, exit]);
  return cellsSequence[Math.max(index, 0)]!;
};
