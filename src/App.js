import React, { Component } from "react";
import "./App.scss";
import store from "./redux";
import { Provider } from "react-redux";

import routes from "./routes";


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <main className="App">
          {routes}
        </main>
      </Provider>
    );
  }
}

export default App;
