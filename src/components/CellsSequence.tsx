import type { FC } from 'react';
import { useMemo } from 'react';
import type { Sequences } from '../entities/sequences.mjs';
import { sequence } from '../entities/sequences.mjs';
import { useCellsSequence } from '../hooks/useCellsSequence.mjs';
import { Cells } from './Cells.js';

/** The properties of the component. */
export interface CellsSequenceProps {
  /** The frames of the cells. */
  readonly sequences: Sequences;
}

/**
 * The cells sequence component.
 * @param props The properties.
 * @returns The component.
 */
export const CellsSequence: FC<CellsSequenceProps> = ({ sequences }) => {
  const frames = useMemo(() => sequence(sequences).cells, [sequences]);
  const cells = useCellsSequence(frames);
  return <Cells cells={cells} />;
};
