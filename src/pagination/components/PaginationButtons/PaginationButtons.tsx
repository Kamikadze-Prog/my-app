import React, { MouseEventHandler } from 'react';
import './PaginationButtons.scss';

interface PaginationProps {
  title: string | number;
  name: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
}

function PaginationButtons(props: PaginationProps): JSX.Element {
  const { title, name, handleClick, disabled } = props;
  return (
    <button className="paginationButton" name={name} onClick={handleClick} disabled={disabled}>
      {title}
    </button>
  );
}

export default PaginationButtons;
