import { Text } from 'ink';
import type { FC } from 'react';
import { COLORS, WALLS } from '../constants.mjs';
import type { Wall as Props } from '../entities/types.mjs';

/** The properties of the component. */
export type WallProps = Pick<Props, 'cIndex' | 'wIndex'>;

/**
 * The wall component.
 * @param props The properties.
 * @returns The component.
 */
export const Wall: FC<WallProps> = ({ cIndex, wIndex }) => (
  <Text color={COLORS[cIndex]}>{WALLS[wIndex]}</Text>
);
