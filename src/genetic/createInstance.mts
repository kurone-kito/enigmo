import type { GeneticSearchConfig } from 'genetic-search';
import { GeneticSearch } from 'genetic-search';
import { createStrategies } from './strategies/index.mjs';

/** The genetic search configuration. */
const config: GeneticSearchConfig = {
  crossoverRate: 0.5,
  populationSize: 200,
  survivalRate: 0.5,
};

/**
 * Create the genetic search instance.
 * @returns The genetic search instance.
 */
export const createInstance = () =>
  new GeneticSearch(config, createStrategies());
