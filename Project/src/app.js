import React from 'react';
import ReactDOM from 'react-dom';
import TimelineContainer from './Containers/TimelineContainer.jsx';



window.onload = function() {
  ReactDOM.render(
  	<TimelineContainer />,
  	document.getElementById('app')
    )
}