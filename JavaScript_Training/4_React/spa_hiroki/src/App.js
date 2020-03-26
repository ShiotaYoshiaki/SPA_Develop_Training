import React from 'react';
import logo from './logo.svg';
import './App.css';
import FlexibleButton from './js/training/components/FlexibleButton';

function App() {

  const domArray = [];

    for (let i = 100; i <= 180; i += 20) {
      domArray.push(<FlexibleButton  width={i} />)
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
