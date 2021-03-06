// /src/components/Album.js

import React, { Component } from 'react';

class Album extends Component {
  render() {
    return (
      <section>
        <img src={ this.props.image } alt={ this.props.title } />
        <h2>{this.props.album.title }</h2>
        <p>{ this.props.album.releaseDate.year }</p>
        <p>
          Lançamento:
          { `${ this.props.album.releaseDate.day }/${ this.props.album.releaseDate.month }/${ this.props.album.releaseDate.year }`}
        </p>
        <p>Gravadora: { this.props.album.others.recordCompany } </p>
        <p>Formatos: { this.props.album.others.formats }</p>
      </section>
    )
  }
}

export default Album;
