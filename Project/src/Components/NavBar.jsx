import React from 'react';


class NavBar extends React.Component {

	constructor(props){
		super(props)
	}

	
	render () {
		return (
				<div className="navbar">
					<ul>	
						<li onClick={() => {this.props.initScroll("content-one")}}>Dividends</li>
						<li onClick={ () => {this.props.initScroll("content-two")}}>Compounding Shares</li>
						<li onClick={() => {this.props.initScroll("content-three")}}>Impressive Returns</li>
						<li onClick={() => {this.props.initScroll("content-four")}}>Historical Performance</li>
						<li onClick={() => {this.props.initScroll("content-five")}}>Flexible Approach</li>
					</ul>
				</div>

			)
	}



}

export default NavBar;