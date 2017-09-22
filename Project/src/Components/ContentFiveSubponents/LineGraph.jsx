import React from 'react';
import * as d3 from 'd3';
import ReactDOM from 'react-dom';


function createLineGraph(dom, props) {

var width = props.width;
var height = props.height;
var data = props.data;
var percentage = props.data.percentage
var date = props.data.date


var yScale = d3.scaleLinear()
			.domain(d3.extent(data, percentage))
			.range([height, 0]);

var xScale = d3.scaleTime()
			.domain(d3.extent(data, date ))
			.range([0, width]);

			

const selectScaledX = data => xScale(date(data));
const selectScaledY = data => yScale(percentage(data));

	
const sparkLine = d3.line()
    				.x(selectScaledX)
    				.y(selectScaledY);

const linePath = sparkLine(data);


}






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

		componentDidMount () {
		var dom = ReactDOM.findDOMNode(this);
		// console.log(dom)
		createLineGraph(dom, this.props)

	}


	  shouldComponentUpdate () {
      var dom =  ReactDOM.findDOMNode(this);
      // console.log(dom)
      createLineGraph(dom, this.props);
      return false;
  }


}

export default LineGraph;