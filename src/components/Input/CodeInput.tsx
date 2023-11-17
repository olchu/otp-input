/* eslint-disable @typescript-eslint/no-empty-function */
import React, {
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
  ClipboardEvent,
} from 'react';

import { useReadOtp } from '../../hooks/useReadOtp';
import {
  CodeInputContainer,
  CodeInputDescriptionStyled,
  CodeInputErrorStyled,
  CodeInputLabelStyled,
  CodeInputStyled,
  WrapCodeInputStyled,
} from './CodeInputStyled';

const replaceAt = (
  value: string,
  index: number,
  replacement: string
): string => {
  const paddedValue = value.padEnd(Math.max(index + 1, value.length));
  return `${paddedValue.substring(
    0,
    index
  )}${replacement}${paddedValue.substring(
    index + 1,
    paddedValue.length
  )}`.replace(/\s+$/g, '');
};

const BACKSPACE_KEY_CODE = 8;
const ENTER_KEY_CODE = 46;
const LEFT_ARROW_KEY_CODE = 37;
const RIGHT_ARROW_KEY_CODE = 39;

type ActionPosition = 'top' | 'bottom';

export interface CodeInputProps {
  onChange: (arg0: string) => void;
  onComplete: () => void;
  onBlur?: (arg0?: React.SyntheticEvent<HTMLInputElement>) => void;
  name: string;
  value: string;
  label: string;
  inputCount?: number;
  focusOnInit?: boolean;
  disabled?: boolean;
  error?: string | null;
  description?: string | React.ReactNode;
  action?: React.ReactNode;
  actionPosition?: ActionPosition;
  autoComplete?: string;
  webOtpApiEnabled?: boolean;
  isTimerAlmostOver?: boolean;
  isSubmiting?: boolean;
  className?: string;
}

