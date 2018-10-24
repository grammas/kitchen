import { Reducer } from 'redux';

import { ActionTypes } from '../actions/action_types';
import makesSliceReducer from '../reducers/slice';

import * as actions from './actions';
import State from './state';

const reducer: Reducer<State, ActionTypes<typeof actions>> = makesSliceReducer(State.NAMESPACE, new State(), actions);
export default reducer;
