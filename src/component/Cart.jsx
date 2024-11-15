import React from "react";
import { FaShoppingCart, FaPlus, FaMinus } from "react-icons/fa";

export function calculateTotalItems(cart) {
  return cart.reduce((total, cartItem) => total + cartItem.quantity, 0);
}

function AdditionAndSubtraction({
  item,
  addToCart,
  removeFromCart,
  getCartQuantity,
}) {
  return (
    <div className="product-actions flex justify-around dark:mt-7 gap-4 mt-4">
      <button
        onClick={() => addToCart(item.title)}
        className="bg-brown dark:bg-gold dark:text-black w-8 h-8 rounded-full hover:bg-darkBrown dark:hover:bg-glowingGold"
      >
        <FaPlus className="ml-2" />
      </button>

      <button className="text-darkerBrown text-xl dark:text-darkerGold">
        {getCartQuantity(item.title) > 0 ? (
          <span>{getCartQuantity(item.title)}</span>
        ) : (
          <FaShoppingCart />
        )}
      </button>

      <button
        onClick={() => removeFromCart(item.title)}
        className="bg-brown dark:bg-gold dark:text-black w-8 h-8 rounded-full hover:bg-darkBrown dark:hover:bg-glowingGold"
        disabled={getCartQuantity(item.title) === 0}
      >
        <FaMinus className="ml-2" />
      </button>
    </div>
  );
}

export default AdditionAndSubtraction;
