import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { disableBrowserAutofillStyles } from '../../utils/mixins';

const loading = keyframes`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.3;
  }

  100% {
    opacity: 1;
  }
`;

export const WrapCodeInputStyled = styled.div`
  display: flex;

  justify-content: space-between;
  & > input {
    margin-right: 10px;
    &:last-child {
      margin-right: 0;
    }
  }
`;

export const CodeInputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CodeInputLabelStyled = styled.span<{ error: string | null }>`
  margin-bottom: 8px;

  color: red;
`;

export const CodeInputDescriptionStyled = styled.span<{
  isTimerAlmostOver: boolean;
}>`
  display: block;
  margin-top: 8px;
  white-space: pre-wrap;
  color: red;
`;

export const CodeInputErrorStyled = styled.span`
  display: block;
  margin-top: 8px;

  white-space: pre-wrap;
`;

export const CodeInputStyled = styled.input<{ isSubmiting: boolean }>`
  border: none;
  text-align: center;
  background: #ccc;
  border-radius: 12px;
  width: 100%;
  height: 54px;
  width: 54px;
  font-size: 16px;
  color: black;
  caret-color: black;
  text-overflow: ellipsis;
  transition: 300ms ease all;

  &::placeholder {
    color: black;
  }
  &:disabled {
    opacity: 0.3;
  }

  &:focus {
    outline: none;
    background: green;
  }

  ${() => disableBrowserAutofillStyles()};

  animation: ${({ isSubmiting }) => isSubmiting && loading} 2s ease infinite;
`;
