import React from "react";
import classes from "./Header.module.css";
import imgMeals from "../../assets/meals.jpg";

function Header(props) {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <button>Cart</button>
            </header>
            <div className={classes["main-image"]}>
                <img src={imgMeals} alt="A table full of delicious food!" />
            </div>
        </React.Fragment>
    );
}
export default Header;