export const CodeInput = ({
  onChange,
  onComplete = () => {},
  onBlur = () => {},
  name,
  value,
  label,
  inputCount = 5,
  disabled = false,
  focusOnInit = true,
  error = '',
  description,
  autoComplete = 'off',
  webOtpApiEnabled = false,
  isTimerAlmostOver = false,
  isSubmiting = false,
  className,
}: CodeInputProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFocusable, setIsFocusabe] = useState(
    Array.from({ length: inputCount }).map(() => false)
  );
  const inputs = useRef<Array<HTMLInputElement | null>>([]);

  const handleOnComplite = useCallback(
    (value: string): void => {
      if (value?.replace(/\s+/g, '')?.length === inputCount) {
        onComplete();
      }
    },
    [onComplete, inputCount]
  );

  const handleInputChange = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      console.log('*********************');
      console.log('currentIndex', currentIndex);
      console.log('target.value', target.value);
      let newChar = target.value.replace(/\s/g, '');
      // newChar = newChar.substring(newChar.length - 1, 1);
      console.log('after substring', newChar);
      
      if (/\d/g.test(newChar)) {
        const outputValue = replaceAt(value, currentIndex, newChar);
        console.log('outputValue', outputValue);
        
        onChange(outputValue);
        
        if (currentIndex < inputCount - 1) {
          const nextIndex = currentIndex + 1;
          console.log('nextIndex', nextIndex);
          inputs?.current[nextIndex]?.focus();
          setCurrentIndex(nextIndex);
        } else {
          inputs?.current[currentIndex]?.blur();
        }

        handleOnComplite(outputValue);
      }
    },
    [onChange, currentIndex, inputs, value, inputCount, handleOnComplite]
  );

  const handleFocus = useCallback(
    (event: React.SyntheticEvent<HTMLInputElement>) => {
      const { currentTarget } = event;

      const inputIndex = currentTarget.dataset.index;
      if (Number(inputIndex) !== currentIndex) {
        setCurrentIndex(Number(inputIndex));

        if (currentTarget.value.trim()) {
          inputs?.current[Number(inputIndex)]?.select();
        }
      }
    },
    [currentIndex, inputs, setCurrentIndex]
  );

  const handleBlur = (event: React.SyntheticEvent<HTMLInputElement>) => {
    setIsFocusabe(isFocusable.map(() => false));
    onBlur(event);
  };

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      const clearKeyKodes = [BACKSPACE_KEY_CODE, ENTER_KEY_CODE];
      const { index } = event.currentTarget.dataset;

      if (clearKeyKodes.includes(event.keyCode)) {
        event.preventDefault();
        const outputValue = replaceAt(value, currentIndex, ' ');
        onChange(outputValue);

        if (Number(index) > 0 && !value[Number(index)]) {
          const nextIndex = +currentIndex - 1;
          inputs?.current[nextIndex]?.focus();
          const nextValue = replaceAt(value, nextIndex, ' ');
          onChange(nextValue);
          setCurrentIndex(nextIndex);
        }
      }

      if (event.keyCode === LEFT_ARROW_KEY_CODE && currentIndex > 0) {
        event.preventDefault();
        const nextIndex = +currentIndex - 1;
        inputs?.current[nextIndex]?.focus();
        setCurrentIndex(nextIndex);
      }

      if (
        event.keyCode === RIGHT_ARROW_KEY_CODE &&
        currentIndex < inputCount - 1
      ) {
        event.preventDefault();

        const nextIndex = +currentIndex + 1;
        inputs?.current[nextIndex]?.focus();
        setCurrentIndex(nextIndex);
      }
    },
    [currentIndex, value, onChange, inputs, setCurrentIndex, inputCount]
  );

  useLayoutEffect(() => {
    if (focusOnInit && inputs) {
      inputs?.current[currentIndex]?.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePaste = useCallback(
    (event: ClipboardEvent<HTMLInputElement>) => {
      event.preventDefault();

      if (disabled) {
        return;
      }

      const pastedData = event.clipboardData
        .getData('text/plain')
        .replace(/\D+/g, '')
        .slice(0, inputCount - currentIndex);

      if (pastedData.length === 0) {
        return;
      }

      const nextIndex =
        currentIndex + pastedData.length > inputCount - 1
          ? inputCount - 1
          : currentIndex + pastedData.length;
      const outputValue = replaceAt(
        value.slice(0, currentIndex),
        currentIndex,
        pastedData
      );

      setCurrentIndex(nextIndex);
      inputs?.current[nextIndex]?.focus();

      onChange(outputValue);

      handleOnComplite(outputValue);
    },
    [currentIndex, disabled, inputCount, value, onChange, handleOnComplite]
  );

  const handleReadOtp = (code: string) => {
    console.log('handleReadOtp code=', code);
    if (code.length === 0) {
      return;
    }

    const nextIndex =
      currentIndex + code.length > inputCount - 1
        ? inputCount - 1
        : currentIndex + code.length;

    const outputValue = replaceAt(
      value.slice(0, currentIndex),
      currentIndex,
      code
    );

    setCurrentIndex(nextIndex);
    inputs?.current[nextIndex]?.focus();

    onChange(outputValue);

    handleOnComplite(outputValue);
  };

  useReadOtp(handleReadOtp, {
    enabled: webOtpApiEnabled && !disabled && !value,
  });

  return (
    <CodeInputContainer className={className}>
      {label && (
        <CodeInputLabelStyled error={error}>{label}</CodeInputLabelStyled>
      )}

      <WrapCodeInputStyled>
        {Array.from({ length: inputCount }).map((_: any, index: number) => (
          <CodeInputStyled
            isSubmiting={isSubmiting}
            key={`${name}-${index}`}
            name={`${name}${index}`}
            ref={(el) => (inputs.current[index] = el)}
            data-index={index}
            value={value[index] || ''}
            onInput={handleInputChange}
            onKeyDown={handleKeyDown}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onPaste={handlePaste}
            pattern="[0-9]"
            inputMode="numeric"
            autoComplete={index === 0 ? autoComplete : 'off'}
            disabled={disabled || isSubmiting}
          />
        ))}
      </WrapCodeInputStyled>
      {error ? (
        <CodeInputErrorStyled>{error}</CodeInputErrorStyled>
      ) : (
        <CodeInputDescriptionStyled isTimerAlmostOver={isTimerAlmostOver}>
          {description}
        </CodeInputDescriptionStyled>
      )}
    </CodeInputContainer>
  );
};
