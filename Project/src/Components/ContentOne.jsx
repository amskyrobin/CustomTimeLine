import React from 'react';


class ContentOne extends React.Component {

	contructor(props) {

	}

	render () {
		return (
		
		<div className ="content-one">
			<div className="timeline-container">
				<button>press</button>
					<div className="year-container">
					<div className="year">1948</div>
					<div className="year">1949</div>
					<div className="year">1950</div>
					<div className="year">1951</div>
					<div className="year">1952</div>
					<div className="year">1953</div>
				</div>	
				<button>press</button>
			</div>
		</div>
		)
	}
}


export default ContentOne;