import { User } from '../users';

export default class {
  static NAMESPACE = 'auth';

  constructor(public user: User | undefined = undefined) {}
}
