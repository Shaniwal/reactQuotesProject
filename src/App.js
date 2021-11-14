import axios from "axios";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: "",
    };
  }
  componentDidMount() {
    this.genQuote();
  }
  async genQuote() {
    const response = await axios.get("https://type.fit/api/quotes", {
      params: {
        crossDomain: true,
      },
    });

    const quotes = response.data;
    const num = Math.floor(Math.random() * quotes.length);
    console.log(quotes[num].text);
    console.log(quotes[num].author);
    this.setState({
      quote: quotes[num].text,
      author: quotes[num].author,
    });
  }
  handleClick = () => {
    this.genQuote();
  };

  render() {
    const quote = this.state.quote;
    const author = this.state.author;
    return (
      <div id="quote-box" className="ui container segment">
        <h1 id="text">{this.state.quote}</h1>
        <h3 id="author">{this.state.author}</h3>
        <button
          id="new-quote"
          className="ui labeled icon button"
          onClick={this.handleClick}
        >
          <i className="right arrow icon"></i>
          Next
        </button>
        <a
          id="tweet-quote"
          href={`twitter.com/intent/tweet?text=${quote} ${author}`}
          target="_blank"
          rel="noreferrer"
        >
          <i className="twitter icon"></i>
        </a>
      </div>
    );
  }
}
export default App;
