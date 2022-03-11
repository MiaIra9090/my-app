import React from 'react';
import * as UiKit from '@mui/material';

interface Props {
  children: React.ReactNode;
  className?: string;
  onClick?: (id: React.MouseEvent<HTMLDivElement>) => void;
  testid?: string;
}

export const Card: React.FC<Props> = ({ children, className, onClick, testid }) => {
  return (
    <UiKit.Card data-testid={testid} className={className} onClick={onClick}>
      {children}
    </UiKit.Card>
  );
};
