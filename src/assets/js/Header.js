import React, {Component} from 'react';
import FaBars from 'react-icons/lib/fa/bars'
import logo from '../images/logo.png';

class Header extends Component {
		constructor() {
				super();
				this.state = {
						menu: 'close',
						menuBtnBars: true
				}

				this.buttonChange = this
						.buttonChange
						.bind(this);
		}
		buttonChange() {
				this.setState({
						menuBtnBars: !this.state.menuBtnBars
				})
		}
		render() {

				return (
						<div className="header">
								<div className="logo">
										<img src={logo}/>
										<p>REAL ESTATE</p>
								</div>

								<div className="nav">
										<div id="btn" className="menuBtn">
												<FaBars/>
										</div>
										<div className="navMenu">
												<a href="#">Create Ads</a>
												<a href="#">About Us</a>
												<a href="#">Log In</a>
												<a href="#" className="register-btn">
														Register
												</a>
										</div>

								</div>
						</div>
				);
		}
}

export default Header;
