import React, { Component } from 'react';
import FaBars from 'react-icons/lib/fa/bars';
import logo from '../images/logo.png';

class Header extends Component {
	constructor() {
		super();
		this.state = {
			menuOpen: false,
			menuBtnBars: true
		};

		this.menuChange = this.menuChange.bind(this);
	}
	menuChange() {
		this.setState(
			{
				menuOpen: !this.state.menuOpen
			},
			() => {
				console.log(this.state.menuOpen);
			}
		);
	}
	render() {
		const open = { height: '270px' };
		const closed = { height: '53px' };
		const menuHeight = this.state.menuOpen ? open : closed;
		return (
			<div className="header" style={menuHeight}>
				<div className="logo">
					<img src={logo} />
					<p>REAL ESTATE</p>
				</div>

				<div className="nav">
					<div id="btn" className="menuBtn" onClick={this.menuChange}>
						<FaBars />
					</div>
					<div className="navMenu">
						<a href="#" onClick={this.menuChange}>
							Create Ads
						</a>
						<a href="#" onClick={this.menuChange}>
							About Us
						</a>
						<a href="#" onClick={this.menuChange}>
							Log In
						</a>
						<a href="#" className="register-btn" onClick={this.menuChange}>
							Register
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;
