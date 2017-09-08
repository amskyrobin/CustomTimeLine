import React from 'react';
import PieChart from './ContentFiveSubponents/PieChart.jsx';



class ContentFive extends React.Component {

	constructor(props) {
		super(props)

	}







	render () {
			
	var dataOne = {
		[
			{name: "fixed income", count: 68},
			{name: "cash", count: 1 },
			{name: "equity", count: 31}
		];

	}

	var dataTwo {
		[
			{name: "fixed income", count: 68},
			{name: "cash", count: 1 },
			{name: "equity", count: 31}
		];

	}

	var dataThree{
		[
			{name: "fixed income", count: 68},
			{name: "cash", count: 1 },
			{name: "equity", count: 31}
		];

	}

		return (


			<div className="content-five">
				<PieChart dataOne={dataOne}/>
				<PieChart dataOne={dataTwo}/>
				<PieChart dataOne={dataThree}/>
			</div>
			)
	}
}


export default ContentFive;