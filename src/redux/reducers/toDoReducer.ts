import { TODO_FETCH_SUCCEEDED, TODO_FETCH_REQUESTED } from '../actions/actionTypes';

export default function toDoReducer(state = [], action: ItemsProps): ItemsType[] {
  switch (action.type) {
    case TODO_FETCH_SUCCEEDED:
      return [...state];
    case TODO_FETCH_REQUESTED:
      return action.data;
    default:
      return state;
  }
}
