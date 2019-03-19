import "@babel/polyfill";
import createHistory from "history/createHashHistory";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import thunkMidleware from "redux-thunk";
import { default as Speakers2018 } from "./pages/2018/Speakers.page";
import Contact from "./pages/Contact.page";
import Faq from "./pages/Faq.page";
import Home from "./pages/Home.page";
import CGV from "./pages/legal/CGV";
import CodeConduite from "./pages/legal/CodeConduite";
import News from "./pages/News.page";
import Partnerships from "./pages/Partnerships.page";
import Team from "./pages/Team.page";
import reducers from "./reducers";

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunkMidleware)
);
const history = createHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home" component={Home} />
        <Route path="/team" component={Team} />
        <Route path="/news" component={News} />
        {/* <Route path="/speakers" component={Speakers} /> */}
        {/* <Route path="/talks" component={Talks} /> */}
        <Route path="/partnerships" component={Partnerships} />
        <Route path="/faq" component={Faq} />
        <Route path="/contact" component={Contact} />
        <Route path="/2018/speakers" component={Speakers2018} />
        <Route path="/legal/cgv" component={CGV} />
        <Route path="/legal/code_de_conduite" component={CodeConduite} />
        {/* <Route path="/tickets/switch" component={TicketSwitch} /> */}
        {/* <Route path="/live" component={Live} /> */}
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("app")
);
