// Checkout Page
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleOrder = () => {
   
    const order = {
      user,
      items: cart,
      total,
      date: new Date().toLocaleString(),
    };

    localStorage.setItem("lastOrder", JSON.stringify(order));

    // Clear cart
    clearCart();

    // Alert to notify user
    alert("Order placed successfully!");

    // 🔁 Redirect
    navigate("/");
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Checkout</h1>

      {cart.map((item, i) => (
        <div key={i}>
          <p>{item.title}</p>
          <p>${item.price}</p>
        </div>
      ))}

      <h2>Total: ${total.toFixed(2)}</h2>

      <button
        onClick={handleOrder}
        className="bg-green-500 text-white px-4 py-2 mt-3"
      >
        Place Order
      </button>
    </div>
  );
};

export default Checkout;