import './App.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function QuoteText(props) {
	return (
		<div id="text" className="quote-text" style={{color: props.colorCode}}>
			<FontAwesomeIcon icon="quote-left" />
			<span> {props.quote}</span>			
		</div>
	);
  
}

export default QuoteText;
