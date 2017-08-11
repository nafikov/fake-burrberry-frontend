import React, { Component } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Product from './Product/'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Product/>
        <Footer/>
      </div>
    );
  }
}

export default App;
