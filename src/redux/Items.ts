const init = {
  list: [],
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types,@typescript-eslint/ban-ts-comment
// @ts-ignore
export default function items(state = [], action) {
  switch (action.type) {
    case 'USER_FETCH_SUCCEEDED':
      return [...state];
    case 'USER_FETCH_REQUESTED':
      init.list = action.data;
      return init.list;
    default:
      return state;
  }
}
