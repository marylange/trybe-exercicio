import React from 'react';
import logo from './logo.svg';
import Teste from './Teste';
import './App.css';

// const nome = 'Jorge Maravilha';
// const element = <h1>Hello, {nome}</h1>;
// const element = <h1>Hello, {nomeCompleto("Jorge", "Maravilha")}</h1>;

// function nomeCompleto (nome, sobrenome) {
//   return `${nome} ${sobrenome}`;
// }

// function helloWorld (nome, sobrenome) {
//   return <h1>Hello, {`${nome} ${sobrenome}`}</h1>;
// }

// const element = helloWorld("Jorge", "Maravilha");
// const container = <div>{element}</div>;

// abaixo aplicando className através do JSX

// const nome = 'Jorge Maravilha';
// const classe = 'hello-class';
// const element = <h1 className={classe}>Hello, {nome}</h1>;

// function App() {
//   return (
//     <div>
//     {container}
//     </div>
//   );
// }

// const JSX = "Hello, JSX";

function App() {
  return (
    <div>
      <Teste />
      <img src={logo} className='App-logo' />
    </div>
  );
}

export default App;
