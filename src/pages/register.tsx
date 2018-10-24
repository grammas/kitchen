import React from 'react';

import { AppPage } from '../app';
import { Form, FormGroup, FormControl, FormLabel, FormInput } from '../components';
import { emailValidator, passwordValidator, confirmPasswordValidator } from '../validators';

interface Props {
  register: (email: string, password: string) => Promise<any>;
  urls: {
    login: string;
    confirm: string;
  };
}

const RegisterPage = ({ register, urls }: Props) => (
  <AppPage
    menu={[
      { type: 'link', display: 'login', to: urls.login },
      { type: 'link', display: 'confirm email', to: urls.confirm },
    ]}
    title="Register"
  >
    <Form
      initialForm={{ email: '', password: '', confirmPassword: '' }}
      onSubmit={({ data: { email, password }, reset }) =>
        register(email, password)
          .then(() => urls.login)
          .catch(() => reset({ email, password, confirmPassword: '' }))
      }
      validation={{
        email: { isValid: emailValidator() },
        password: { isValid: passwordValidator() },
        confirmPassword: { isValid: confirmPasswordValidator() },
      }}
      footer={{
        align: 'center',
        primary: { label: 'Register', variant: 'floating' },
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

export default RegisterPage;
