import { Fetch } from '../actions/actionTypes';

export default function toDoReducer(state = [], action: ItemsProps): ItemsType[] {
  switch (action.type) {
    case Fetch.TODO_FETCH_SUCCEEDED:
      return [...state];
    case Fetch.TODO_FETCH_REQUESTED:
      return action.data;
    default:
      return state;
  }
}
