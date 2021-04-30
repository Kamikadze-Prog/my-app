import axios from 'axios';
import { all, take, fork, put } from 'redux-saga/effects';
import { Fetch } from '../actions/actionTypes';

function* actionWatcher() {
  yield take(Fetch.TODO_FETCH_SUCCEEDED);
  const { data } = yield axios.get('https://jsonplaceholder.typicode.com/todos/');
  yield put({ type: Fetch.TODO_FETCH_REQUESTED, data });
}

export default function* mySaga(): Generator {
  yield all([fork(actionWatcher)]);
}
