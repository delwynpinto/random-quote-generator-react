import './App.css';
import QuoteText from './QuoteText'
import QuoteAuthor from './Author'
import QuoteBoxFooter from './QuoteBoxFooter'

function QuoteBox(props) {
	return (
		<div id="quote-container" className="quote-container">
			<div id="quote-box" className="quote-box">
				<QuoteText 
					quote = {props.quote}
					colorCode = {props.colorCode}
				/>
				<div className="author-container">
					<QuoteAuthor 
						author= {props.author} 
						colorCode = {props.colorCode}
					/>
				</div> 
				<div className="footer-container">
					<QuoteBoxFooter colorCode = {props.colorCode} newQuote = {props.newQuote}/>
				</div>
			</div>
						
		</div>
	);
  
}
export default QuoteBox;
