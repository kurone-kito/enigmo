import { Text } from 'ink';
import type { FC } from 'react';
import { SPECIALS } from '../constants.mjs';
import type { Special as Props } from '../entities/types.mjs';

/** The properties of the component. */
export type WallProps = Pick<Props, 'sIndex'>;

/**
 * The special component.
 * @param props The properties.
 * @returns The component.
 */
export const Special: FC<WallProps> = ({ sIndex }) => (
  <Text color="grey">{SPECIALS[sIndex]}</Text>
);
