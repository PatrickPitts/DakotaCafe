import React from "react";

function FoodMenuCart(props){
    const{cart,} = props;
    return(
        <ul>
        <li>
            <h1>Your Order:</h1>
            <hr style={{width: "80%"}}/>
        </li>
        <li>
            <table style={{borderBottom: "2px solid black", marginLeft: "10%"}}>
                <tr>
                    <td class="item">Item 1</td>
                    <td class="cost">$XX.XX</td>
                </tr>
                <tr>
                    <td class="item">Item 2</td>
                    <td class="cost">$XX.XX</td>
                </tr>
                <tr>
                    <td class="item">Item 3</td>
                    <td class="cost">$XX.XX</td>
                </tr>
                <tr>
                    <td colspan="2">
                        <hr/>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td class="cost">Subtotal: $XX.XX</td>
                </tr>
                <tr>
                    <td></td>
                    <td class="cost">Tax: $XX.XX</td>
                </tr>
                <tr>
                    <td></td>
                    <td class="cost"><h3>Subtotal: $XX.XX</h3></td>
                </tr>
            </table>
        </li>

    </ul>
    )
}

export default FoodMenuCart;