import "../../../App.css";
import React from "react";
import "./Register.css"

function Register () {
    return (
        <>
           <div className="log_container">
                <div className="form_box">
                    {/*<div className = "button_box">
                        <div id="btn"></div>
                        <button type="button" class="t_btn" onclick="register()">Register</button>
                        <a href="./login"><button type="button" class="t_btn" onclick="login()">Log In</button></a>
    </div>*/}
                    
                        <form>
                            <div className = "input_container">
                            
                                <label>Username:
                                    <input type="text" />
                                </label>
                                
                                
                                <label>Password:
                                    <input type="password" />
                                </label>
                                
                                <button type="submit">Register</button>
                            </div>
                        </form>

                    {/*<form action="/register" id="register-form" method="post" enctype="multipart/form-data">
</form>*/}      </div>
            </div>
                
                
        </>
    );
}

export default Register;