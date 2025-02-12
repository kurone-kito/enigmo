import type { FC } from 'react';
import type { Cell as CellProps } from '../entities/types.mjs';
import { Special } from './Special.js';
import { Wall } from './Wall.js';

export type { CellProps };

/**
 * The cell component.
 * @param props The properties.
 * @returns The component.
 */
export const Cell: FC<CellProps> = (props) => (
  <>
    {props.type === 'special' && <Special {...props} />}
    {props.type === 'wall' && <Wall {...props} />}
  </>
);
