import React from 'react';
import { Redirect } from 'react-router-dom';
import queryString from 'query-string';

import { AppPage } from '../app';
import { Text } from '../components';

interface Props {
  confirmEmail: (token: string, tokenId: string) => Promise<any>;
  search?: string;
  urls: {
    login: string;
  };
}

const parse = (search?: string) => {
  if (!search) {
    return;
  }
  const { token, tokenId } = queryString.parse(search);

  return { token: token as string, tokenId: tokenId as string };
};

const ConfirmEmailPage = ({ confirmEmail, search, urls }: Props) => {
  const data = parse(search);
  if (data) {
    confirmEmail(data.token, data.tokenId);
    return <Redirect to={urls.login} />;
  }
  return (
    <AppPage title="Confirming email...">
      <Text>
        Thank you for waiting while we confirm your email, you should be redirected to the login page momentarily.
      </Text>
    </AppPage>
  );
};

export default ConfirmEmailPage;
