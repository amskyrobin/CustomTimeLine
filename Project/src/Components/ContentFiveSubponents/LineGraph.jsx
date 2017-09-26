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

var parseTime = d3.timeParse("%d-%b-%y");	

	
const sparkLine = d3.line()
    				.x(function(data) { return x(data.date);})
    				.y(function(data){return y(data.percentage)});

  var chart = d3.select(dom).append('svg').attr('class', 'd3').attr('width', width).attr('height', height)
        .append("g")
          .attr("transform", "translate(" + (props.width/2) + "," + (height/2) + ")");

}






class LineGraph extends React.Component {

	constructor(props){
		super(props)
	}



	static get defaultProps () {
		return {
			width: 1000,
			height: 500,
			title: "",
			Legend: true
		}
	}

	render (){
		return (
			<div className="line-graph-container">
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