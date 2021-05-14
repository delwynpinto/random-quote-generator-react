import './App.css';
import React from 'react';

class QuoteBoxFooter extends React.Component {
	constructor(props) {
		super(props)		
	}

	tweetURL="https://twitter.com/intent/tweet?hashtags=quotes&text=" + encodeURIComponent('"' + this.props.quote + '" ' + this.props.author);

	render() {
		return (
			<div className="quote-box-footer" >
				<a id="tweet-quote" 
				href= {this.tweetURL}
				className="social-button" style={{backgroundColor: this.props.colorCode}}> 
					<i className="fa fa-twitter"></i> 
				</a>
				{/* <a className="social-button" style={{backgroundColor: this.props.colorCode}}> <i className="fa fa-tumblr"></i> </a> */}
				<button id="new-quote" onClick={this.props.newQuote} className="social-button new-quote" style={{backgroundColor: this.props.colorCode}}>
					New Quote
				</button>
			</div>
		);
	}
	 
}

export default QuoteBoxFooter;
