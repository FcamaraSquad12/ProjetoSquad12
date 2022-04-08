import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import StoreProvider from 'components/Store/Provider';
import RoutsPrivate from 'components/Routes/Private/Private';
import Login from './pages/Login/Login';
import Home from "./pages/Home/Home"

const PagesRoot = () => (
  <Router>
    <StoreProvider>
      <Switch>
        <Route path="/login" component={Login} />
        <RoutsPrivate path="/home" component={Home} />
        <Route path="/" component={Login} />
      </Switch>
    </StoreProvider>
  </Router>
)

export default PagesRoot;


