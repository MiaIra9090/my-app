import React from 'react';
import * as UiKit from '@mui/material';

interface Props {
  children: React.ReactNode;
  disabled?: boolean;
  divider?: boolean;
  selected?: boolean;
  onClick?: () => void;
}

export const MenuItem: React.FC<Props> = ({ children, disabled, divider, selected, onClick }) => {
  return (
    <UiKit.MenuItem disabled={disabled} selected={selected} divider={divider} onClick={onClick}>
      {children}
    </UiKit.MenuItem>
  );
};
