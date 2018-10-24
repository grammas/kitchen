import React from 'react';

import { AppPage } from '../app';
import { Form, FormGroup, FormControl, FormLabel, FormInput } from '../components';
import { User } from '../store/users';
import { emailValidator } from '../validators';

interface Props {
  sendPasswordReset: (email: string) => Promise<any>;
  urls: {
    login: string;
    register: string;
  };
  user?: User;
}

const PasswordResetPage = ({ sendPasswordReset, urls, user }: Props) => (
  <AppPage
    menu={[
      { type: 'link', display: 'login', to: urls.login },
      { type: 'link', display: 'register', to: urls.register },
    ]}
    title="Reset Your Password"
  >
    <Form
      initialForm={{ email: user ? user.email : '' }}
      onSubmit={({ data: { email } }) => sendPasswordReset(email).then(() => urls.login)}
      validation={{ email: { isValid: emailValidator() } }}
      footer={{
        align: 'center',
        primary: { label: 'Submit', variant: 'floating' },
      }}
    >
      {({ data, statuses, setFormField, validate }) => (
        <FormGroup>
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput
              id="email"
              type="email"
              placeholder="abigail@gmail.com"
              value={data.email}
              onBlur={() => validate('email')}
              onChange={({ target: { value } }) => setFormField('email', value)}
              status={statuses.email}
            />
          </FormControl>
        </FormGroup>
      )}
    </Form>
  </AppPage>
);

export default PasswordResetPage;
