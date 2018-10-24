import { RouterActionType, RouterState } from 'connected-react-router';

interface Location {
  pathname?: string;
  search?: string;
  state?: object;
  hash?: string;
}

export default class implements RouterState {
  static NAMESPACE = 'router';

  public location: RouterState['location'];

  constructor(
    { pathname = '', search = '', state = {}, hash = '' }: Location,
    public action = 'PUSH' as RouterActionType
  ) {
    this.location = { pathname, search, state, hash };
  }
}
