import React from "react";
import "./App.css";
import NotificationsDropdown from "./components/NotificationsDropdown/NotificationsDropdown";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="navbar">
          <h1>My App</h1>
          <NotificationsDropdown />
        </div>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
