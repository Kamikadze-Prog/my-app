import React, { MouseEventHandler } from 'react';
import './PaginationButtons.scss';

interface PaginationProps {
  title: string;
  toFirstPage: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
}

function PaginationButtons(props: PaginationProps): JSX.Element {
  const { title, toFirstPage, handleClick, disabled } = props;
  return (
    <button className="paginationButton" name={toFirstPage} onClick={handleClick} disabled={disabled}>
      {title}
    </button>
  );
}

export default PaginationButtons;
