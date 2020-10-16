import React from 'react'
import "./Login.css";
import { Link, useHistory } from"react-router-dom";

function Login() {
    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo"
                src="https://images-eu.ssl-images-amazon.com/images/G/03/gc/designs/livepreview/blue_hero_logo_noto_email_v2016_de-main._CB467020238_.png"
                alt=""
                />
         <h1>Login Page</h1> 
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                 <form>
                     <h5>E-mail</h5>
                     <input type="text" />
                     <h5>Password</h5>
                     <input type="text" />
                     <button>Sign in</button>
                 </form>
                 <p>
                     By signing you agree to Amazon's Conditions of Use & Sale.Please see our Privacy 
                     Notice, our Cookies Notice and our interest-Based Ads Notice.
                 </p>
                 <button>Create your Amazon Account</button>
                </div> 
        </div>
    );
}

export default Login;
