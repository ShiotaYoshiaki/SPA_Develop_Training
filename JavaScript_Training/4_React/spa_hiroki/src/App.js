import React from 'react';
import logo from './logo.svg';
import './App.css';
import DifficultButton from './js/training/components/DifficultButton';

function App() {
  const domArray = [];
  const baseNum= 100;
  const baseHeight = 100;
  const maxNum = 13;
  const upperNum = 20;
for(let i = baseNum, count = 1; count <= maxNum; i += upperNum, count += 1){
     let colorParam = 'blue';
     let Param = count;
      if (count % 3 === 0) {
        colorParam = 'red'
       } 
      if (count % 4 === 0) {
        Param= '!!';
       } 
      domArray.push( <DifficultButton width={i} height={baseHeight} backgroundColor={colorParam} param={Param}/>)
  }
  return (
    <div className="App">
      <header className="App-header">
      {domArray}
      </header>
    </div>
  );
}

export default App;
