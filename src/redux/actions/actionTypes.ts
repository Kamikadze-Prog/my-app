export const TODO_FETCH_SUCCEEDED = 'USER_FETCH_SUCCEEDED';
export const TODO_FETCH_REQUESTED = 'USER_FETCH_REQUESTED';
export const PAGINATE_ITEM = 'PAGINATE_ITEM';

export const paginatePage = (): { type: string } => ({
  type: PAGINATE_ITEM,
});
