import React, { Component } from 'react';
import {Provider} from "react-redux";
import store from "./store";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import LoginView from "./components/LoginView";
import FeedbackView from "./components/FeedbackView";
import AuthRoute from "./AuthRoute";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Header />
            <Switch>
              <Route path="/login" component={LoginView} />
              <AuthRoute path="/feedback" component={FeedbackView} />
              <Route path="/empty" component={null} key="empty" />
              <AuthRoute component={FeedbackView} />
            </Switch>
        </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
