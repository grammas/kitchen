import { Status } from '../../themes';

export type FormStrings<T extends {}, K extends keyof T> = Partial<{ [key in K]: string }>;
export type FormBooleans<T extends {}, K extends keyof T> = Partial<{ [key in K]: boolean }>;
export type FormStatuses<T extends {}, K extends keyof T> = Partial<{ [key in K]: AppStatus }>;

type FieldCleanChecker<T extends {}, K extends keyof T> = (value: T[K], clean: T[K]) => boolean;
type FieldValidChecker<T extends {}, K extends keyof T> = (
  value: T[K],
  data: T
) => undefined | AppStatus | Promise<AppStatus>;

export interface Validator<T extends {}, K extends keyof T> {
  isClean?: FieldCleanChecker<T, K>;
  isValid?: FieldValidChecker<T, K>;
}

export type ValidationSchema<T extends {}> = Partial<{ [key in keyof T]: Validator<T, key> }>;

export interface FormState<T> {
  meta: {
    pristine: boolean;
    redirectTo?: string;
    submitting: boolean;
  };
  clean: T;
  data: T;
  statuses: FormStatuses<T, keyof T>;
  dirty: FormBooleans<T, keyof T>;
  errors: FormStrings<T, keyof T>;
  touched: FormBooleans<T, keyof T>;
}

export type Element = 'input' | 'textarea';

export type Size = 'xs' | 's' | 'm' | 'l' | 'stretch';

export interface AppStatus {
  type: Status;
  hint?: string;
}
