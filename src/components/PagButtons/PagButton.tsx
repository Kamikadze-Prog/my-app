import React, { useState } from 'react';

// const defaultProps = {
//   initialPage: 1,
//   pageSize: 10,
// };

interface ButtonProps {
  // eslint-disable-next-line react/no-unused-prop-types
  listItems: ItemsType[] | undefined;
  // eslint-disable-next-line react/no-unused-prop-types
  onChangePage: () => void;
}
export default function PagButton(props: ButtonProps): JSX.Element {
  const { listItems } = props;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [pageToShow, setPageToShow] = useState();
  // eslint-disable-next-line no-lone-blocks
  {
    // eslint-disable-next-line array-callback-return
    listItems?.map((e) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      e.title;
    });
  }

  return <ul className="pagination" />;
}
