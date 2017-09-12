import React from 'react';
import * as d3 from 'd3';
import ReactDOM from 'react-dom';

class LineGraph extends React.Component {

	constructor(props){
		super(props)
	}



	static get defaultProps () {
		return {
			width: 800,
			height: 400,
			title: "",
			Legend: true
		}
	}

	render (){
		return (
			<div>
			</div>
			)
	}


}

export default LineGraph;