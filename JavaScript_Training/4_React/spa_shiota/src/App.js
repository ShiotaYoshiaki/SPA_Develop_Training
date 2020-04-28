import React from "react";
import "./App.css";
import PlusButton from "./js/calc/containers/pulsButton";
import CalcResult from "./js/calc/containers/calcResult";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PlusButton />
        <CalcResult />
      </header>
    </div>
  );
}

export default App;
