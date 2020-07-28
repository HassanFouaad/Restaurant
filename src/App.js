import React, { Component } from "react";
import Main from "./components/MainComponent";
import { HashRouter } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import { configurestore } from "./redux/configurestore";

const store = configurestore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div className="App">
            <Main></Main>
          </div>
        </HashRouter>
      </Provider>
    );
  }
}
