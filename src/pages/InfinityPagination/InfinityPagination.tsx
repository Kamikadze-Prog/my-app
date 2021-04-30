import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Fetch } from '../../redux/actions/actionTypes';
import './InfinityPagination.scss';

function InfinityPagination(): JSX.Element {
  const SPACE_LOAD = 10;
  const dispatch = useDispatch();
  const [toDoItems, setToDoItems] = useState<ItemsType[]>([]);
  const toDoReducer = useSelector((state: { toDoReducer: ItemsType[] }) => state.toDoReducer);
  let newValue: HTMLUListElement | null;
  const [pageState, setPageState] = useState({
    loading: false,
    start: 0,
    finished: false,
  });

  useEffect(() => {
    dispatch({ type: Fetch.TODO_FETCH_SUCCEEDED });
  }, []);

  function requestData() {
    if (pageState.loading) {
      return;
    }
    setPageState({
      ...pageState,
      loading: true,
    });

    const { start } = pageState;
    let finished = false;
    if (toDoItems && start + SPACE_LOAD > toDoItems.length) {
      finished = true;
    }

    setPageState({
      ...pageState,
      loading: false,
      start: start + SPACE_LOAD,
      finished,
    });
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  function onScrollEnd(e) {
    if (newValue && !pageState.finished && window.innerHeight + e.target.scrollTop >= newValue.offsetHeight) {
      requestData();
    }
  }

  useEffect(() => {
    if (toDoReducer.length) {
      setToDoItems(toDoReducer);
      requestData();
    }
  }, [toDoReducer]);

  return (
    <div className="infinityScroll">
      <div>
        <h2>Infinity Pagination</h2>
      </div>
      {toDoItems && (
        <div className="infinityScrollWrapper" onScroll={onScrollEnd}>
          <ul className="toDosWrapper" ref={(prevValue) => (newValue = prevValue)}>
            {toDoItems.slice(0, pageState.start).map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
          {pageState.loading && <p>loading...</p>}
        </div>
      )}
    </div>
  );
}

export default InfinityPagination;
