import React from 'react';
import * as UiKit from '@mui/material';

import { Variant } from '../constants';

interface Props {
  variant: Variant;
  children: React.ReactNode;
  align?: 'center' | 'inherit' | 'justify' | 'left' | 'right';
  noWrap?: boolean;
  className?: string;
  testid?: string;
}

export const Typography: React.FC<Props> = ({
  variant,
  children,
  align,
  noWrap,
  className,
  testid,
}) => {
  return (
    <UiKit.Typography
      data-testid={testid}
      variant={variant}
      align={align}
      noWrap={noWrap}
      className={className}
    >
      {children}
    </UiKit.Typography>
  );
};
