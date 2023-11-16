import { useState, ReactNode, useEffect } from 'react';

export const useDelayWithSkip = (
  newValue: string | ReactNode,
  timeout = 200
) => {
  const [value, setValue] = useState<string | ReactNode>('');

  useEffect(() => {
    setValue('');

    const timerId = setTimeout(() => {
      setValue(newValue);
    }, timeout);

    return () => {
      clearTimeout(timerId);
    };
  }, [newValue, timeout]);

  return [value, setValue];
};
