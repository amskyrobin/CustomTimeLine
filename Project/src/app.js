import React from 'react';
import ReactDOM from 'react-dom';
import ContentContainer from './Containers/ContentContainer.jsx';



window.onload = function() {
  ReactDOM.render(
  	<ContentContainer />,
  	document.getElementById('app')
    )
}