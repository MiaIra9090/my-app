import React from "react";
import * as UiKit from "@mui/material";

interface Props {
  component: React.ElementType;
  height: string;
  image: string;
  alt: string;
}

export const CardMedia: React.FC<Props> = ({ component, height, image, alt }) => {
  return (
    <UiKit.CardMedia image={image} height={height} component={component} alt={alt} />
  );
};
