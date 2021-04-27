import React, { useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useDispatch } from 'react-redux';

// interface CombineState {
//   items: ItemsType[];
//   filterReducer: ItemsType[];
// }

function Pagination(): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    const datas = dispatch({ type: 'USER_FETCH_REQUESTED' });
    console.log(datas);
  });

  return (
    <div>
      <div>Pagination</div>
    </div>
  );
}

export default Pagination;
