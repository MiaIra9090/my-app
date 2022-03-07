import React from "react";
import * as UiKit from "@mui/material";

interface Props {
  children: React.ReactNode;
}

export const CardContent: React.FC<Props> = ({ children }) => {
  return <UiKit.CardContent>{children}</UiKit.CardContent>;
};
