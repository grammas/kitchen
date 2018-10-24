import { Status } from '../status';

export type PriorityColor = 'primary' | 'secondary' | 'natural';

export type Monochrome = 'white' | 'light' | 'dark' | 'shadow' | 'black';

export type StandardColor = 'neutral' | 'green' | 'blue' | 'red' | 'yellow' | 'orange' | 'yellow' | 'purple';

export type Shade = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type Color = Monochrome | StandardColor | PriorityColor | Status;

export interface Coloring {
  shade?: Shade;
  transparency?: number;
}
