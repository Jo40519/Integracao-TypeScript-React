import React from 'react';
import './App.css';
import Contador from './componentes/contador';

function App() {
  return (
    <div className="App">
      <Contador valorInicial={9876} />
    </div>
  );
}

export default App;
