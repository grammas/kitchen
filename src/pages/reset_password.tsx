import React from 'react';
import queryString from 'query-string';

import { AppPage } from '../app';
import { Form, FormGroup, FormControl, FormLabel, FormInput } from '../components';
import { confirmPasswordValidator, passwordValidator } from '../validators';

interface Props {
  resetPassword: (token: string, tokenId: string, password: string) => Promise<any>;
  search?: string;
  urls: {
    home: string;
  };
}

const parse = (search?: string) => {
  if (!search) {
    return;
  }
  const { token, tokenId } = queryString.parse(search);

  return { token: token as string, tokenId: tokenId as string };
};

const ResetPasswordPage = ({ resetPassword, search, urls }: Props) => (
  <AppPage menu={[{ type: 'link', display: 'home', to: urls.home }]} title="Reset your password">
    <Form
      initialForm={{ password: '', confirmPassword: '' }}
      onSubmit={({ data: { password }, reset }) => {
        const data = parse(search);
        if (data) {
          return resetPassword(data.token, data.tokenId, password)
            .then(() => urls.home)
            .catch(() => reset({ password, confirmPassword: '' }));
        }
        return
      }}
      validation={{
        password: { isValid: passwordValidator() },
        confirmPassword: { isValid: confirmPasswordValidator() },
      }}
      footer={{
        align: 'center',
        primary: { label: 'Submit', variant: 'floating' },
      }}
    >
      {({ data, statuses, setFormField, validate }) => (
        <FormGroup>
          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <FormInput
              id="password"
              type="password"
              value={data.password}
              onBlur={() => validate('password')}
              onChange={({ target: { value } }) => setFormField('password', value)}
              status={statuses.password}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
            <FormInput
              id="confirmPassword"
              type="password"
              value={data.confirmPassword}
              onBlur={() => validate('confirmPassword')}
              onChange={({ target: { value } }) => setFormField('confirmPassword', value)}
              status={statuses.confirmPassword}
            />
          </FormControl>
        </FormGroup>
      )}
    </Form>
  </AppPage>
);

export default ResetPasswordPage;
