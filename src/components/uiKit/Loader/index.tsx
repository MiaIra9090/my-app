import React from "react";

import css from "./style.module.css";

export const Loader: React.FC = () => {
  return (
    <div className={css.loaderWrapper}>
      <div className={css.ldsSpinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
