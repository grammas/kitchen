import { AnyAction } from './action';

export type AnyActionCoordinator = ActionCoordinator<any, { action: any }>;

class ActionCoordinator<STATE extends {}, ACTION_CREATOR extends { action: any }> {
  public reducer: (state: STATE, action: ReturnType<ACTION_CREATOR['action']>) => STATE;

  constructor(public creator: ACTION_CREATOR) {
    this.reducer = (state, _action) => state;
  }

  public handleAction = (state: STATE, action: AnyAction) => {
    return this.reducer(state, action as ReturnType<ACTION_CREATOR['action']>);
  };

  public withReducer = (reducer: (state: STATE, action: ReturnType<ACTION_CREATOR['action']>) => STATE) => {
    this.reducer = reducer;
    return this;
  };
}

export default ActionCoordinator;
