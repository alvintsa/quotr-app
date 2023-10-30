import "../../../App.css";
import "./QuoteGen.css";
import React, { useEffect, useState } from "react";
import axios from "axios";






function QuoteGen() {

    const api_url = "https://zenquotes.io/api/quotes/";

    const [quotes, set_quotes] = useState(null);
    const category = 'inspirational';
    const apikey = "HT/Rxb49uwcMk9yxRAThgA==CHd6J1z35XpE6eou"; // Replace with your actual API key
    const request_interval = 1000; // Set your desired request interval (e.g., 1 second)
    const handle_click = () => {
        alert("Button Clicked");
    }
  
    const get_data = async () => {
      try {
        const response = await axios.get(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
          headers: {
            'X-Api-Key': apikey,
          },
        });
  
        if (response.status === 200) {
          set_quotes(response.data[0]);
        }
      } catch (error) {
        console.error('Error fetching quotes:', error);
      }
    };
  
    // useEffect(() => {
    //   // Initially fetch data
    //   get_data();
  
    //   // Set up an interval to fetch data periodically within the rate limit
    //   const interval_time = setInterval(() => {
    //     get_data();
    //   }, request_interval);
  
    //   return () => {
    //     // Clear the interval when the component unmounts
    //     clearInterval(interval_time);
    //   };
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

            {/*"Quote goes here'" <br></br>- Author goes here*/}
            </div>

   
   
       

            {/* <img src = "/images/image1.png" alt = "Centered Image"/> */}
            {/* <h1>test</h1>
            <p>test</p> */}
            {/*<div className = "quote_btns">
                
                <Button className = "btns" buttonStyle = "btn--outline"
                buttonSize = "btn--large">GET STARTED
                </Button>
                custom 'Button' class or 'Button' React Element from Button.js, buttonStyle is
                 also a custom element so cool!
                <Button className = "btns" buttonStyle = "btn--outline"
                buttonSize = "btn--large">GENERATE QUOTE!
                <i className = "far fa-play-circle"/>
        </Button>
        </div>*/}

            <div className = "quote_button">
                <button onClick={get_data}>Generate a quote!</button>
            </div>
        
        </div>
    </div>

    );
}

export default QuoteGen;