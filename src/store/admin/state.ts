import { Alert } from './types';

export default class {
  static NAMESPACE = 'admin';

  constructor(public working = 0, public alerts = [] as Alert[]) {}
}
