import React from 'react';
import { connect } from 'react-redux';
import { Text } from '../components';
import { AppPage, AppState } from '../app';
import { User } from '../store/users';

interface Props {
  user?: User;
}

class AdminPage extends React.Component<Props> {
  render() {
    return (
      <AppPage title="admin page">
        <Text>i'm the admin page</Text>
      </AppPage>
    );
  }
}

const mapStateToProps = ({ auth }: AppState) => ({ user: auth.user });

export default connect(mapStateToProps)(AdminPage);
