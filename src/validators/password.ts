import { dangerStatus } from './utils';

const CAPITAL_REGEX = /[A-Z]/;
const NUMBER_REGEX = /[0-9]/;

interface Options {
  forceCapital?: boolean;
  forceNumber?: boolean;
  minLength?: number;
}

export default ({ forceCapital = false, forceNumber = false, minLength = 6 }: Options = {}) => (value?: string) => {
  if (!value) {
    return dangerStatus('please enter your password');
  }
  if (value.length < minLength) {
    return dangerStatus(`please provide a password that is at least ${minLength} characters long`);
  }
  if (forceCapital && !CAPITAL_REGEX.test(value)) {
    return dangerStatus('please provide a password with at least one capital letter in it');
  }
  if (forceNumber && !NUMBER_REGEX.test(value)) {
    return dangerStatus('please provide a password with at least one number in it');
  }
  return
};
