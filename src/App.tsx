import { Component, Suspense, lazy } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import PrivateRoute from './libraries/components/private-route/PrivateRoute';
import { Home } from './pages/Home';

const Todo = lazy(() => import('./pages/Todo'));

class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/todos"
            element={
              <PrivateRoute>
                <Suspense fallback={<>...</>}>
                  <Todo />
                </Suspense>
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
