import React from 'react';
import logo from './logo.svg';
import './App.css';
import RedButton from './js/training/components/RedButton';

function App() {

 
  return (
    <div className="App">
      <header className="App-header">
      <RedButton backgroundColor="red"/>
      <RedButton backgroundColor="blue"/>
      <RedButton backgroundColor="yellow"/>
      <RedButton backgroundColor="gray"/>
      <RedButton backgroundColor="purple"/>

      </header>
    </div>
    
    
  );


}

export default App;
