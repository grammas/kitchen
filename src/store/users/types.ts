import { BSON } from 'mongodb-stitch-browser-sdk';

import { BaseCrudState } from '../../stitch';

export type UserActivityType = 'create' | 'login' | 'delete';

export interface UserActivity {
  type: UserActivityType;
  time: Date;
}

export type UserType = 'user' | 'admin' | 'me';

interface User {
  _id: BSON.ObjectId;
  type: UserType;
  email: string;
  name: string;
  firstName: string;
  lastName: string;
  familyId: string;
  activity: UserActivity[];
}

class State extends BaseCrudState<User> {
  static NAMESPACE = 'users';
}

const getUserId = (user: User): string =>
  user._id ? (typeof user._id === 'string' ? user._id : user._id.toHexString()) : undefined;

export { State, User, getUserId };
