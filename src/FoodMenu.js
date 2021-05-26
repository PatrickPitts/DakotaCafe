import React, {useState} from "react";
import FoodMenuCart from "./FoodMenuCart";

const FoodMenu = (props) => {

    const {chosenType, menuSections, mealTypes, menuSectionPopup, cart} = props
    return (
    <body>
    <nav>
        <div class="block1">Dakota Cafe</div>
        <div class="block2">
            <button>Menu</button>
            <button>Order Now</button>
            <button>Reservation</button>
            <button>Sign in</button>
        </div>
    </nav>
    {chosenType}
    {menuSectionPopup !== null && menuSectionPopup}
    <table id="main-display" style={{width: "100%"}}>
        <colgroup>
            <col span="1" style={{width: "15%", border: "2px solid black"}}/>
                <col span="1" style={{width: "65%", border: "2px solid black;"}}/>
                    <col span="1" style={{width: "20%", border: "2px solid black"}}/>

        </colgroup>
        <tbody>
        <tr>
            <td id="button-display">
                <ul>
                    {mealTypes.filter(m=>m !=="_meta").map(m=>{
                        return <li>
                            <button
                                key={m}
                                onClick={() => props.updateMenuSection(m)}>{m}</button>
                        </li>
                    })}

                </ul>
            </td>
            <td id={"menu-section-display"}>
                {menuSections}
            </td>
            <td id="cart-display">
                <FoodMenuCart cart={cart}/>

            </td>
        </tr>
        </tbody>
    </table>
    </body>
    )
}

export default FoodMenu;