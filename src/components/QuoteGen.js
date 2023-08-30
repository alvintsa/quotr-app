import "../App.css";
import "./QuoteGen.css";
import { Button } from "./Button";
import React from "react";




function QuoteGen() {
    return (
    <div className = "containers"> {/* react uses className, while regular html uses class*/}
        <div className = "welcome_container">
            <h1 className = "sparkle_welcome"> Welcome!</h1>
            <p className = "grab_quote"> Grab a quote below!</p>
        </div>

        <div className = "quote_container">
            {/* <img src = "/images/image1.png" alt = "Centered Image"/> */}
            {/* <h1>test</h1>
            <p>test</p> */}
            <div className = "quote_btns">
                {/* <Button className = "btns" buttonStyle = "btn--outline"
                buttonSize = "btn--large">GET STARTED
                </Button> */}
                {/* <Button className = "btns" buttonStyle = "btn--outline"
                buttonSize = "btn--large">GENERATE QUOTE!
                <i className = "far fa-play-circle"/>
                </Button> */}
            </div>
        
        
        </div>
    </div>

    );
}

export default QuoteGen;