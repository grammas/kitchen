import { Dispatch } from 'redux';

import { AppContext, AppState } from '../../app';

import ActionCreator from './action_creator';
import ActionCoordinator from './coordinator';
import ThunkCreator, { OnSuccessHandler } from './thunk_creator';

export interface ActionFactory<LOCAL_STATE extends {}> {
  withType: <TYPE extends string>(
    type: TYPE
  ) => {
    withoutPayload: <META = {}>(
      metaCreator?: () => META
    ) => ActionCoordinator<LOCAL_STATE, ActionCreator<TYPE, '', [], {}, META>>;
    withPayload: <PAYLOAD, META = {}>(
      metaCreator?: () => META
    ) => ActionCoordinator<LOCAL_STATE, ActionCreator<TYPE, '', [PAYLOAD], PAYLOAD, META>>;
    withArgs: <ARGS extends any[], PAYLOAD, META = {}>(
      payloadCreator: (...args: ARGS) => PAYLOAD,
      metaCreator?: () => META
    ) => ActionCoordinator<LOCAL_STATE, ActionCreator<TYPE, '', ARGS, PAYLOAD, META>>;
    asThunk: <ARGS extends any[], PAYLOAD>(
      asyncAction: (
        ...args: ARGS
      ) => (dispatch: Dispatch<any>, getState: () => any, stitch: AppContext) => PAYLOAD | Promise<PAYLOAD>,
      onSuccess?: OnSuccessHandler<ARGS, PAYLOAD>
    ) => ActionCoordinator<LOCAL_STATE, ThunkCreator<TYPE, ARGS, PAYLOAD, any, AppContext>>;
  };
}

export default () => ({
  forNamespace: <LOCAL_STATE extends {}>(namespace: string): ActionFactory<LOCAL_STATE> => ({
    withType: <TYPE extends string>(type: TYPE) => ({
      withoutPayload: <META = {}>(metaCreator: () => META = () => ({} as META)) => {
        const actionCreator = new ActionCreator<TYPE, '', [], {}, META>(namespace, type, '', () => ({}), metaCreator);
        return new ActionCoordinator<LOCAL_STATE, typeof actionCreator>(actionCreator);
      },

      withPayload: <PAYLOAD, META = {}>(metaCreator: () => META = () => ({} as META)) => {
        const actionCreator = new ActionCreator<TYPE, '', [PAYLOAD], PAYLOAD, META>(
          namespace,
          type,
          '',
          payload => payload,
          metaCreator
        );
        return new ActionCoordinator<LOCAL_STATE, typeof actionCreator>(actionCreator);
      },

      withArgs: <ARGS extends any[], PAYLOAD, META = {}>(
        payloadCreator: (...args: ARGS) => PAYLOAD,
        metaCreator: () => META = () => ({} as META)
      ) => {
        const actionCreator = new ActionCreator<TYPE, '', ARGS, PAYLOAD, META>(
          namespace,
          type,
          '',
          payloadCreator,
          metaCreator
        );
        return new ActionCoordinator<LOCAL_STATE, typeof actionCreator>(actionCreator);
      },

      asThunk: <ARGS extends any[], PAYLOAD>(
        asyncAction: (
          ...args: ARGS
        ) => (dispatch: Dispatch<any>, getState: () => AppState, stitch: AppContext) => PAYLOAD | Promise<PAYLOAD>,
        onSuccess?: OnSuccessHandler<ARGS, PAYLOAD>
      ) => {
        const thunkCreator = new ThunkCreator<TYPE, ARGS, PAYLOAD, AppState, AppContext>(
          namespace,
          type,
          asyncAction,
          onSuccess
        );
        return new ActionCoordinator<LOCAL_STATE, typeof thunkCreator>(thunkCreator);
      },
    }),
  }),
});
