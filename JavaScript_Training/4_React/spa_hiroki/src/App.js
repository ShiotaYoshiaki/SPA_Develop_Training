import React from 'react';
import './App.css';
import PlusButton from './js/calc/containers/plusButton';
import CalcResult from './js/calc/containers/calcResult';
import MinusButton from './js/calc/containers/minusButton';

function App() {
  return(
    <div className="App">
      <header className="App-header">
      <PlusButton /> 
      <CalcResult />
      <MinusButton />
      </header>
      </div>
  );
}

export default App;
