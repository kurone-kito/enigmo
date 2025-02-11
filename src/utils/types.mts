import type { IntRange } from 'type-fest';

/**
 * Type definition that infers the index of the array.
 * @template T The array type.
 */
export type ArrayIndex<T extends readonly unknown[]> = IntRange<0, T['length']>;
