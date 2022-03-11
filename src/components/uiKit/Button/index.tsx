import React from 'react';
import * as UiKit from '@mui/material';

import { Color, Size } from '../constants';

interface Props {
  disabled?: boolean;
  color?: Color;
  size?: Size;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  testid?: string;
}

export const Button: React.FC<Props> = ({
  disabled,
  color = Color.primary,
  children,
  onClick,
  size = Size.medium,
  type = 'button',
  testid,
}) => {
  return (
    <UiKit.Button
      data-testid={testid}
      disabled={disabled}
      type={type}
      color={color}
      size={size}
      onClick={onClick}
    >
      {children}
    </UiKit.Button>
  );
};
