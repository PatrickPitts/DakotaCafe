import './App.css';
import MenuItem from "./MenuItem";
import React, {useState} from "react";
import allMenuSections from './menuoptions.json';
import FoodMenu from "./FoodMenu";
import SelectionPopup from "./SelectionPopup";


function App() {

    const [chosenType, setChosenType] = useState("breakfast")
    const [cart, setCart] = useState({});
    const [menuSectionPopup, setMenuSectionPopup] = useState(null);

    const buildMenuSections = (mealType) => {
        return Object.keys(allMenuSections[mealType]).map((key, val) => {
            let obj = allMenuSections[mealType][key];
            return <MenuItem
                choiceObj={obj}
                key={obj["foodName"]}
                handlePopup={handlePopup}
            />
        });
    }

    const [menuSections, setMenuSections] = useState(buildMenuSections("breakfast"))


    function updateMenuSection(mealType) {
        setMenuSections(buildMenuSections(mealType));
        setChosenType(mealType)
    }

    function handlePopupSubmit(choice){
        // console.log("closing")
        // console.log(choice)
        setMenuSectionPopup(null);
        setCart({...cart, choice})
        alert(JSON.stringify(cart))
    }


    function handlePopup(choice) {
        console.log("opening")

        if (menuSectionPopup === null) {
            setMenuSectionPopup(<SelectionPopup
                handlePopupSubmit={handlePopupSubmit}
                setCart={setCart}
                choice={choice}
            />);
        } else {
            console.log(choice)

        }
    }

    return (
        <FoodMenu
            menuSections={menuSections}
            mealTypes={Object.keys(allMenuSections)}
            updateMenuSection={updateMenuSection}
            chosenType={chosenType}
            menuSectionPopup={menuSectionPopup}
            setMenuSectionPopup={setMenuSectionPopup}
            handlePopup={handlePopup}
            cart={cart}
        />
    );
}

export default App;
