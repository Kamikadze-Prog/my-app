interface ItemsProps {
  data: ItemsType[];
  type: string;
}

export default function items(state = [], action: ItemsProps): ItemsType[] {
  switch (action.type) {
    case 'USER_FETCH_SUCCEEDED':
      return [...state];
    case 'USER_FETCH_REQUESTED':
      return action.data;
    default:
      return state;
  }
}
