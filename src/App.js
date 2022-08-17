import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [isShowingCart, setIsShowingCart] = useState(false);

  const showCartHandler = () => {
    setIsShowingCart(true);
  };

  const hideCartHandler = () => {
    setIsShowingCart(false);
  };

  return (
    <React.Fragment>
      {isShowingCart && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
