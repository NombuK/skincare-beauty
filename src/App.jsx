import "animate.css";
import Home from "./component/Home";
import Header from "./component/Header";
import About from "./component/About";
import Products from "./component/Products";
import Review from "./component/Review";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import React from "react";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Products />
      <Review />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
