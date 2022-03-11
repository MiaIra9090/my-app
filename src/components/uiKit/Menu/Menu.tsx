import React from 'react';
import * as UiKit from '@mui/material';

export interface PopoverClasses {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the Paper component. */
  paper: string;
}

interface Popover {
  vertical: 'top' | 'bottom';
  horizontal: 'left' | 'right';
}

interface Props {
  anchorEl: Element | null;
  variant?: 'menu' | 'selectedMenu';
  open: boolean;
  onClose?: () => void;
  PopoverClasses?: Partial<PopoverClasses>;
  id: string;
  onClick: () => void;
  PaperProps?: Record<string, any>;
  transformOrigin?: Popover;
  anchorOrigin?: Popover;
}

export const Menu: React.FC<Props> = ({
  children,
  anchorEl,
  open,
  onClose,
  variant,
  PopoverClasses,
  id,
  onClick,
  PaperProps,
  transformOrigin,
  anchorOrigin,
}) => {
  return (
    <UiKit.Menu
      open={open}
      onClose={onClose}
      anchorEl={anchorEl}
      variant={variant}
      PopoverClasses={PopoverClasses}
      id={id}
      onClick={onClick}
      PaperProps={PaperProps}
      transformOrigin={transformOrigin}
      anchorOrigin={anchorOrigin}
    >
      {children}
    </UiKit.Menu>
  );
};
