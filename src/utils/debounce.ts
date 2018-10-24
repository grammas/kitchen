export default (callback: (...args: any[]) => any, wait: number) => {
  let timeout: any = null;
  return (...args: any[]) => {
    const next = () => callback(...args);
    clearTimeout(timeout);
    timeout = setTimeout(next, wait);
  };
};
