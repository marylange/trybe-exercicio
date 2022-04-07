import React, { Component } from 'react';

class Image extends Component {
  render() {
    const { source, alt } = this.props;
    return (
      <div>
        <img src={ source } alt={alt} />
      </div>
    )
  }
}

export default Image;