import React from "react";
import { FaShoppingCart } from "react-icons/fa";

export default function CartIcon({ cart }) {
  const totalItems = cart.reduce(
    (total, cartItem) => total + cartItem.quantity,
    0
  );

  return (
    <section className="relative text-black dark:text-white md:mr-4">
      <div className=" absolute -top-5 ml-4 font-bold">{totalItems}</div>
      <FaShoppingCart className="text-xl font-bold" />
    </section>
  );
}
