import './App.css';
import React from 'react';
import quoteData from './quoteData.json'

class QuoteBoxFooter extends React.Component {
	constructor(props) {
		super(props)
	}



	render() {
		return (
			<div className="quote-box-footer" >
				<a id="tweet-quote" className="social-button" style={{backgroundColor: this.props.colorCode}}> <i className="fa fa-twitter"></i> </a>
				<a className="social-button" style={{backgroundColor: this.props.colorCode}}> <i className="fa fa-tumblr"></i> </a>
				<button id="new-quote" onClick={this.props.newQuote} className="social-button new-quote" style={{backgroundColor: this.props.colorCode}}>
					New Quote
				</button>
			</div>
		);
	}
	 
}

export default QuoteBoxFooter;
