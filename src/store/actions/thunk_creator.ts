import { Dispatch } from 'redux';

import { actions as adminActions, AlertParams, AlertOptions } from '../admin';

import ActionCreator from './action_creator';
import { ActionStatus } from './action';

type AlertMessageAndOptions = { message: string } & AlertOptions;

export type OnSuccessHandler<ARGS extends any[], PAYLOAD> =
  | string
  | AlertMessageAndOptions
  | ((context: { args: ARGS; payload: PAYLOAD }) => string | AlertMessageAndOptions);

const buildSuccessAlert = <ARGS extends any[], PAYLOAD>(
  args: ARGS,
  payload: PAYLOAD,
  onSuccess: OnSuccessHandler<ARGS, PAYLOAD>
): AlertParams => {
  const params: AlertParams = ['success', '', {}];
  if (typeof onSuccess === 'string' || typeof onSuccess === 'object') {
    const parsed = parseStringOrOptions(onSuccess);
    if (parsed) {
      const [message, options] = parsed;
      params[1] = message;
      params[2] = options;
    }
    return params;
  }
  const parsed = parseStringOrOptions(onSuccess({ args, payload }));
  if (parsed) {
    const [message, options] = parsed;
    params[1] = message;
    params[2] = options;
  }
  return params;
};

const parseStringOrOptions = (onSuccess: string | AlertMessageAndOptions): [string, AlertOptions] | undefined => {
  if (typeof onSuccess === 'string') {
    return [onSuccess, { displayForMillis: 3000 }];
  } else if (typeof onSuccess === 'object') {
    const { message, ...options } = onSuccess;
    return [message, options];
  }
  return;
};

export default class<TYPE extends string, ARGS extends any[], PAYLOAD, STATE extends {}, ARG extends {}> {
  constructor(
    private namespace: string,
    public type: TYPE,
    private asyncAction: (
      ...args: ARGS
    ) => (dispatch: Dispatch<any>, getState: () => STATE, arg: ARG) => PAYLOAD | Promise<PAYLOAD>,
    private onSuccess?: OnSuccessHandler<ARGS, PAYLOAD>
  ) {}

  public worker = (...args: ARGS) => {
    return async (dispatch: Dispatch<any>, getState: () => STATE, arg: ARG) => {
      dispatch(adminActions.startWork.creator.action());
      dispatch(this.action('starting', {}, ...args));
      try {
        const payload = await Promise.resolve(this.asyncAction(...args)(dispatch, getState, arg));
        dispatch(this.action('success', { payload }, ...args));
        if (this.onSuccess) {
          dispatch(adminActions.addAlert.creator.action(...buildSuccessAlert(args, payload, this.onSuccess)));
        }
        return payload;
      } catch (err) {
        dispatch(this.action('error', { err }, ...args));
        dispatch(adminActions.addAlert.creator.action('danger', `${err.name}: ${err.message}`, { dismissable: true }));
        throw err;
      } finally {
        dispatch(this.action('finished', {}, ...args));
        dispatch(adminActions.endWork.creator.action());
      }
    };
  };

  public action = (stage: ActionStatus, { payload, err }: { payload?: PAYLOAD; err?: Error }, ...args: ARGS) => {
    switch (stage) {
      case 'starting':
        return this.actionOnStart(...args);
      case 'success':
        return this.actionOnSuccess(payload!, ...args);
      case 'error':
        return this.actionOnError(err!, ...args);
      case 'finished':
        return this.actionOnFinish(...args);
    }
    throw new Error(`unrecognized async stage: ${stage}`);
  };

  private actionOnStart = (...args: ARGS) => {
    return new ActionCreator(
      this.namespace,
      this.type,
      'starting',
      () => void 0,
      () => ({ args, time: Date.now() })
    ).action();
  };

  private actionOnSuccess = (payload: PAYLOAD, ...args: ARGS) => {
    return new ActionCreator(
      this.namespace,
      this.type,
      'success',
      (payload: PAYLOAD) => payload,
      () => ({ args, time: Date.now() })
    ).action(payload);
  };

  private actionOnError = (err: Error, ...args: ARGS) => {
    return new ActionCreator(
      this.namespace,
      this.type,
      'error',
      (payload: Error) => payload,
      () => ({ args, time: Date.now() })
    ).action(err);
  };

  private actionOnFinish = (...args: ARGS) => {
    return new ActionCreator(
      this.namespace,
      this.type,
      'finished',
      () => void 0,
      () => ({ args, time: Date.now() })
    ).action();
  };
}
