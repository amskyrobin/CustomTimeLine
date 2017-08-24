import React from 'react';
import FontAwesome from 'react-fontawesome';

class NavBar extends React.Component {

	constructor(props){
		super(props)
	}

	
	render () {
		return (
				<div className="navbar">
					<p>FIVE REASONS WHY INVESTORS BUY AND HOLD FRANKLIN INCOME FUND</p>
					<ul>
						<li onClick={() => {this.props.initScroll("content-one")}}><i className= "fa fa-hourglass-start fa-lg"></i>69 Years of Dividends</li>

						<li onClick={ () => {this.props.initScroll("content-two")}}><i className= "fa fa-plus-square fa-lg"></i>Compounding = More Shares</li>

						<li onClick={() => {this.props.initScroll("content-three")}}><i className= "fa fa-line-chart fa-lg"></i>Impressive Returns Following Downturns</li>

						<li onClick={() => {this.props.initScroll("content-four")}}><i className= "fa fa-area-chart fa-lg"></i>Performance Across Economic Environments</li>

						<li onClick={() => {this.props.initScroll("content-five")}}><i className= "fa fa-pie-chart fa-lg"></i>A Flexible Approach</li>
					</ul>
				</div>

			)
	}



}

export default NavBar;