import React from 'react';

import css from './style.module.css';

interface Props {
  onClick(): void;
  id: string;
}

export const CrossButton: React.FC<Props> = ({ onClick, id }) => {
  return (
    <button onClick={onClick} className={css.crossButton} id={id} type="button">
      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.9399 12.0005L4.99878 17.9416L6.05944 19.0023L12.0005 13.0612L17.9416 19.0023L19.0022 17.9416L13.0612 12.0005L19.0022 6.05944L17.9416 4.99878L12.0005 10.9399L6.05946 4.99878L4.9988 6.05944L10.9399 12.0005Z"
        />
      </svg>
    </button>
  );
};
