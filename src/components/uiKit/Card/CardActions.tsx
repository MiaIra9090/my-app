import React from "react";
import * as UiKit from "@mui/material";

interface Props {
  children: React.ReactNode;
  disableSpacing?: boolean;
  className?: string;
}

export const CardActions: React.FC<Props> = ({ children, disableSpacing, className }) => {
  return (
    <UiKit.CardActions disableSpacing={disableSpacing} className={className}>
      {children}
    </UiKit.CardActions>
  );
};
