import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import CustomerCreate from "./pages/customerCreate";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.tsx</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
              <button type="button" className="btn btn-primary">
                <Link to="/create-customer">Customer Page</Link>
              </button>
            </header>
          }
        />
        <Route path="/create-customer" element={<CustomerCreate />} />
      </Routes>
    </div>
  );
}

export default App;
