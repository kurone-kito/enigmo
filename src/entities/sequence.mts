import type { Vector } from '../utils/vector.mjs';
import type { MoveMode, Target } from './types.mjs';

/** Type definition that the sequence. */
export interface Sequence {
  /** The mode of the move. */
  readonly mode: MoveMode;

  /** The target to move. */
  readonly target: Target;

  /** The vector to move. */
  readonly vector: Vector;
}

/**
 * Generate a random sequence.
 * @param partial The sequence partial to generate.
 * @returns The generated sequence.
 */
export const randomSequence = (
  partial: Pick<Sequence, 'mode' | 'target'>,
): Sequence =>
  Object.freeze<Sequence>({
    ...partial,
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
  Math.random() > threshold ? source : randomSequence(source);
