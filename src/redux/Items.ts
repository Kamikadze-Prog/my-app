const initialState = [
  {
    userId: 1,
    id: 2,
    title: 'd',
    body: 'dd',
  },
];
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default function items(state = initialState, action) {
  switch (action.type) {
    case 'USER_FETCH_SUCCEEDED':
      return { ...state, loading: true };
    case 'USER_FETCH_REQUESTED':
      return [...state];
    default:
      return [...state];
  }
}
