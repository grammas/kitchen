import React from 'react';
import { connect } from 'react-redux';
import { AppPage, AppState, AppUrls } from '../app';
import { Eye, HomePageMission, HomePagePortal, HomePageChangelog, Terminal, Todo } from '../components';
import { User } from '../store/users';

interface Props {
  user?: User;
}

type View = 'mission' | 'portal' | 'changelog';

const defaultState = {
  view: 'mission' as View,
};
type State = typeof defaultState;

class HomePage extends React.Component<Props, State> {
  readonly state = defaultState;

  setView = (view: View = 'mission') => this.setState(() => ({ view }));

  render() {
    const { user } = this.props;
    const { view } = this.state;
    return (
      <AppPage
        menu={[
          { type: 'view', view: 'mission', display: <Eye /> },
          { type: 'view', view: 'portal', display: <Terminal /> },
          { type: 'view', view: 'changelog', display: <Todo /> },
        ]}
        activeView={view}
        setView={this.setView}
      >
        {view === 'mission' && (
          <HomePageMission viewChangelog={() => this.setView('changelog')} viewPortal={() => this.setView('portal')} />
        )}
        {view === 'portal' && (
          <HomePagePortal urls={{ recipes: AppUrls.recipes.list, users: AppUrls.users.list }} user={user} />
        )}
        {view === 'changelog' && <HomePageChangelog />}
      </AppPage>
    );
  }
}

const mapStateToProps = ({ auth }: AppState) => ({ user: auth.user });

export default connect(mapStateToProps)(HomePage);
