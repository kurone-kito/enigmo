import { describe, expectTypeOf, it } from 'vitest';
import type { ArrayIndex } from './types.mjs';

describe('ArrayIndex', () => {
  it('should infer the index of the array', () => {
    expectTypeOf<ArrayIndex<[1, 2, 3]>>().toEqualTypeOf<0 | 1 | 2>;
  });
});
