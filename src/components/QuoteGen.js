import "../App.css";
import "./QuoteGen.css";
import { Button } from "./Button";
import React from "react";




function QuoteGen() {
    return (
        <div className = "quote_container">
            <img src = "/images/image1.png" alt = "Centered Image"/>
            <h1>test</h1>
            <p>test</p>
            <div className = "quote_btns">
                <Button className = "btns" buttonStyle = "btn--outline"
                buttonSize = "btn--large">GET STARTED
                </Button>
                <Button className = "btns" buttonStyle = "btn--outline"
                buttonSize = "btn--large">GENERATE QUOTE!
                <i className = "farfa-play-circle"/>
                </Button>
            </div>
        
        
        </div>

    );
}

export default QuoteGen;