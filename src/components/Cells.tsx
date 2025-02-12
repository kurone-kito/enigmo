import { Box } from 'ink';
import type { FC } from 'react';
import type { Cells as CellsType } from '../entities/types.mjs';
import { Cell } from './Cell.js';

/** The properties of the component. */
export interface CellsProps {
  readonly cells: CellsType;
}

/**
 * The cells component.
 * @param props The properties.
 * @returns The component.
 */
export const Cells: FC<CellsProps> = ({ cells }) => (
  <Box flexWrap="wrap" width={9}>
    {cells.map((cell, index) => (
      <Cell key={index} {...cell}></Cell>
    ))}
  </Box>
);
