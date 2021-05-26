import React from 'react'
import Popup from '../Popup'
import { useState } from 'react';
import './Email.css'

function SignIn() {
    const [buttonPopup, setButtonPopup] = useState(false);
    return (
        <>
            <div id="main">
                <form>
                <div>
                    <h1 id="head1"><u>Sign In!</u></h1>
                        <h2 id="head2">Username</h2>
                            <input type="text" id="input"></input>
                        <h2 id="head2">Password</h2>
                            <input type="text" id="input"></input>
                </div>
                <div id="emailsubmit">
                <button id="emailbutton" type="reset" value="Reset" onClick={() => setButtonPopup(true)}>Submit</button>
                    <Popup trigger={buttonPopup}>
                        <h1>You are now signed in!</h1>
                    </Popup>
                </div>
                </form>
            </div>
        </>
    )
}

export default SignIn

