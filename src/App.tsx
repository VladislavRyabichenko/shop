import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Layout from "./components/Layout";

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="App">
        <Layout />
      </div>
    );
  }
}
export default App;
