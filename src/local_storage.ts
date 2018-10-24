export const KEY = `grammas-kitchen-${process.env.NODE_ENV}`;

export default {
  read: (key: string) => {
    try {
      const state = localStorage.getItem(key);
      if (state === null) {
        return {};
      }
      return JSON.parse(state);
    } catch (err) {
      return {};
    }
  },
  write: (key: string, state: any) => {
    try {
      const serialized = JSON.stringify(state);
      localStorage.setItem(key, serialized);
    } catch (err) {}
  },
};
