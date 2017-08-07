import React from 'react';
import ContentOne from '../Components/ContentOne.jsx';
import Splash from '../Components/Splash.jsx';

class ContentContainer extends React.Component{

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
			<div>
			<Splash />
			<ContentOne 
			hideYears = {this.assignDivId}/>
			</div>
			)
		}
}


export default  ContentContainer;

