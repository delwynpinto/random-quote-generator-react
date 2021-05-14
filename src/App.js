import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import Backdrop from './Backdrop';
import React from 'react';
import quoteData from './quoteData.json'

library.add(fab, faQuoteLeft);

class App extends React.Component {
	constructor(props) {
		super(props);

		this.newQuote = this.newQuote.bind(this);

		const initQuoteData = quoteData[ Math.floor(Math.random() * 4) ];		
		this.state = {
			quote : initQuoteData.quote,
			author : initQuoteData.author,
			colorCode : initQuoteData.colorCode
		};
	}

	newQuote() {
		const index = Math.floor(Math.random() * 4);
		this.setState({
			quote : quoteData[index].quote,
			author : quoteData[index].author,
			colorCode : quoteData[index].colorCode
		});
	}

	render() {
		return (
			<Backdrop 
				quote = {this.state.quote}
				author = {this.state.author}
				colorCode = {this.state.colorCode}
				newQuote = {this.newQuote}
			/>
		);
	}

}


export default App;
