import React from 'react';
import * as UiKit from '@mui/material';

interface Props {
  children?: React.ReactNode;
  action?: React.ReactNode;
  avatar?: React.ReactNode;
  title: string;
  subheader?: string;
  className?: string;
}

export const CardHeader: React.FC<Props> = ({
  children,
  action,
  avatar,
  title,
  subheader,
  className,
}) => {
  return (
    <UiKit.CardHeader
      title={title}
      subheader={subheader}
      avatar={avatar}
      action={action}
      className={className}
    >
      {children}
    </UiKit.CardHeader>
  );
};
