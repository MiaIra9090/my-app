import React from 'react';
import * as UiKit from '@mui/material';

interface Props {
  children: React.ReactNode;
  className?: string;
  onClick?: (id: React.MouseEvent<HTMLDivElement>) => void;
}

export const Card: React.FC<Props> = ({ children, className, onClick }) => {
  return (
    <UiKit.Card className={className} onClick={onClick}>
      {children}
    </UiKit.Card>
  );
};
