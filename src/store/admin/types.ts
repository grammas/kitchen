import { BSON } from 'mongodb-stitch-browser-sdk';

import { AnyAction } from '../actions';

export type AlertType = 'success' | 'warning' | 'danger' | 'info' | 'debug';

export interface AlertOptions {
  dismissable?: boolean;
  displayForMillis?: number;
  key?: string;
}

export type AlertParams = [AlertType, string, AlertOptions];

export interface AdminActions {
  addAlert: (...args: AlertParams) => AnyAction;
  startWork: () => AnyAction;
  endWork: () => AnyAction;
}

export const Alert = (...[type, message, { dismissable, displayForMillis, key }]: AlertParams) => ({
  key: key || new BSON.ObjectId().toHexString(),
  type,
  message,
  dismissable,
  displayForMillis,
});
export interface Alert extends ReturnType<typeof Alert> {}
