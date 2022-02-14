import Cabecalho from './components/Cabecalho'
import Fita from './components/Fita'
import './App.css';
import Conteudo from './components/Conteudo'
import React from 'react'

function App() {
  return (
    <div className="App">
          <Cabecalho />
          <Fita />
          <Conteudo />
    </div>
  );
}

export default App;
