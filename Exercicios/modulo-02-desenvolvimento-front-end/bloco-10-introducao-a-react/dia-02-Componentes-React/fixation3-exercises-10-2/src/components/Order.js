// arquivo Order.js
import React from 'react';

class Order extends React.Component {
  render() {
    console.log(this.props);
    const { product } = this.props;
    // const produto = this.props.product;
    return (
      <div className="order">
        <hr />
        <p> Email: {product.user} </p>
        <p>Produto: {product.product} </p>
        <p> Preço: {product.price.value} {product.price.currency}</p>
        <hr />
      </div>
    );
  }
}

export default Order;