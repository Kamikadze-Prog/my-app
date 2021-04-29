import { PAGINATE_ITEM } from '../actions/actionTypes';

const filterDefaultState = {
  count: 10,
};

export default function filterReducer(state = filterDefaultState, action: { type: string }): { count: number } {
  switch (action.type) {
    case PAGINATE_ITEM:
      return {
        ...state,
        count: state.count + 10,
      };
    default:
      return state;
  }
}
