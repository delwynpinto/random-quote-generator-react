import './App.css';

function QuoteAuthor(props) {
	return (
		<div id="author" style={{color: props.colorCode}}>
			- {props.author}
		</div>
	);
  
}

export default QuoteAuthor;
