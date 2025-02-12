/**
 * Returns the value of the first parameter modulo the second parameter.
 * @param from the value to be divided.
 * @param length the value to divide by.
 * @returns the value of the first parameter modulo the second parameter.
 */
export const repeat = (from: number, length: number): number =>
  from - Math.floor(from / length) * length;
