import React from 'react';

export const handlePreventDefault = (event: React.SyntheticEvent) => {
  if (typeof event.preventDefault === 'function') {
    event.preventDefault();
  }

  return event;
};

export const disableHandler = (
  handler: (
    e: React.MouseEvent<
      HTMLDivElement | HTMLButtonElement | HTMLAnchorElement,
      MouseEvent
    >
  ) => void,
  isDisabled: boolean
) => (isDisabled ? handlePreventDefault : handler);
