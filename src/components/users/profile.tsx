import React from 'react';
import { Location } from 'history';
import { Form, FormGroup, FormControl, FormLabel, FormInput } from '../form';
import { Spacing } from '../spacing';
import { User } from '../../store/users';
import { promiseCatcher } from '../../utils';

const PATH_PREFIX = '/users/';

const nameValidator = () => (value?: string) => {
  if (!value) {
    return { type: 'danger' as 'danger', hint: 'name cannot be blank' };
  }
  return;
};

interface Props {
  location: Location;
  users: { [key: string]: User };
  updateUser: (filter: {}, update: {}, options: {}) => Promise<void>;
}

const Portal = ({ location, users, updateUser }: Props) => {
  const user = users[location.pathname.substring(PATH_PREFIX.length)];
  if (!user) {
    return <div>loading...</div>;
  }
  return (
    <Spacing top size="micro">
      <Form
        initialForm={user}
        onSubmit={({ data, setPristine }) =>
          updateUser({ email: data.email }, data, {})
            .then(() => setPristine(true))
            .catch(promiseCatcher)
        }
        validation={{
          _id: {},
          type: {},
          email: {},
          name: { isValid: nameValidator() },
          firstName: {},
          lastName: {},
          familyId: {},
          activity: {},
        }}
        footer={{ primary: { label: 'Update' }, secondary: { label: 'Discard' } }}
      >
        {({ data, statuses, setFormField, validate }) => (
          <>
            <FormGroup inline>
              <FormControl>
                <FormLabel htmlFor="email">email</FormLabel>
                <FormInput
                  id="email"
                  type="email"
                  disabled
                  value={data.email}
                  onBlur={() => validate('email')}
                  onChange={({ target: { value } }) => setFormField('email', value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="username">username</FormLabel>
                <FormInput
                  id="username"
                  value={data.name}
                  onBlur={() => validate('name')}
                  onChange={({ target: { value } }) => setFormField('name', value)}
                  status={statuses.name}
                />
              </FormControl>
            </FormGroup>
            <FormGroup inline>
              <FormControl>
                <FormLabel htmlFor="firstName">first name</FormLabel>
                <FormInput
                  id="firstName"
                  value={data.firstName}
                  onBlur={() => validate('firstName')}
                  onChange={({ target: { value } }) => setFormField('firstName', value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="lastName">last name</FormLabel>
                <FormInput
                  id="lastName"
                  value={data.lastName}
                  onBlur={() => validate('lastName')}
                  onChange={({ target: { value } }) => setFormField('lastName', value)}
                />
              </FormControl>
            </FormGroup>
          </>
        )}
      </Form>
    </Spacing>
  );
};

export default Portal;
