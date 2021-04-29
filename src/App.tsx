import { Provider } from 'react-redux';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import InfinityPagination from './pages/InfinityPagination/InfinityPagination';
import PaginationPage from './pages/PaginationPage/PaginationPage';
import createStore from './redux/store/store';

function App(): JSX.Element {
  return (
    <Provider store={createStore}>
      <Router>
        <Switch>
          <Route exact path="/Infinity" component={InfinityPagination} />
          <Route exact path="/" component={PaginationPage} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
