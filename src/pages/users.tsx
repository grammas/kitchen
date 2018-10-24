import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Location } from 'history';
import { AppPage, AppState, AppUrls } from '../app';
import { FileCabinet, Id, UsersPageList, UsersPageProfile } from '../components';
import { actions as routerActions } from '../store/router';
import { find as findUsers, update as updateUsers, User, getUserId } from '../store/users';

const PATH_PREFIX = '/users/';

interface Props {
  location: Location;
  user?: User;
  users: { [key: string]: User };
  goto: (path: string) => void;
  listUsers: () => Promise<User[]>;
  updateUser: (filter: {}, update: {}, options: {}) => Promise<void>;
}

type View = 'list' | 'single';

const initialState = {
  view: 'list' as View,
};
type State = typeof initialState;

class UsersPage extends React.Component<Props, State> {
  readonly state = initialState;

  componentDidMount() {
    this.props.listUsers();
  }

  setView = (view: View = 'list') => this.setState(() => ({ view }));

  render() {
    const { goto, location, user, users, updateUser } = this.props;
    const { view } = this.state;
    const viewUser = location.pathname.indexOf(PATH_PREFIX) >= 0;
    return (
      <AppPage
        menu={[
          { type: 'link', view: 'list', to: AppUrls.users.list, display: <FileCabinet /> },
          {
            type: 'link',
            view: 'single',
            to: user ? AppUrls.users.find(getUserId(user)) : AppUrls.users.list,
            display: <Id />,
          },
        ]}
        activeView={view}
        setView={this.setView}
      >
        {!viewUser && <UsersPageList user={user} users={users} goto={goto} />}
        {viewUser && <UsersPageProfile location={location} users={users} updateUser={updateUser} />}
      </AppPage>
    );
  }
}

const mapStateToProps = ({ auth, users, router }: AppState) => ({
  location: router.location,
  user: auth.user,
  users: users.db,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  goto: (path: string) => dispatch(routerActions.goto.creator.worker(path)),
  listUsers: () => dispatch(findUsers.creator.worker({})),
  updateUser: (filter: {}, update: {}, options: {}) => dispatch(updateUsers.creator.worker(filter, update, options)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersPage);
