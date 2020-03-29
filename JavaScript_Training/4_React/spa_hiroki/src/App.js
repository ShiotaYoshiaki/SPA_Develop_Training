import React from 'react';
import logo from './logo.svg';
import './App.css';
import DifficultButton from './js/training/components/DifficultButton';

function App() {

  const domArray = [];
  

    for (let i = 100, count = 1 ; count <= 10;  i += 20,count += 1) {

     

      if (count % 3 === 0) {

        domArray.push( <DifficultButton width={i} backgroundColor={'red'} param={count}/>)

       } else if (count % 4 === 0) {

        domArray.push( <DifficultButton width={i} backgroundColor={'blue'} param={'!!'}/>)

       } else {

        domArray.push( <DifficultButton width={i} backgroundColor={'blue'} param={count}/>)

       }
    
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