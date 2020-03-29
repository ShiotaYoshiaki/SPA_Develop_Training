import React from 'react';
import logo from './logo.svg';
import './App.css';
import DifficultButton from './js/training/components/DifficultButton';

function App() {
  const domArray = [];
    for (let i = 100, count = 1 ; count <= 13;  i += 20,count += 1) {
     let colorParam = 'blue';
     let Param = count;
      if (count % 3 === 0) {
        colorParam = 'red'
       } 
      if (count % 4 === 0) {
        Param= '!!';
       } 
      domArray.push( <DifficultButton width={i} backgroundColor={colorParam} param={Param}/>)
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
