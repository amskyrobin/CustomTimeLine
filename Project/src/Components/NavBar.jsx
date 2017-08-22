import React from 'react';
import FontAwesome from 'react-fontawesome';

class NavBar extends React.Component {

	constructor(props){
		super(props)
	}

	
	render () {
		return (
				<div className="navbar">
					<ul>	
						<li onClick={() => {this.props.initScroll("content-one")}}>69 Years of Dividends</li>
						<li onClick={ () => {this.props.initScroll("content-two")}}>Compounding = More Shares</li>
						<li onClick={() => {this.props.initScroll("content-three")}}>Impressive Returns Following Downturns</li>
						<li onClick={() => {this.props.initScroll("content-four")}}>Performance Across Economic Environments</li>
						<li onClick={() => {this.props.initScroll("content-five")}}>Flexible Approach</li>
					</ul>
				</div>

			)
	}



}

export default NavBar;