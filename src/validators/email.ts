import { dangerStatus } from './utils';

const EMAIL_REGEX = /^\S+@\S+$/;

export default (regex = EMAIL_REGEX) => (value?: string) => {
  if (!value) {
    return dangerStatus('please enter your email address');
  }
  if (!regex.test(value)) {
    return dangerStatus('please provide a valid email address');
  }
  return
};
