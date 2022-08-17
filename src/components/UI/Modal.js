import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import Card from "./Card";
import classes from "./Modal.module.css";

function Backdrop(props) {
  return <div className={classes.backdrop} />;
}

function ModalOverlay(props) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
}

const portalElement = document.getElementById("overlays");

function Modal(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
      <ModalOverlay>{props.children}</ModalOverlay>
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
    </React.Fragment>
  );
}

export default Modal;
