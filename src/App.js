import React from "react";
import "./App.css";
import Homepage from "./modules/homepage/Homepage";
import { Provider } from "react-redux";
import store from "./Store";

function App() {
  return (
    <Provider store={store}>
      <Homepage />
    </Provider>
  );
}

export default App;
