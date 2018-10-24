import { warningStatus } from './utils';

export default () => (value?: string, { password }: { password?: string } = {}) => {
  if (value !== password) {
    return warningStatus('the passwords do not match');
  }
  return
};
