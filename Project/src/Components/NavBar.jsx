import React from 'react';

class NavBar extends React.Component {

	constructor(props){
		super(props)
	}


	render () {
		return (
				<div className="navbar">
					<ul>	
						<li onClick={this.props.handleNavBarClick}>Dividends</li>
						<li onClick={this.props.handleNavBarClick}>Compounding Shares</li>
						<li onClick={this.props.handleNavBarClick}>Impressive Returns</li>
						<li onClick={this.props.handleNavBarClick}>Historical Performance</li>
						<li onClick={this.props.handleNavBarClick}>Flexible Approach</li>
					</ul>
				</div>

			)
	}



}

export default NavBar;