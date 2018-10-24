import { sliceReducer } from '../reducers';

import * as actions from './actions';
import State from './state';

export default sliceReducer(State.NAMESPACE, new State(), actions);
