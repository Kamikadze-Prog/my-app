import React, { useEffect, useState } from 'react';
import PaginationButtons from '../PaginationButtons/PaginationButtons';

const defaultProps = {
  initialPage: 1,
  pageSize: 10,
  maxPages: 5,
};

interface PaginationProps {
  toDoItems: ItemsType[];
  onChangePage: (items: { start: number; end: number }) => void;
}

export default function Pagination(props: PaginationProps): JSX.Element {
  const { toDoItems, onChangePage } = props;
  const [state, setState] = useState<Pager>({
    pager: {
      totalItems: toDoItems.length,
      currentPage: 0,
      pageSize: defaultProps.maxPages,
      totalPages: Math.ceil(toDoItems.length / 10),
      startPage: 0,
      endPage: 0,
      startIndex: 0,
      endIndex: toDoItems.length - 1,
      pages: [],
    },
  });
  const { pager } = state;

  function getPager(totalItems: number, currentPage: number, pageSize: number, maxPages: number) {
    const totalPages = Math.ceil(totalItems / pageSize);

    let startPage = 0;
    let endPage;
    const halfMax = Math.floor(maxPages / 2);
    if (totalPages <= maxPages) {
      startPage = 1;
      endPage = totalPages;
    } else if (currentPage <= halfMax + 1) {
      startPage = 1;
      endPage = maxPages;
    } else if (currentPage + (halfMax - 1) >= totalPages) {
      startPage = totalPages - (maxPages - 1);
      endPage = totalPages;
    } else {
      startPage = currentPage - halfMax;
      endPage = startPage + maxPages - 1;
    }

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const pages = [...Array(endPage + 1 - startPage).keys()].map((i) => startPage + i);

    return {
      totalItems,
      currentPage,
      pageSize,
      totalPages,
      startPage,
      endPage,
      startIndex,
      endIndex,
      pages,
    };
  }

  const setPage = (page: number) => {
    const { pageSize, maxPages } = defaultProps;
    if (page < 1 || page > state.pager.totalPages) {
      return;
    }

    const newPager = getPager(toDoItems.length, page, pageSize, maxPages);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setState({ pager: newPager });
    onChangePage({ start: newPager.startIndex, end: newPager.endIndex + 1 });
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const handleClick = (e) => {
    e.preventDefault();
    const { name } = e.target;
    switch (name) {
      case 'First':
        setPage(1);
        break;
      case 'Prev':
        setPage(pager.currentPage - 1);
        break;
      case 'Next':
        setPage(pager.currentPage + 1);
        break;
      case 'Last':
        setPage(pager.totalPages);
        break;
      default:
        if (name.includes('_')) {
          setPage(Number(name.slice(1, name.length)));
        } else {
          throw new Error(`Invalid page name: ${name}`);
        }
    }
  };

  useEffect(() => {
    if (toDoItems && toDoItems.length) {
      setPage(defaultProps.initialPage);
    }
  }, []);

  return (
    <>
      {!pager.pages || pager.pages.length <= 1 ? null : (
        <div className="buttonsWrapper">
          <PaginationButtons title="First" name="First" handleClick={handleClick} disabled={pager.currentPage === 1} />
          <PaginationButtons title="Prev" name="Prev" handleClick={handleClick} disabled={pager.currentPage === 1} />

          {pager.pages.map((page: number, index: number) => {
            const pageStart = page === 1 ? page : (page - 1) * pager.pageSize + 1;
            const pageEnd = page === pager.totalPages ? pager.totalItems : page * defaultProps.pageSize;

            return (
              <button
                key={index.toString()}
                className="paginationButton"
                name={`_${page}`}
                onClick={handleClick}
                disabled={pager.currentPage === page}
              >
                {pageStart !== pageEnd ? `${pageStart}-${pageEnd}` : pageEnd}
              </button>
            );
          })}

          <PaginationButtons
            title="Next"
            name="Next"
            handleClick={handleClick}
            disabled={pager.currentPage === pager.totalPages}
          />
          <PaginationButtons
            title="Last"
            name="Last"
            handleClick={handleClick}
            disabled={pager.currentPage === pager.totalPages}
          />
        </div>
      )}
    </>
  );
}
