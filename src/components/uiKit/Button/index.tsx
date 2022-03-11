import React from 'react';
import * as UiKit from '@mui/material';

interface Props {
  disabled?: boolean;
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<Props> = ({
  disabled,
  color = 'primary',
  children,
  onClick,
  size = 'medium',
  type = 'button',
}) => {
  return (
    <UiKit.Button disabled={disabled} type={type} color={color} size={size} onClick={onClick}>
      {children}
    </UiKit.Button>
  );
};
