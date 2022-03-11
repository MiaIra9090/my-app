import React from 'react';
import * as UiKit from '@mui/material';

interface Props {
  children: React.ReactNode;
  disabled?: boolean;
  divider?: boolean;
  selected?: boolean;
  onClick?: () => void;
  testid?: string;
}

export const MenuItem: React.FC<Props> = ({
  children,
  disabled,
  divider,
  selected,
  onClick,
  testid,
}) => {
  return (
    <UiKit.MenuItem
      data-testid={testid}
      disabled={disabled}
      selected={selected}
      divider={divider}
      onClick={onClick}
    >
      {children}
    </UiKit.MenuItem>
  );
};
