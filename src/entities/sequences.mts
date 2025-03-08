import type { ReadonlyTuple } from 'type-fest';
import { TURNS } from '../constants.mjs';
import type { ArrayIndex } from '../utils/types.mjs';
import type { Sequence } from './sequence.mjs';
import { mutateSequence, randomSequence } from './sequence.mjs';
import type { Cells } from './types.mjs';
import { move } from './move.mjs';
import { initializedCells } from './initializedCells.mjs';
import { evaluate } from './cells.mjs';

/** Type definition that the result of sequences. */
export interface SequenceResult {
  /** The cells after the sequences. */
  readonly cells: readonly Cells[];

  /** The score after the sequences. */
  readonly score: number;
}

/** Type definition that the sequences. */
export type Sequences = ReadonlyTuple<Sequence, typeof TURNS>;

/** Type definition that the sequence index. */
export type SequencesIndex = ArrayIndex<Sequences>;

/**
 * Retype the sequences.
 * @param seq The sequences to retype.
 * @returns The retyped sequences.
 */
const retype = (seq: Sequence[]): Sequences => Object.freeze(seq) as Sequences;

/**
 * Generate random sequences.
 * @returns The generated sequences.
 */
export const randomSequences = (): Sequences =>
  retype(
    Array.from({ length: TURNS }, (__, index) => {
      const target = index % 2 ? 1 : 2;
      const mod4 = index % 4;
      const mode =
        mod4 < 2
          ? target === 1
            ? 'flip'
            : 'line'
          : target === 1
            ? 'line'
            : 'flip';
      return randomSequence({ mode, target });
    }),
  );

/**
 * Mutate the sequences.
 * @param source The source sequences to mutate.
 * @param threshold The threshold to mutate the sequences.
 * @returns The mutated sequences.
 */
export const mutateSequences = (
  source: Sequences,
  threshold = 0.8,
): Sequences => retype(source.map((seq) => mutateSequence(seq, threshold)));

/**
 * Crossover the sequences.
 * @param a the sequences.
 * @param b the sequences.
 * @returns The crossed sequences.
 */
export const crossoverSequences = (a: Sequences, b: Sequences): Sequences =>
  retype(
    Array.from({ length: TURNS }, (__, index) => {
      const i = index as SequencesIndex;
      return Math.random() < 0.5 ? a[i] : b[i];
    }),
  );

/**
 * Sequence the source.
 * @param source The source sequences.
 * @returns The result of the sequences.
 */
export const sequence = (source: Sequences): SequenceResult =>
  source.reduce<SequenceResult>(
    ({ cells, score }, cur) => {
      const b = cells.at(-1)!;
      const a = move({ cells: b, ...cur });
      return { cells: [...cells, a], score: score + evaluate(b, a) };
    },
    { cells: [initializedCells], score: 0 },
  );
