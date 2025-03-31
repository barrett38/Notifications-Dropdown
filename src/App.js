import React from "react";
import "./App.css";
import "./components/NotificationsDropdown/NotificationsDropdown.css";
import NotificationsDropdown from "./components/NotificationsDropdown/NotificationsDropdown";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="navbar">
          <NotificationsDropdown />
        </div>
      </header>
    </div>
  );
}

export default App;
