import React from "react";
import "./css/global.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import ServiceDetail from "./pages/ServiceDetail";
import Store from "./store/store";
import Services from "./data/services";

function App() {
  return (
    <Provider store={Store}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home  props={Services}/>
          </Route>
          <Route path="/about-us" exact>
            <AboutUs />
          </Route>
          <Route path="/contact-us/:data" exact>
           <ContactUs/>
          </Route>
          <Route path="/services/:serviceId" exact>
            <ServiceDetail />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
