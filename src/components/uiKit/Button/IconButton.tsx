import React from 'react';
import * as UiKit from '@mui/material';

import { Color, Size } from '../constants';

interface Props {
  disabled?: boolean;
  color?: Color;
  size?: Size;
  onClick?: (ev: React.MouseEvent) => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  testid?: string;
}

export const IconButton: React.FC<Props> = ({
  disabled,
  color = Color.primary,
  children,
  onClick,
  size = Size.medium,
  type = 'button',
  className,
  testid,
}) => {
  return (
    <UiKit.IconButton
      disabled={disabled}
      type={type}
      color={color}
      size={size}
      onClick={onClick}
      className={className}
      data-testid={testid}
    >
      {children}
    </UiKit.IconButton>
  );
};
