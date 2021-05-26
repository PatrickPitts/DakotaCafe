import React from 'react'
import {Link} from 'react-router-dom'
import './Hours.css'

function Hours() {
    return (
        <>
            <div id="hoursmain">
                <h1 id="title">Hours of Operation</h1>
                <div>
                    <h3 id="h3"><u>Days</u></h3>
                    <p id="days"><b>Monday:</b> 9 AM - 2 PM</p>
                    <p id="days"><b>Tuesday:</b> 9 AM - 2 PM</p>
                    <p id="days"><b>Wednesday:</b> 9 AM - 2 PM </p>
                    <p id="days"><b>Thursday:</b> 9 AM - 2 PM </p>
                    <p id="days"><b>Friday:</b> 9 AM - 2 PM"</p>
                    <p id="days"><b>Saturday:</b> 9 AM - 2 PM</p>
                    <p id="days"><b>Sunday:</b> 9 AM - 2 PM</p>
                </div>
                <div>
                    <h3 id="h3"><u>Times</u></h3>
                    <p id="days"><Link to='/menu'><b>Breakfast:</b></Link> 9 AM - 10 AM</p>
                    <p id="days"><Link to='/menu'><b>Lunch:</b></Link> 10 AM - 2 PM</p>
                    <p id="days"><b>Dinner:</b>N/A</p>
                </div>
		    </div>
        </>
    )
}

export default Hours
