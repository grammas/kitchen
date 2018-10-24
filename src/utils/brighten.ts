import chroma from 'chroma-js';

export default (color: string, opacity: number) =>
  chroma(color)
    .brighten(opacity)
    .css();
