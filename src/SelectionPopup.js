import React from "react";

const SelectionPopup = (props) => {

    let{handlePopupSubmit,} = props
    let popupStyle={
        position:"fixed",
        background:"#00000050",
        width:"100%",
        height:"100vh",
        top:"0",
        left:"0"
    }

    let popupPanelStyle={
        position:"relative",
        padding:"32px",
        width:"80%",
        maxWidth:"640px",
        backgroundColor:"White"
    }
    return(
        <div style={popupStyle} className={"selection-popup"}>
            <div style={popupPanelStyle}>
                <button onClick={()=>handlePopupSubmit(props.choice)}>Add to Cart</button>
                {props.choice["foodName"]}
            </div>
        </div>
    )
}

export default SelectionPopup;