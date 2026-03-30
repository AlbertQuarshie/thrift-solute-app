import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="border p-4 rounded shadow border-[#626F8C]">
      <img src={product.image} alt="" className="h-40 mx-auto" />
      <h2 className="text-sm mt-2">{product.title}</h2>
      <p className="font-bold text-red-500">${product.price}</p>

      <div className="flex justify-between mt-2">
        <Link to={`/products/${product.id}`} className="text-blue-500">
          View
        </Link>

        <button
          onClick={() => addToCart(product)}
          className="bg-green-500 text-white px-2 py-1"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default ProductCard;