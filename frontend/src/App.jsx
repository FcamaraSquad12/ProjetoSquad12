import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StoreProvider from "components/Store/Provider";
import RoutsPrivate from "components/Routes/Private/Private";
import Login from "./pages/Login/Login";
// import Home from "./pages/Home/Home"
import Home from "./components/User/Home/Home";

const PagesRoot = () => (
<<<<<<< HEAD
  
  <Router>
    <StoreProvider>
       <Switch>
         <Route path="/login" component={Login} />
         <RoutsPrivate path="/home" component={Home} />
         <Route path="/" component={Login} />
       </Switch>
     </StoreProvider>
   </Router>
=======
  <Router>
    <StoreProvider>
      <Switch>
        <Route path="/login" component={Login} />
        <RoutsPrivate path="/home" component={Home} />
        <Route path="/" component={Login} />
      </Switch>
    </StoreProvider>
  </Router>
>>>>>>> 5130003b2e6f02ede0ae98b77017e4ddef376c93
);

export default PagesRoot;
