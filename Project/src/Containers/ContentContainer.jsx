import React from 'react';
import ContentOne from '../Components/ContentOne.jsx';
import ContentTwo from '../Components/ContentTwo.jsx';
import ContentThree from '../Components/ContentThree.jsx';
import ContentFour from '../Components/ContentFour.jsx';
import ContentFive from '../Components/ContentFive.jsx';
import Splash from '../Components/Splash.jsx';
import NavBar from '../Components/NavBar.jsx';
import FontAwesome from 'react-fontawesome';

class ContentContainer extends React.Component{

	constructor(props){
		super(props)
		this.assignDivId = this.assignDivId.bind(this); 
		this.initScroll = this.initScroll.bind(this);



	}




	initScroll(id){
		var destination = document.getElementsByClassName(id)[0].offsetTop;
		var navButton = document.getElementsByTagName('li');
		var marginY = 0;
		var speed = 10;
		// var scroller = null;
		var counter = 0;
		var currentPosition = window.pageYOffset;
		console.log(currentPosition);


		function scroller(){
			if (destination >= currentPosition){
				counter = currentPosition += speed;
				window.scroll(0, counter)
				console.log(counter);
				setTimeout(scroller, 1)
			} else {
				clearTimeout(scroller);
			}
		}

		scroller()

		
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
			<NavBar 
			initScroll = {this.initScroll}/>
			<ContentOne 
			hideYears = {this.assignDivId}/>
			<ContentTwo />
			<ContentThree />
			<ContentFour />
			<ContentFive />
			</div>
			)
		}
}


export default  ContentContainer;

