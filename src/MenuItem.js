const MenuItem = (props) => {
    const {foodName, description, imagesrc, cost} = props.choiceObj;
    const {handlePopup} = props;
    return (
        <table className="menu-choices">
            <colgroup>
                <col width="60%"/>
                <col width="20%"/>
                <col width="20%"/>
            </colgroup>
            <tr>
                <td><h3>{foodName}</h3></td>
                <td rowSpan="2"><img className="food-item-display" src={imagesrc} width="75" height="75" alt={"food"}/>
                </td>
                <td rowSpan="10">
                    <button onClick={()=>handlePopup(props.choiceObj)}>
                        <div className="add-to-cart"><img src={"/cart_icon.png"} width="120" height="63" alt={"cart"}/><br/>
                            <h3>Add To Cart</h3></div>
                    </button>
                </td>
            </tr>
            <tr>
                <td rowSpan="2" style={{textAlign: "left"}}>{description}
                </td>
            </tr>
            <tr>
                <td><h3>${cost}</h3></td>
            </tr>
        </table>
    )
}

export default MenuItem;