import React, { Component } from 'react';
import Header from './assets/js/Header';
import Sidebar from './assets/js/Sidebar';

import './assets/styles/main.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Sidebar />
      </div>
    );
  }
}

export default App;
