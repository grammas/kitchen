import React from 'react';
import { connect } from 'react-redux';
import { AppPage, AppState, AppUrls } from '../app';
import { Button, Heading } from '../components';
import { User } from '../store/users';

interface Props {
  user?: User;
}

class WelcomePage extends React.Component<Props> {
  render() {
    return (
      <AppPage title={<Heading weight="heavy">Welcome to Gramma's Kitchen</Heading>}>
        <Button
          as="Link"
          to={AppUrls.home}
          size="tera"
          color="primary"
          radius="mega"
          shape="rounded"
          variant="floating"
          width="femto"
        >
          Come on in!
        </Button>
      </AppPage>
    );
  }
}

const mapStateToProps = ({ auth }: AppState) => ({ user: auth.user });

export default connect(mapStateToProps)(WelcomePage);
