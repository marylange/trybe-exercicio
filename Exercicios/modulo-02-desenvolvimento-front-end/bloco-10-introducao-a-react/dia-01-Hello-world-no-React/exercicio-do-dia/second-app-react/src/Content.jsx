import React, { Component } from 'react';

class Content extends Component {
  render () {
    const conteudos = [
      {
        conteudo: 'High Order Functions',
        bloco: 8,
        status: 'Aprendido'
      },
      {
        conteudo: 'Composicao de Componentes',
        bloco: 11,
        status: 'Aprendendo',
      },
      {
        conteudo: 'Composicao de Estados',
        bloco: 12,
        status: 'Aprenderei'
      },
      {
        conteudo: 'Redux',
        bloco: 16,
        status: 'Aprenderei'
      },
    ];
    return (
      conteudos.map( (itens) => (
        <div>
          <p>O conteúdo é: {itens.conteudo}</p>
          <p>Status: {itens.status}</p>
          <p>Bloco: {itens.bloco}</p>
        </div>
      ))
    )
  }
}

export default Content;
