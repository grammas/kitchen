import { Theme } from '../themes';

export default <ARGS extends any[] = []>(arg: (theme: Theme, ...args: ARGS) => {}) => arg;
