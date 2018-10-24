import { ValidationSchema } from './types';

export const isClean = <T extends {}, K extends keyof T>(
  key: K,
  value: T[K],
  clean: T,
  validation?: ValidationSchema<T>
) => {
  let isClean = (v: T[K], c: T[K]) => v === c;
  if (validation) {
    const validator = validation[key];
    if (validator && validator.isClean) {
      isClean = validator.isClean;
    }
  }
  return isClean(value, clean[key]);
};
