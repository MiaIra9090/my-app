import React from 'react';
import * as UiKit from '@mui/material';

interface Props {
  disabled?: boolean;
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  size?: 'small' | 'medium' | 'large';
  onClick?: (ev: React.MouseEvent) => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export const IconButton: React.FC<Props> = ({
  disabled,
  color = 'primary',
  children,
  onClick,
  size = 'medium',
  type = 'button',
  className,
}) => {
  return (
    <UiKit.IconButton
      disabled={disabled}
      type={type}
      color={color}
      size={size}
      onClick={onClick}
      className={className}
    >
      {children}
    </UiKit.IconButton>
  );
};
