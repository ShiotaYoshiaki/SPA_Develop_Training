import React from 'react';
import './App.css';
import CalcButton from './js/calc/containers/calcButton';
import CalcResult from './js/calc/containers/calcResult';
//import MinusButton from './js/calc/containers/minusButton';

function App() {
  return(
    <div className="App">
      <header className="App-header">
      <CalcButton  param={"+"}/> 
      <CalcResult />
      <CalcButton param={"-"}/>
      </header>
      </div>
  );
}

export default App;
