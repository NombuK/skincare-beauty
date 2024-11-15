import "animate.css";
import Home from "./component/Home";
import Header from "./component/Header";
import About from "./component/About";
import Products from "./component/Products";
import Review from "./component/Review";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import React, { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (productTitle) => {
    const existingItem = cart.find((item) => item.title === productTitle);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.title === productTitle
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { title: productTitle, quantity: 1 }]);
    }
  };

  const removeFromCart = (productTitle) => {
    const existingItem = cart.find((item) => item.title === productTitle);
    if (existingItem && existingItem.quantity > 1) {
      setCart(
        cart.map((item) =>
          item.title === productTitle
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    } else {
      setCart(cart.filter((item) => item.title !== productTitle));
    }
  };

  const getCartQuantity = (productTitle) => {
    const item = cart.find((item) => item.title === productTitle);
    return item ? item.quantity : 0;
  };

  return (
    <>
      <Header cart={cart} />
      <Home />
      <About />
      <Products
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        getCartQuantity={getCartQuantity}
      />
      <Review />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
