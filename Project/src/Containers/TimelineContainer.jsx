import React from 'react';
import Timeline from '../Components/Timeline.jsx';

class TimelineContainer extends React.Component{

	constructor(props){
		super(props)
		this.assignDivId = this.assignDivId.bind(this); 

	}


	handleButtonClick(event){
		const button = document.getElementById('button')

	}

	assignDivId () {
		var container = document.getElementsByClassName('year-container')[0].children;
		// var containerCount = container[i].childElementCount;

		for (var i = 0; i < container.length; i++){

			container[i].id += i;
	
		}
		return console.log(container);
	}

	


	render(){
		return (
			<Timeline 
			hideYears = {this.assignDivId}/>
			)
	}
}


export default  TimelineContainer;

