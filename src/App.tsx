// eslint-disable-next-line import/no-extraneous-dependencies
import { Provider } from 'react-redux';
import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import InfinityPagination from './Pages/InfinityPagination/InfinityPagination';
import Pagination from './Pages/PaginationPage/Pagination';
import createStore from './redux/store';

function App(): JSX.Element {
  return (
    <Provider store={createStore}>
      <Router>
        <Switch>
          <Route exact path="/Infinity" component={InfinityPagination} />
          <Route exact path="/" component={Pagination} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
