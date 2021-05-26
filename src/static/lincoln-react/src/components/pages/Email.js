import React from 'react'
import './Email.css'
import Popup from '../Popup';
import { useState } from 'react';

function Email() {
    const [buttonPopup, setButtonPopup] = useState(false);
    return (
        <>
            <div id="main">
                <form>
                <div>
                    <h1 id="head1"><u>Email Us!</u></h1>
                        <h2 id="head2">Name</h2>
                            <input type="text" id="input"></input>
                        <h2 id="head2">Return Email</h2>
                            <input type="text" id="input"></input>
                        <h2 id="head2">Topic</h2>
                            <input type="text" id="input"></input>
                        <h2 id="head2">Your Message</h2>
                            <textarea id="message" rows="8" cols="54"></textarea>
                </div>
                <div id="emailsubmit">
                    <button id="emailbutton" type="reset" value="Reset" onClick={() => setButtonPopup(true)}>Submit</button>
                    <Popup trigger={buttonPopup}>
                        <h1>Email Submitted!</h1>
                    </Popup>
                </div>
                </form>
            </div>
        </>
    )
}

export default Email
