import { Action, ActionStatus } from './action';

export const actionType = (namespace: string, type: string) => `${namespace}: ${type}`;

export default class<TYPE extends string, STATUS extends ActionStatus, ARGS extends any[], PAYLOAD, META extends {}> {
  constructor(
    private namespace: string,
    public type: TYPE,
    private status: STATUS,
    private payloadCreator: (...args: ARGS) => PAYLOAD,
    private metaCreator: () => META
  ) {}

  public action = (...args: ARGS) => {
    return {
      type: actionType(this.namespace, this.type) as TYPE,
      status: this.status as STATUS,
      payload: this.payloadCreator(...args),
      meta: this.metaCreator(),
    } as Action<TYPE, STATUS, PAYLOAD, META>;
  };
}
