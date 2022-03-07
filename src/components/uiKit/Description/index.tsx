import React, { useCallback } from "react";

import { Typography, Variant } from "components/uiKit";

import css from "./style.module.css";

interface Props {
  text?: string;
  emogies: Record<string, string>;
}

export const Description: React.FC<Props> = ({ text, emogies }) => {
  const getText = useCallback(() => {
    return text?.split(":").map((elem, index) => {
      if (!elem) return null;
      if (emogies[elem]) {
        return <img key={`${elem}${index}`} src={emogies[elem]} alt="emogi" className={css.emogi} />;
      }
      return elem;
    });
  }, [emogies, text]);

  return (
    <div className={css.description}>
      <Typography variant={Variant.body2}>{getText()}</Typography>
    </div>
  );
};
