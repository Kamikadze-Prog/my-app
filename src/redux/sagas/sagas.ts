import { all, take, fork, put } from 'redux-saga/effects';
import axios from 'axios';

function* actionWatcher() {
  yield take('USER_FETCH_SUCCEEDED');
  const { data } = yield axios.get('https://jsonplaceholder.typicode.com/todos/');
  yield put({ type: 'USER_FETCH_REQUESTED', data });
}

export default function* mySaga() {
  yield all([fork(actionWatcher)]);
}
