// Cart Page
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Cart</h1>

      {cart.length === 0 && <p>No items in cart</p>}

      {cart.map((item, i) => (
        <div key={i} className="border p-2 my-2">
          <p>{item.title}</p>
          <p>${item.price}</p>
        </div>
      ))}

      <h2 className="mt-4 font-bold">Total: ${total.toFixed(2)}</h2>

      <Link to="/checkout" className="bg-blue-500 rounded-md text-white px-4 py-2 mt-3 inline-block">
        Go to Checkout
      </Link>
    </div>
  );
};

export default Cart;