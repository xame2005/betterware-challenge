import Header from "./components/Header";
import Main from "./components/Main";
import Basket from "./components/Basket";

import data from "./data";
import { useState } from "react";

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((p) => p.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((p) =>
          p.id === product.id ? { ...exist, qty: exist.qty + 1 } : p
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  return (
    <div className="App">
      <Header></Header>
      <div className="row">
        <Main onAdd={onAdd} products={products}></Main>
        <Basket onAdd={onAdd} cartItems={cartItems}></Basket>
      </div>
    </div>
  );
}

export default App;
