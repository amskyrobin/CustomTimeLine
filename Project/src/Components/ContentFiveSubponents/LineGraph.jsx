import React from 'react';
import * as d3 from 'd3';
import ReactDOM from 'react-dom';


function createLineGraph(dom, props) {

var width = props.width;
var height = props.height;

var parseTime = d3.timeParse("%b-%y");	
var formatTime = 
var data = d3.csv('ten-year-asset-allocation.csv', function(error, data){
	
	data.forEach(function(d){
		d.Date = parseTime(d.Date)
		console.log(d.Date)
		d.count = +d.count	
		

	})
})

var x = d3.scaleTime()
		.rangeRound([0, width])

		console.log(x)

var y = d3.scaleLinear()
		.rangeRound([height, 0])

var line = d3.line()
.x(function(d){return x(d.Date)})
.y(function(d){return y(d.Equity)})












	


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