import type { Vector } from '../utils/vector.mjs';
import type { Target } from './types.mjs';

/** Type definition that the sequence. */
export interface Sequence {
  /** The target to move. */
  readonly target: Target;

  /** The vector to move. */
  readonly vector: Vector;
}

/**
 * Generate a random sequence.
 * @param target The target to move.
 * @returns The generated sequence.
 */
export const randomSequence = (target: Target): Sequence =>
  Object.freeze<Sequence>({
    target,
    vector: Object.freeze<Vector>({
      dir: Math.random() < 0.5 ? 'x' : 'y',
      velocity: Math.random() < 0.5 ? -1 : 1,
    }),
  });

/**
 * Mutate the sequence.
 * @param source The source sequence to mutate.
 * @param threshold The threshold to mutate the sequence.
 * @returns The mutated sequence.
 */
export const mutateSequence = (source: Sequence, threshold = 0.8): Sequence =>
  Math.random() > threshold ? source : randomSequence(source.target);
