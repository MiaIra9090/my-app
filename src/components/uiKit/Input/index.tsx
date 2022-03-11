import React from 'react';
import * as UiKit from '@mui/material';

import css from './style.module.css';

interface Props {
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  defaultValue?: string;
  autoComplete?: string;
  autoFocus?: boolean;
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  error?: boolean;
  id?: string;
  name?: string;
  placeholder?: string;
  value: string;
  testid?: string;
}

export const Input: React.FC<Props> = ({
  disabled,
  onChange,
  onBlur,
  defaultValue,
  autoComplete,
  autoFocus,
  color,
  error,
  id,
  name,
  placeholder,
  value,
  testid,
}) => {
  return (
    <UiKit.Input
      disabled={disabled}
      onChange={onChange}
      onBlur={onBlur}
      defaultValue={defaultValue}
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      color={color}
      error={error}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      className={css.input}
      data-testid={testid}
    />
  );
};
