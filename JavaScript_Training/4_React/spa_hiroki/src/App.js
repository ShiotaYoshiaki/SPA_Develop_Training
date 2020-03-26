import React from 'react';
import logo from './logo.svg';
import './App.css';
import FlexibleButton from './js/training/components/FlexibleButton';

function App() {

  const domArray = [];

    for (let i = 100, count = 1; count <= 5;  i += 20,count += 1) {
     
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
