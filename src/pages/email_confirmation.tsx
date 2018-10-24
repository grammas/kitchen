import React from 'react';

import { AppPage } from '../app';
import { Form, FormGroup, FormControl, FormLabel, FormInput } from '../components';
import { emailValidator } from '../validators';

interface Props {
  sendEmailConfirmation: (email: string) => Promise<any>;
  urls: {
    login: string;
    register: string;
  };
}

const EmailConfirmationPage = ({ sendEmailConfirmation, urls }: Props) => (
  <AppPage
    menu={[
      { type: 'link', display: 'login', to: urls.login },
      { type: 'link', display: 'register', to: urls.register },
    ]}
    title="Send Email Confirmation"
  >
    <Form
      initialForm={{ email: '' }}
      onSubmit={({ data: { email } }) => sendEmailConfirmation(email).then(() => urls.login)}
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
              placeholder="liam@gmail.com"
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

export default EmailConfirmationPage;
