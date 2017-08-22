import React from 'react';
import ReactDOM from 'react-dom';
import ContentContainer from './Containers/ContentContainer.jsx';
import FontAwesome from 'react-fontawesome';



window.onload = function() {
  ReactDOM.render(
  	<ContentContainer />,
  	document.getElementById('app')
    )
}