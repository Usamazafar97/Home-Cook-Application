import React, { Component } from "react";
import Main from "./components/mainComponent";
import Cart from "./components/CartComponent"
import "./App.css";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
