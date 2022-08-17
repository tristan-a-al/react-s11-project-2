import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MIN_AMOUNT = 1;
const MAX_AMOUNT = 5;

function MealItemForm(props) {
  const [isAmountValid, setIsAmountValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < MIN_AMOUNT ||
      enteredAmountNumber > MAX_AMOUNT
    ) {
      setIsAmountValid(false);
      return;
    }

    console.log("Adding to cart...");
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "" + MIN_AMOUNT,
          max: "" + MAX_AMOUNT,
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!isAmountValid && (
        <p>
          Please enter a valid amount ({MIN_AMOUNT}-{MAX_AMOUNT})
        </p>
      )}
    </form>
  );
}

export default MealItemForm;
