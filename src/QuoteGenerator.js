import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import "./QuoteGenerator.css"

function QuoteGenerator() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const getQuote = () => {
    let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let dataQuotes = data.quotes;
        //console.log(dataQuotes)
        let randomNum = Math.floor(Math.random() * dataQuotes.length);
        let randomQuote = dataQuotes[randomNum];

        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      });
  };

  useEffect(() => {
    getQuote();
  },[]);

  const handleClick = () => {
    getQuote();
  };

  return (

    <div>
      <div className="container">
        <div className="d-flex justify-content-center align-items-center">
        <div className="col-sm-3">
          <div className="card">
            <div className="card-body">
              <span id="quote">{quote}</span><br></br>
              <span id="author"><b>{author}</b></span>
              <div id="button" >
              <Button variant="primary" onClick={handleClick}>New Quote</Button>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div id="quote-box">
    //   <div id="text">
    //     <p>{quote}</p>
    //   </div>
    //   <div id="author">
    //     <p>{author}</p>
    //   </div>
    //   <Button  variant="outline-primary" id="new-quote" onClick={handleClick}>
    //     New Quote
    //   </Button>
    // </div>
  );
}

export default QuoteGenerator;
