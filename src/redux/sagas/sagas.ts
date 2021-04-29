import axios from 'axios';
import { all, take, fork, put } from 'redux-saga/effects';
import { TODO_FETCH_SUCCEEDED, TODO_FETCH_REQUESTED } from '../actions/actionTypes';

function* actionWatcher() {
  yield take(TODO_FETCH_SUCCEEDED);
  const { data } = yield axios.get('https://jsonplaceholder.typicode.com/todos/');
  yield put({ type: TODO_FETCH_REQUESTED, data });
}

export default function* mySaga(): Generator {
  yield all([fork(actionWatcher)]);
}
