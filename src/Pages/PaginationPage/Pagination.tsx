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
  const [listItems, setListItems] = useState<ItemsType[]>();
  const [pageOfItems, setPageOfItems] = useState([]);

  const items = useSelector((state: CombineState) => state.items);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'USER_FETCH_SUCCEEDED' });
  }, []);

  useEffect(() => {
    if (items.length) {
      setListItems(items);
    }
  }, [items]);

  function onChangePage() {
    setPageOfItems(pageOfItems);
  }
  return (
    <div>
      <Link to="Infinity"> Infinity Scroll </Link>
      <div>Pagination</div>
      {listItems ? (
        pageOfItems.map((item: ItemsType) => <div key={item.title}> {item.title} </div>)
      ) : (
        <span>Loading</span>
      )}
      <PagButton listItems={listItems} onChangePage={onChangePage} />
    </div>
  );
}

export default Pagination;
