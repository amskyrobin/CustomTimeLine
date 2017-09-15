import React from 'react';
import * as d3 from 'd3';
import ReactDOM from 'react-dom';

function createChart(dom, props){



	var width = props.width;
  	var height = props.height;
    	width = width + 200;

      var data = props.data;
      // console.log(props)

//takes data and returns the total value of the dataset (100) 
  var sum = data.reduce(function(memo, num){ return memo + num.count; }, 0);
  // console.log(sum);

//selects the dom appends svg element. The "g" (container) element groups svg shapes that are created together and they will move together accordingly
  var chart = d3.select(dom).append('svg').attr('class', 'd3').attr('width', width).attr('height', height)
        .append("g")
          .attr("transform", "translate(" + (props.width/2) + "," + (height/2) + ")");
  

// draws the pie charts innner and outer circles 
  var outerRadius = props.width/2.2;
  var innerRadius = props.width/8;
  var arc = d3.arc()
      .outerRadius(outerRadius)
      .innerRadius(innerRadius);

//.pie creates angles needed for each datum
  var colors = ['#FD9827', '#DA3B21', '#3669C9', '#1D9524', '#971497'];
  var pie = d3.pie()
      .value(function (d) { return d.count; });

// binds the data to the current selection (the arc)

  var g = chart.selectAll(".arc")
        .data(pie(data))
        .enter().append("g")
        .attr("class", "arc")


// the animation that bounces the pie chart segment out 

        .on('mouseover', function (d, i) {
          d3.select(this)
            .transition()
            .duration(500)
            .ease(d3.easeBounce)
            .attr('transform', function (d) {
              var dist = 10;
              d.midAngle = ((d.endAngle - d.startAngle) / 2) + d.startAngle;
              var x = Math.sin(d.midAngle) * dist;
              var y = -Math.cos(d.midAngle) * dist;
              return 'translate(' + x + ',' + y + ')';
            });

//animation for putting the percentage in the middle of the pie chart when segement is selected


          d3.select(this).append("text").style("fill", function(d) { return colors[i]; }).attr("id", "percent")
          .attr('transform', "translate(0,-5)")
          .attr("text-anchor", "middle").attr("dy", ".35em").style("font", "bold 15px Arial")
          .text(function(d) { return (((d.value/sum)*100).toFixed(1) + " %"); });

//turns the unselected segments opacity down (fades them out)          
          g.filter(function(e) { return e.value != d.value; }).style('opacity',0.5);
          
        
//on mouse out removes the transition and percentage number from showing

        }).on('mouseout', function (d, i) {
            d3.select(this)
            .transition()
            .duration(500)
            .ease(d3.easeBounce)
            .attr('transform', 'translate(0,0)');
            d3.select("#percent").remove();
            g.filter(function(e) { return e.value != d.value; }).style('opacity',1)
          });

//creates the path and animations

  g.append("path")
    .style("fill", function(d, i) { return colors[i]; })
    .transition().delay(function(d, i) { return i * 800; }).duration(500)
    .attrTween('d', function(d) {
        console.log(d)
         var i = d3.interpolate(d.startAngle, d.endAngle);
         return function(t) {
             d.endAngle = i(t);
           return arc(d);
         }
    });


// adds text to the center of each arc

  var center = 
  g.filter(function(d) { return d.endAngle - d.startAngle > .1; }).append("text").style("fill", "white")
    .attr('transform', function(d){
      return "translate(" + arc.centroid(d) + ")";
    })
    .attr("text-anchor", "middle").attr("dy", ".35em")
    .text(function(d) { return d.value; });

//  bellow creates the legend 

    var legend = chart.selectAll(".legend")
    .data(data)
    .enter().append("g")
    .attr("class", "legend")
    .attr("transform", function (d, i) {
    return "translate(150," + (-i * 20) + ")";
    });

    var rect = legend.append("rect")
        .attr("width", 18)
        .attr("height", 18)
        .style("fill", function(d, i) { return colors[i]; }).style('opacity', 0);

    var name = legend.append("text")
        .attr("x", 24)
        .attr("y", 12)
        .text(function (d) {
          var text = d.name;
          if(text.length >30){
            text = text.substring(0,26);
            text = text + '...';
          }
        return text;
    }).style('opacity', 0);


 //calls the animations for the legend text and key       
    rect.transition().delay(function(d, i) { return i * 400; }).duration(1000).style('opacity',1);
    name.transition().delay(function(d, i) { return i * 400; }).duration(1000).style('opacity',1);
 
};



class PieChart extends React.Component {

	constructor(props){
		super(props)
	}

	static get defaultProps () {
		return {
			width: 300,
			height: 350,
			title: "",
			Legend: true
		}
	}



	render () {
    // console.log(this.props)
		return (
			<div>
			</div>
			)
	}
	componentDidMount () {
		var dom = ReactDOM.findDOMNode(this);
		// console.log(dom)
		createChart(dom, this.props)

	}


	  shouldComponentUpdate () {
      var dom =  ReactDOM.findDOMNode(this);
      // console.log(dom)
      createChart(dom, this.props);
      return false;
  }


}

export default PieChart;