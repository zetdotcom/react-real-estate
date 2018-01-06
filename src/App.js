import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './assets/js/Header';
import Filter from './assets/js/Filter';
import Listings from './assets/js/Listings';

import './assets/styles/main.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section id="content-area">
          <Filter />
          <Listings />
        </section>
      </div>
    );
  }
}

export default App;
