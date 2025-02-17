import type {
  BaseMutationStrategyConfig,
  PhenomeStrategyConfig,
} from 'genetic-search';
import { BaseMutationStrategy, BasePhenomeStrategy } from 'genetic-search';
import {
  BaseMultiprocessingPhenomeStrategy,
  MultiprocessingPhenomeStrategyConfig,
} from 'genetic-search-multiprocess';
import type { Sequences } from '../../entities/sequences.mjs';
import { mutateSequences } from '../../entities/sequences.mjs';
import type { Genome } from '../types.mjs';

/** The multiprocessing phenome strategy to process phenomes. */
export class MultiprocessingPhenomeStrategy extends BaseMultiprocessingPhenomeStrategy<
  Genome,
  MultiprocessingPhenomeStrategyConfig<Sequences>,
  Sequences
> {
  /**
   * Create the task input from the genome.
   * @param genome The genome to create the task input from.
   * @returns The task input.
   */
  protected override createTaskInput = (genome: Genome): Sequences =>
    genome.sequence;
}

/** The phenome strategy to process phenomes. */
export class PhenomeStrategy extends BasePhenomeStrategy<
  Genome,
  PhenomeStrategyConfig<Sequences>,
  Sequences
> {
  /**
   * Create the task input from the genome.
   * @param genome The genome to create the task input from.
   * @returns The task input.
   */
  protected override createTaskInput = (genome: Genome): Sequences =>
    genome.sequence;
}

/** The mutation strategy to mutate a genome. */
export class MutationStrategy extends BaseMutationStrategy<
  Genome,
  BaseMutationStrategyConfig
> {
  /** Create a new mutation strategy. */
  public constructor() {
    super({ probability: 1 });
  }

  /**
   * Mutate the genome.
   * @param genome The genome to mutate.
   * @param newGenomeId The new genome ID.
   * @returns The mutated genome.
   */
  public override mutate = (genome: Genome, newGenomeId: number): Genome => ({
    id: newGenomeId,
    sequence: mutateSequences(genome.sequence),
  });
}
