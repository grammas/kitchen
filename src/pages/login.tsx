import React from 'react';

import { AppPage } from '../app';
import { Form, FormGroup, FormControl, FormLabel, FormInput } from '../components';
import { emailValidator, passwordValidator } from '../validators';

interface Props {
  login: (email: string, password: string) => Promise<any>;
  urls: {
    register: string;
    confirm: string;
  };
}

const LoginPage = ({ login, urls }: Props) => (
  <AppPage
    menu={[
      { type: 'link', display: 'register', to: urls.register },
      { type: 'link', display: 'confirm email', to: urls.confirm },
    ]}
    title="login"
  >
    <Form
      initialForm={{ email: '', password: '' }}
      onSubmit={({ data: { email, password } }) => login(email, password)}
      validation={{
        email: { isValid: emailValidator() },
        password: { isValid: passwordValidator() },
      }}
      footer={{
        align: 'center',
        primary: { label: 'Login', variant: 'floating' },
      }}
    >
      {({ data, statuses, setFormField, validate }) => (
        <FormGroup>
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput
              id="email"
              type="email"
              placeholder="liam@gmail.com"
              value={data.email}
              onBlur={() => validate('email')}
              onChange={({ target: { value } }) => setFormField('email', value)}
              status={statuses.email}
            />
          </FormControl>
          <FormControl size="l">
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
        </FormGroup>
      )}
    </Form>
  </AppPage>
);

export default LoginPage;
