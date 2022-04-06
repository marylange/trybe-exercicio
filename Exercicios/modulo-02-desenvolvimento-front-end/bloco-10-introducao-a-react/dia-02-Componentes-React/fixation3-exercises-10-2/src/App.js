// arquivo App.js, criado pelo create-react-app, modificado
import React, { Component } from 'react';
import Order from './components/Order';
import './App.css';

class App extends Component {
  render () {
    const headphone = {
      id: 102,
      user: "cena@gmail.com",
      product: "Razer Headphone",
      price: {
        value: 99.99,
        currency: "dollars",
      }
    };

    const energyDrink = {
      id: 77,
      user: "cena@gmail.com",
      product: "Monster 500mL",
      price: {
        value: 9.99,
        currency: "dollars"
      }
    };

    return (
      <div className="App">
        <h1> Orders recently created </h1>
         <Order product={ headphone }/>
         <Order product={ energyDrink }/>
      </div>
    );
  };
};

export default App;
