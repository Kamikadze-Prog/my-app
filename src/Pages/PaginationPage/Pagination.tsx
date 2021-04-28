import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PagButton from '../../components/PagButtons/PagButton';

interface CombineState {
  items: ItemsType[];
  filterReducer: ItemsType[];
}

function Pagination(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [listItems, setListItems] = useState<ItemsType[]>();
  const [totalPages, setTotalPages] = useState(0);
  const [pageBoards, setPageBoards] = useState(1);
  const [pageLimit, setPageLimit] = useState(2);

  const items = useSelector((state: CombineState) => state.items);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'USER_FETCH_SUCCEEDED' });
  }, []);

  useEffect(() => {
    if (items.length) {
      setListItems(items);
      setTotalPages(Math.ceil(items.length / 10));
    }
  }, [items]);

  // listItems ? listItems.map((item: ItemsType) => <div key={item.title}> {item.title} </div>) : <span>Load</span>;

  return (
    <div>
      <Link to="Infinity"> Infinity Scroll </Link>
      <div>Pagination</div>
      <PagButton
        totalPages={totalPages}
        pageLimit={pageLimit}
        pageBoards={pageBoards}
        setPage={setPageBoards}
        setPageLimit={setPageLimit}
      />
    </div>
  );
}

export default Pagination;
