import React from 'react';
import './App.css';
import CalcButton from './js/calc/containers/calcButton';
import NumberButton from './js/calc/containers/numberButton';
import CalcResult from './js/calc/containers/calcResult';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <CalcResult />
      <div><NumberButton num={7} /><NumberButton num={8} /><NumberButton num={9} /><CalcButton param={"÷"} /></div>
      <div><NumberButton num={4} /><NumberButton num={5} /><NumberButton num={6} /><CalcButton param={"×"} /></div>
      <div><NumberButton num={1} /><NumberButton num={2} /><NumberButton num={3} /><CalcButton param={"-"} /></div>
      <div><CalcButton param={"."} /><NumberButton num={0} /><CalcButton param={"="} /><CalcButton param={"+"} /></div>
      </header>
    </div>
  );
}

export default App;
