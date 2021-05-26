import React from 'react'
import './OrderNow.css';
import {Link} from 'react-router-dom'

function OrderNow() {
    return (
        <>
            <div id="mains">
                <div id="title">
                    <h1><u>Order Now!</u></h1>
                </div>
                <div id="ans">
                <Link to='/menu'><button id="orderbutton">UberEats</button></Link>
                <Link to='/menu'><button id="orderbutton">DoorDash</button></Link>
                <Link to='/menu'><button id="orderbutton">Takeout</button></Link>
                </div>
		    </div>
        </>
    )
};

export default OrderNow;
