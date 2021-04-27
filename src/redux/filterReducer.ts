const filterDefaultState = {
  count: 10,
};

export default (state = filterDefaultState, action: { type: string }) => {
  switch (action.type) {
    case 'PAGINATE_ITEM':
      return {
        ...state,
        count: state.count + 10,
      };
    default:
      return state;
  }
};

// Action Creator
export const increment = () => ({
  type: 'PAGINATE_ITEM',
});
