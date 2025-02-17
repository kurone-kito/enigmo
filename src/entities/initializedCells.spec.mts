import { describe, expect, it } from 'vitest';
import { initializedCells } from './initializedCells.mjs';

describe('initializedCells', () => {
  it('should be initialized', () => expect(initializedCells).toMatchSnapshot());
});
