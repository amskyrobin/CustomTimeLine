import React from 'react';
import FontAwesome from 'react-fontawesome';

var Splash = function (props) {
	return (
		<div className="splash">
			<h1>Franklin Income Fund </h1>
			<FontAwesome
			className='super-crazy-colours'
			name='rocket'
			size="2x"
			spin
			style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
			/>
		</div>
		)
}

export default Splash;