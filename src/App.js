import React, {Component} from 'react';
import Header from './assets/js/Header';
import Filter from './assets/js/Filter';
import Listings from './assets/js/Listings';
import listingsData from './assets/js/data/listingsData.js'
import './assets/styles/main.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      listingsData,
      min_price: 0,
      max_price: 10000000,
      min_floor_space: 0,
      max_floor_space: 2000,
      filteredData: listingsData
    }
    this.change = this
      .change
      .bind(this);
    this.filteredData = this
      .filteredData
      .bind(this);
  }

  change(event) {
    let name = event.target.name;
    let value = (event.target.type === 'checkbox')
      ? event.target.checked
      : event.target.value;
    this.setState({
      [name]: value
    }, () => {
      console.log(this.state);
      this.filteredData();
    })
  }

  filteredData() {
    let newData = this
      .state
      .listingsData
      .filter((item) => {
        return item.price >= this.state.min_price && item.price <= this.state.max_price && item.space >= this.state.min_floor_space && item.space <= this.state.max_floor_space
      })
    this.setState({filteredData: newData})
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <section id="content-area">
          <Filter change={this.change} globalState={this.state}/>
          <Listings listingsData={this.state.filteredData}/>
        </section>
      </div>
    );
  }
}

export default App;
