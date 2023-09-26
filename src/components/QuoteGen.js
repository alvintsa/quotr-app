import "../App.css";
import "./QuoteGen.css";
import { Button } from "./Button";
import React, { useEffect, useState } from "react";
import axios from "axios";






function QuoteGen() {

    const api_url = "https://zenquotes.io/api/quotes/";

    const [quoteData, setQuoteData] = useState({});

    // const axios = require('axios');

    const [quotes, setQuotes] = useState(null);
    const category = 'inspirational';
    const apiKey = "HT/Rxb49uwcMk9yxRAThgA==CHd6J1z35XpE6eou"; // Replace with your actual API key
    const requestInterval = 1000; // Set your desired request interval (e.g., 1 second)
  
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
          headers: {
            'X-Api-Key': apiKey,
          },
        });
  
        if (response.status === 200) {
          setQuotes(response.data[0]);
        }
      } catch (error) {
        console.error('Error fetching quotes:', error);
      }
    };
  
    useEffect(() => {
      // Initially fetch data
      fetchData();
  
      // Set up an interval to fetch data periodically within the rate limit
      const intervalId = setInterval(() => {
        fetchData();
      }, requestInterval);
  
      return () => {
        // Clear the interval when the component unmounts
        clearInterval(intervalId);
      };
    }, []);

  
    // useEffect(() => {
    //   async function fetchQuote() {
    //     try {
    //       const response = await fetch(api_url);
    //       if (!response.ok) {
    //         throw new Error("Did not receive a response");
    //       }
    //       const data = await response.json();
    //       console.log(data);
    //       setQuoteData(data[1]); // Assuming the API returns an array of quotes, we take the first one here
    //     } catch (error) {
    //       console.error("Error fetching data:", error);
    //     }
    //   }
  
    //   fetchQuote();
    // }, []);

    return (
    <div className = "containers"> {/* react uses className, while regular html uses class*/}
        <div className = "welcome_container">
            <h1 className = "sparkle_welcome"> Welcome!</h1>
            <p className = "grab_quote"> Grab a quote below!</p>
        </div>

        <div className = "quote_container">
            <div className = "quote_content"> 
            
            {quotes && (
            <div>
            <p>{quotes.quote}</p>
            <p>- {quotes.author}</p>
            </div>
            )}

            "Quote goes here'" <br></br>- Author goes here</div>

   
            {/*{quotes.map((quote, index) => (
            <li key={index}>{quote.quote}</li>
            ))}*/}
   
       

            {/* <img src = "/images/image1.png" alt = "Centered Image"/> */}
            {/* <h1>test</h1>
            <p>test</p> */}
            <div className = "quote_btns">
                
                {/* <Button className = "btns" buttonStyle = "btn--outline"
                buttonSize = "btn--large">GET STARTED
                </Button> */}
                {/*custom 'Button' class or 'Button' React Element from Button.js, buttonStyle is
                 also a custom element so cool!*/}
                <Button className = "btns" buttonStyle = "btn--outline"
                buttonSize = "btn--large">GENERATE QUOTE!
                <i className = "far fa-play-circle"/>
                </Button>
            </div>
        
        </div>
    </div>

    );
}

export default QuoteGen;