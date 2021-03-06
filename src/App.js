import React, { Component } from 'react';
import Header from './assets/js/Header';
import Filter from './assets/js/Filter';
import Listings from './assets/js/Listings';
import listingsData from './assets/js/data/listingsData.js';
import './assets/styles/main.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			listingsData,
			city: 'All',
			bedrooms: 0,
			housetype: 'All',
			min_price: 0,
			max_price: 10000000,
			min_floor_space: 0,
			max_floor_space: 2000,
			ensuite: false,
			fireplace: false,
			garage: false,
			filteredData: listingsData,
			populateFormsData: '',
			sortby: 'price-dsc',
			view: 'grid',
			search: '',
			filterOpen: false
		};
		this.change = this.change.bind(this);
		this.filteredData = this.filteredData.bind(this);
		this.populateForms = this.populateForms.bind(this);
		this.changeViewGrid = this.changeViewGrid.bind(this);
		this.changeViewList = this.changeViewList.bind(this);
		this.toogleFilter = this.toogleFilter.bind(this);
	}

	componentWillMount() {
		let listingsData = this.state.listingsData.sort((a, b) => {
			return a.price - b.price;
		});

		this.changeViewGrid();
		this.changeViewList();
		this.setState({ listingsData });
	}

	change(event) {
		let name = event.target.name;
		let value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
		this.setState(
			{
				[name]: value
			},
			() => {
				console.log(this.state);
				this.filteredData();
			}
		);
	}

	filteredData() {
		let newData = this.state.listingsData.filter((item) => {
			return (
				item.price >= this.state.min_price &&
				item.price <= this.state.max_price &&
				item.space >= this.state.min_floor_space &&
				item.space <= this.state.max_floor_space &&
				item.rooms >= this.state.bedrooms
			);
		});

		if (this.state.city !== 'All') {
			newData = newData.filter((item) => {
				return item.city === this.state.city;
			});
		}

		if (this.state.housetype !== 'All') {
			newData = newData.filter((item) => {
				return item.housetype === this.state.housetype;
			});
		}

		if (this.state.sortby === 'price-dsc') {
			newData = newData.sort((a, b) => {
				return a.price - b.price;
			});
		}

		if (this.state.sortby === 'price-asc') {
			newData = newData.sort((a, b) => {
				return b.price - a.price;
			});
		}

		if (this.state.search !== '') {
			newData = newData.filter((item) => {
				let city = item.city.toLowerCase();
				let searchText = this.state.search.toLocaleLowerCase();
				let n = city.match(searchText);

				if (n !== null) {
					return true;
				}
			});
		}

		let extras = this.state.listingsData.map((item) => {
			return item.extras;
		});
		let extrasN = [];
		extrasN = extrasN.concat(...extras);
		extrasN = new Set(extrasN);
		extrasN = [ ...extrasN ];
		console.log(extrasN);

		let { ensuite, fireplace, garage } = this.state;
		if (ensuite !== false) {
			newData = newData.filter((item, index) => {
				return item.extras.indexOf('ensuite') >= 0;
			});
		}
		if (fireplace !== false) {
			newData = newData.filter((item, index) => {
				return item.extras.indexOf('fireplace') >= 0;
			});
		}
		if (garage !== false) {
			newData = newData.filter((item, index) => {
				return item.extras.indexOf('garage') >= 0;
			});
		}

		this.setState({ filteredData: newData });
	}

	populateForms() {
		//Cities
		let cities = this.state.listingsData.map((item) => {
			return item.city;
		});
		cities = new Set(cities);
		cities = [ ...cities ];
		cities = cities.sort();

		//House Type
		let houseTypes = this.state.listingsData.map((item) => {
			return item.housetype;
		});
		houseTypes = new Set(houseTypes);
		houseTypes = [ ...houseTypes ];
		houseTypes = houseTypes.sort();

		//bedrooms
		let bedrooms = this.state.listingsData.map((item) => {
			return item.rooms;
		});
		bedrooms = new Set(bedrooms);
		bedrooms = [ ...bedrooms ];
		bedrooms = bedrooms.sort();

		this.setState(
			{
				populateFormsData: {
					houseTypes,
					bedrooms,
					cities
				}
			},
			() => {
				console.log(this.state);
			}
		);
	}

	changeViewGrid() {
		this.setState({ view: 'grid' });
		console.log(this.state.view);
	}

	changeViewList() {
		this.setState({ view: 'list' });
		console.log(this.state.view);
	}

	toogleFilter() {
		this.setState({
			filterOpen: !this.state.filterOpen
		});
	}

	render() {
		const filterPosition = this.state.filterOpen ? 'absolute' : 'relative';
		return (
			<div className="App">
				<Header />
				<div className="filterBtn" onClick={this.toogleFilter}>
					F<br />I<br />L<br />T<br />E<br />R
				</div>
				<section id="content-area">
					<Filter
						change={this.change}
						globalState={this.state}
						populateAction={this.populateForms}
						position={filterPosition}
					/>
					<Listings
						listingsData={this.state.filteredData}
						change={this.change}
						globalState={this.state}
						changeViewGrid={this.changeViewGrid}
						changeViewList={this.changeViewList}
					/>
				</section>
			</div>
		);
	}
}

export default App;
