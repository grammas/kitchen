export interface AnyAction {
  type: any;
}

export type ActionStatus = '' | 'starting' | 'success' | 'error' | 'finished';

export interface Action<TYPE extends string, STATUS extends ActionStatus, PAYLOAD, META extends {}> {
  type: TYPE;
  status: STATUS;
  payload: PAYLOAD;
  meta: META;
}
