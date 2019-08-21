import React from "react";
import "./App.css";
import Timer from "./components/Timer";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Countdown</h1>
        <Timer />
      </header>
    </div>
  );
};

export default App;
