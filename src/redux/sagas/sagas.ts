import { all, put, takeEvery } from 'redux-saga/effects';

function* getData() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const users = yield fetch('http://jsonplaceholder.typicode.com/posts');
  yield put({ type: 'USER_FETCH_SUCCEEDED', users });
}

function* actionWatcher() {
  while (true) {
    yield takeEvery('USER_FETCH_REQUESTED', getData);
  }
}

export default function* mySaga() {
  yield all([actionWatcher]);
}
