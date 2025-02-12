import type { GeneticSearchStrategyConfig } from 'genetic-search';
import {
  SimplePhenomeCache,
  DescendingSortingStrategy,
  RandomSelectionStrategy,
} from 'genetic-search';
import { sequence } from '../../entities/sequences.mjs';
import type { Genome } from '../types.mjs';
import { MutationStrategy, PhenomeStrategy } from './classes.mjs';
import { cross, populate, score } from './functions.mjs';

/**
 * create the strategies.
 * @returns The strategies.
 */
export const createStrategies = (): GeneticSearchStrategyConfig<Genome> => ({
  cache: new SimplePhenomeCache(),
  crossover: { cross },
  fitness: { score },
  mutation: new MutationStrategy(),
  phenome: new PhenomeStrategy({ task: async (seq) => [sequence(seq).score] }),
  populate: { populate },
  selection: new RandomSelectionStrategy(2),
  sorting: new DescendingSortingStrategy(),
});
