import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/reducer';
import mySaga from './sagas/sagas';

const sagaMiddleware = createSagaMiddleware();

declare global {
  interface Window {
    REDUX_DEVTOOLS_EXTENSION_COMPOSE?: typeof compose;
  }
}
const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

export default createStore(rootReducer, {}, enhancer);

sagaMiddleware.run(mySaga);
