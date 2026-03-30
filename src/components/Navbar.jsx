// Navbar
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import "./Navbar.css";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <>
    <nav className="navbar">
      <Link to="/" className="logo">
        Thrift-Solute
      </Link>

      <div className="nav-right">
        <Link to="/products" className="nav-link">
          Products
        </Link>

        <Link to="/cart" className="cart">
          Cart
          {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
        </Link>

        {user ? (
          <div className="user-menu">
            <span onClick={() => setOpen(!open)} className="user-name">
              {user}
            </span>

            {open && (
              <div className="dropdown">
                <Link to="/checkout">Checkout</Link>
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login" className="login-btn">
            Login
          </Link>
        )}
      </div>
    </nav>
    </>
  );
};

export default Navbar;
