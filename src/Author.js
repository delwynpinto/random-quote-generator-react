import './App.css';
import React from 'react';

function QuoteAuthor(props) {
	return (
		<div id="author" className="author" style={{color: props.colorCode}}>
			- {props.author}
		</div>
	);
  
}

export default QuoteAuthor;
