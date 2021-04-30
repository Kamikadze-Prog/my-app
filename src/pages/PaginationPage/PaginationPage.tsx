import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Fetch } from '../../redux/actions/actionTypes';
import Pagination from '../../pagination/components/Pagination/Pagination';
import './PaginationPage.scss';

function PaginationPage(): JSX.Element {
  const dispatch = useDispatch();
  const [toDoItems, setToDoItems] = useState<ItemsType[]>();
  const [pageOfItems, setPageOfItems] = useState({ start: 0, end: 0 });
  const toDoReducer = useSelector((state: { toDoReducer: ItemsType[] }) => state.toDoReducer);

  useEffect(() => {
    dispatch({ type: Fetch.TODO_FETCH_SUCCEEDED });
  }, []);

  useEffect(() => {
    if (toDoReducer.length) {
      setToDoItems(toDoReducer);
    }
  }, [toDoReducer]);

  const onChangePage = (toDosToShow: { start: number; end: number }): void => {
    setPageOfItems(toDosToShow);
  };

  return (
    <>
      <div className="navigation">
        <Link to="/Infinity">Infinity Pagination </Link>
      </div>
      <div className="paginationWrapper">
        <h1 className="mainText">Pagination</h1>
        <div className="paginationItems">
          {toDoItems?.slice(pageOfItems.start, pageOfItems.end).map((item: ItemsType) => (
            <div className="paginationItem" key={item.title}>
              {item.title}
            </div>
          ))}
        </div>
        {toDoItems ? <Pagination toDoItems={toDoItems} onChangePage={onChangePage} /> : <div> Loading </div>}
      </div>
    </>
  );
}

export default PaginationPage;
