import React from "react";
import Button from "./Button";
import Card from "./Card";
import classes from "./Modal.module.css";

function Modal(props) {
    return (
        <Card className={props.className}>
            <header>
                <h2>{props.title}</h2>
            </header>
            <body>
                <p>{props.message}</p>
            </body>
            <footer>
                <Button buttonText="OK" />
            </footer>
        </Card>
    );
}

export default Modal;