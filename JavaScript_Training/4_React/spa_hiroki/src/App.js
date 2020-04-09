import React from 'react';
import './App.css';
import CalcButton from './js/calc/containers/calcButton';
import CalcResult from './js/calc/containers/calcResult';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CalcButton param={"+"} />
        <CalcButton param={"-"} />
        <CalcButton param={"×"} />
        <CalcButton param={"÷"} />
        <CalcResult />
      </header>
    </div>
  );
}

export default App;
