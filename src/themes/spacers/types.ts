export type Size =
  | 'yocto'
  | 'zepto'
  | 'atto'
  | 'femto'
  | 'pico'
  | 'nano'
  | 'micro'
  | 'milli'
  | 'centi'
  | 'deci'
  | 'base'
  | 'deca'
  | 'hecto'
  | 'kilo'
  | 'mega'
  | 'giga'
  | 'tera'
  | 'peta'
  | 'exa'
  | 'zetta'
  | 'yotta';

  export type SizeMap = { [key in Size]: string };
