import type { BaseGenome } from 'genetic-search';
import type { ReadonlyTuple } from 'type-fest';
import type { TURNS } from '../constants.mjs';
import type { Sequence } from '../entities/sequence.mjs';

/** Type definition that the genome. */
export interface Genome extends BaseGenome {
  /** The sequence of the genome. */
  readonly sequence: ReadonlyTuple<Sequence, typeof TURNS>;
}

/** Type definition that the task configuration. */
export type TaskConfig = ReadonlyTuple<number, 1>;
