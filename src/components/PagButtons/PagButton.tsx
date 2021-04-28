import React, { Dispatch, SetStateAction } from 'react';

interface ButtonProps {
  totalPages: number;
  // eslint-disable-next-line react/no-unused-prop-types
  pageLimit: number;
  // eslint-disable-next-line react/no-unused-prop-types
  pageBoards: number;
  // eslint-disable-next-line react/no-unused-prop-types
  setPageLimit: Dispatch<SetStateAction<number>>;
  // eslint-disable-next-line react/no-unused-prop-types
  setPage: Dispatch<SetStateAction<number>>;
}
export default function PagButton(props: ButtonProps) {
  const { totalPages } = props;

  const buttons = null;
  // eslint-disable-next-line no-empty
  for (let i = 0; i < totalPages; i++) {}
  return (
    <div className="pagination">
      <button>First</button>
      {buttons}
      <button>Last</button>
    </div>
  );
}
