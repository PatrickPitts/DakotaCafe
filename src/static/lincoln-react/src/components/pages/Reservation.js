import React from 'react';
import { useState } from 'react';
import './Reservation.css';
import Popup from '../Popup';

function Reservation() {
    const [buttonPopup, setButtonPopup] = useState(false);
    return (
        <>
            <div id="main">
                <form>
                <div id="body">
                    <h1 id="h1"><u>Make a Reservation!</u></h1>
                        <h2>Name</h2>
                            <input type="text" id="ui"></input>
                        <h2>Return Email or Phone</h2>
                            <div id="choose">
                                <label for="email" id="contact">Email:</label>
                                <input type="radio" name="contact" id="email"></input>
                                <label for="phone" id="contact">Phone:</label>
                                <input type="radio" name="contact" id="phone"></input>
                            </div>
                            <input type="text" id="ui"></input>
                        <h2>Date</h2>
                            <input type="date" id="date"></input>
                        <h2>Time</h2>
                            <select class="w3-select" id="ui">
                                <option value="">Desired Time</option>
                                <option value="1">9:00 AM</option>
                                <option value="2">10:00 AM</option>
                                <option value="3">11:00 AM</option>
                                <option value="4">12:00 AM</option>
                                <option value="5">1:00 PM</option>
                                <option value="6">2:00 PM</option>
                            </select>
                        <h2>People</h2>
                            <select class="w3-select" id="ui">
                                <option value="">Number of People</option>
                                <option value="1">1 person</option>
                                <option value="2">2 people</option>
                                <option value="3">3 people</option>
                                <option value="4">4 people</option>
                                <option value="5">5 people</option>
                                <option value="6">6 or more people</option>
                            </select>
                        <h2>Comments (optional)</h2>
                            <textarea id="ui_message" rows="8" cols="54"></textarea>
                </div>
                <div id="submit">
                    <button id="button" type="reset" value='Reset' onClick={() => setButtonPopup(true)}>Submit</button>
                    <Popup trigger={buttonPopup}>
                        <h1>Reservation Submitted!</h1>
                    </Popup>
                </div>
                </form>
		    </div>
        </>
    )
};

export default Reservation;
