import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TODO_FETCH_SUCCEEDED } from '../../redux/actions/actionTypes';
import Pagination from '../../pagination/components/Pagination/Pagination';
import './PaginationPage.scss';

function PaginationPage(): JSX.Element {
  const dispatch = useDispatch();
  const [listItems, setListItems] = useState<ItemsType[]>();
  const [pageOfItems, setPageOfItems] = useState({ start: 0, end: 0 });
  const toDoReducer = useSelector((state: { toDoReducer: ItemsType[] }) => state.toDoReducer);

  useEffect(() => {
    dispatch({ type: TODO_FETCH_SUCCEEDED });
  }, []);

  useEffect(() => {
    if (toDoReducer.length) {
      setListItems(toDoReducer);
    }
  }, [toDoReducer]);

  const onChangePage = (toDosToShow: { start: number; end: number }): void => {
    setPageOfItems(toDosToShow);
  };

  return (
    <div className="paginationWrapper">
      <h1 className="mainText">Pagination</h1>
      <div className="paginationItems">
        {listItems?.slice(pageOfItems.start, pageOfItems.end).map((item: ItemsType) => (
          <div className="paginationItem" key={item.title}>
            {item.title}
          </div>
        ))}
      </div>
      {listItems ? <Pagination listItems={listItems} onChangePage={onChangePage} /> : <div> Loading </div>}
    </div>
  );
}

export default PaginationPage;
