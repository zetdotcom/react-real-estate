import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './assets/js/Header';
import Filter from './assets/js/Filter';
import Listings from './assets/js/Listings';
import listingsData from './assets/js/data/listingsData.js'
import './assets/styles/main.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      listingsData
    }
    this.change = this
      .change
      .bind(this);
  }

  change(event) {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name]: value
    }, () => {
      console.log(this.state)
    })
    console.log(event.target.value);
  }

  render() {
    console.log(this.state.listingsData)
    return (
      <div className="App">
        <Header/>
        <section id="content-area">
          <Filter change={this.change}/>
          <Listings listingsData={this.state.listingsData}/>
        </section>
      </div>
    );
  }
}

export default App;
