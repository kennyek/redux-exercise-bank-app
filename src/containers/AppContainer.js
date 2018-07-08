import React, { Component } from "react";
import App from "../components/App";
import store from "../store";

class AppContainer extends Component {
  render() {
    return <App {...store.getState()} />;
  }
}

export default AppContainer;
