import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import CartPage from "./pages/cartPage";

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </Layout>
      </div>
    );
  }
}
export default App;
