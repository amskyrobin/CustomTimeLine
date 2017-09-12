import React from 'react';
import PieChart from './ContentFiveSubponents/PieChart.jsx';
import LineGraph from './ContentFiveSubponents/LineGraph.jsx';



class ContentFive extends React.Component {

	constructor(props) {
		super(props)

	}







	render () {

	var dataOne = 
		[
			{name: "fixed income", count: 68},
			{name: "cash", count: 1 },
			{name: "equity", count: 31}
		];

	

	var dataTwo =
		[
			{name: "fixed income", count: 30},
			{name: "cash", count: 40 },
			{name: "equity", count: 30}
		];

	

	var dataThree =
		[
			{name: "fixed income", count: 60},
			{name: "cash", count: 12 },
			{name: "equity", count: 28}
		];

		return (


			<div className="content-five">
				<LineGraph />
				<PieChart data={dataOne}/>
				<PieChart data={dataTwo}/>
				<PieChart data={dataThree}/>
			</div>
			)
	}
}



	


export default ContentFive;