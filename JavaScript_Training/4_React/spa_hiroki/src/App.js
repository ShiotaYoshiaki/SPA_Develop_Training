import React from 'react';
import logo from './logo.svg';
import './App.css';
import RedButton from './js/training/components/RedButton';

function App() {

  const domArray = [];

    for (let i = 1; i <= 10; i += 1) {
      domArray.push(<RedButton param={i}/>)
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
