import React, { Component } from 'react';

class Filter extends Component {
	constructor() {
		super();

		this.cities = this.cities.bind(this);
		this.housetypes = this.housetypes.bind(this);
		this.bedrooms = this.bedrooms.bind(this);
	}

	componentWillMount() {
		this.props.populateAction();
	}

	cities() {
		if (this.props.globalState.populateFormsData.cities !== undefined) {
			let { cities } = this.props.globalState.populateFormsData;
			return cities.map((item, index) => {
				return (
					<option value={item} key={item}>
						{item}
					</option>
				);
			});
		}
	}

	housetypes() {
		if (this.props.globalState.populateFormsData.houseTypes !== undefined) {
			let { houseTypes } = this.props.globalState.populateFormsData;
			return houseTypes.map((item, index) => {
				return (
					<option value={item} key={item}>
						{item}
					</option>
				);
			});
		}
	}

	bedrooms() {
		if (this.props.globalState.populateFormsData.bedrooms !== undefined) {
			let { bedrooms } = this.props.globalState.populateFormsData;
			return bedrooms.map((item, index) => {
				return (
					<option value={item} key={item}>
						{item}+ bedrooms
					</option>
				);
			});
		}
	}

	render() {
		return (
			<section id="filter" style={{ position: this.props.position }}>
				<div className="inside">
					<h4>Filter</h4>
					<label htmlFor="city">City</label>
					<select name="city" className="filters city" onChange={this.props.change}>
						<option value="All">All Cities</option>
						{this.cities()}
					</select>
					<label htmlFor="city">Home Type</label>
					<select name="housetype" className=" filters housetype" onChange={this.props.change}>
						<option value="All">All Homes</option>
						{this.housetypes()}
					</select>
					<label htmlFor="city">Bedrooms</label>
					<select name="bedrooms" className="filters bedrooms" onChange={this.props.change}>
						{this.bedrooms()}
					</select>

					<div className="filters price">
						<span className="title">Price</span>
						<input
							type="text"
							name="min_price"
							className="min_price"
							onChange={this.props.change}
							value={this.props.globalState.min_price}
						/>
						<input
							type="text"
							name="max_price"
							className="max_price"
							onChange={this.props.change}
							value={this.props.globalState.max_price}
						/>
					</div>
					<div className="filters floor-space">
						<span className="title">Floor Space</span>
						<input
							type="text"
							name="min_floor_space"
							className="min_floor_space"
							onChange={this.props.change}
							value={this.props.globalState.min_floor_space}
						/>
						<input
							type="text"
							name="max_floor_space"
							className="max_floor_space"
							onChange={this.props.change}
							value={this.props.globalState.max_floor_space}
						/>
					</div>

					<div className="filters extras">
						<span className="title">Extras</span>
						<label htmlFor="extras">
							<span>ensuite</span>
							<input name="ensuite" value="ensuite" type="checkbox" onChange={this.props.change} />
						</label>

						<label htmlFor="extras">
							<span>Fireplace</span>
							<input name="fireplace" value="fireplace" type="checkbox" onChange={this.props.change} />
						</label>

						<label htmlFor="extras">
							<span>Garage</span>
							<input name="garage" value="garage" type="checkbox" onChange={this.props.change} />
						</label>
					</div>
				</div>
			</section>
		);
	}
}

export default Filter;
