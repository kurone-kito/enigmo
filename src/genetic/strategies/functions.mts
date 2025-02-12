import type {
  CrossoverStrategyInterface,
  FitnessStrategyInterface,
  PopulateStrategyInterface,
} from 'genetic-search';
import {
  crossoverSequences,
  randomSequences,
} from '../../entities/sequences.mjs';
import type { Genome } from '../types.mjs';

/**
 * Crossover the genomes.
 * @param genome1 The first genome to crossover.
 * @param genome2 The second genome to crossover.
 * @param newGenomeId The new genome ID.
 * @returns The crossovered genome.
 */
export const cross: CrossoverStrategyInterface<Genome>['cross'] = (
  parents,
  newGenomeId,
) => ({
  id: newGenomeId,
  sequence: crossoverSequences(
    parents[0]?.sequence || randomSequences(),
    parents[1]?.sequence || randomSequences(),
  ),
});

/**
 * Generate a population of the given size.
 * @param length The size of the population to generate.
 * @param idGenerator The ID generator to use for generating IDs of the genomes.
 */
export const populate: PopulateStrategyInterface<Genome>['populate'] = (
  length,
  idGenerator,
) =>
  Array.from<undefined, Genome>({ length }, () => ({
    id: idGenerator.nextId(),
    sequence: randomSequences(),
  }));

/**
 * Score a population.
 * @param results The results of the phenome collection.
 * @returns The scores of the population.
 */
export const score: FitnessStrategyInterface['score'] = (results) =>
  results.map((result) => result[0] ?? 0);
