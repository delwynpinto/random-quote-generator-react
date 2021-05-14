import './App.css';
import QuoteBox from './QuoteBox'


function Backdrop(props) {
	return (
		<div id="Backdrop" className="backdrop" style={{backgroundColor: props.colorCode}}>
			<QuoteBox 
				quote = {props.quote}
				author = {props.author}
				colorCode = {props.colorCode} 
				newQuote = {props.newQuote}
			/>
		</div>
	);
  
}

export default Backdrop;
