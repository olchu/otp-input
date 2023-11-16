// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const throttle = <U extends any[], T extends (...args: U) => void>(
  fn: T,
  ms = 1000
): T => {
  let timeout: ReturnType<typeof setTimeout> | null;
  let _args: U;
  let previous = 0;

  const later = () => {
    previous = Date.now();
    timeout = null;
    fn(..._args);
  };

  return ((...args: U): void => {
    const now = Date.now();
    const remaining = ms - (now - previous);
    _args = args;

    if (remaining <= 0 || remaining > ms) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      fn(..._args);
      previous = now;
    } else if (!timeout) {
      timeout = setTimeout(later, remaining);
    }
  }) as T;
};
