import { useEffect, useMemo, useState } from 'react';
import type { Sequences } from '../entities/sequences.mjs';
import { createInstance } from '../genetic/createInstance.mjs';

/** Type definition that the result of the genetic search. */
export interface GSResult {
  /** The sequences. */
  readonly sequences?: Sequences | undefined;

  /** The progress. */
  readonly progress: number;
}

/** The number of generations. */
const generationsCount = 200;

/**
 * create the sequence with genetic search.
 * @param setProgress The progress callback.
 * @returns The result of the genetic search.
 */
const gs = async (setProgress: (progress: number) => void) => {
  const search = createInstance();
  await search.fit({
    beforeStep: (gen) => setProgress((gen / generationsCount) * 100),
    generationsCount,
  });
  return search.bestGenome.sequence;
};

/**
 * Use the genetic search.
 * @param search The genetic search.
 * @returns The result of the genetic search.
 */
export const useGenerateSequences = () => {
  const [progress, setProgress] = useState(0);
  const [sequences, setSequences] = useState<Sequences | undefined>();
  useEffect(() => {
    gs(setProgress).then(setSequences);
  }, []);
  return useMemo<GSResult>(
    () => ({ progress, sequences }),
    [progress, sequences],
  );
};
