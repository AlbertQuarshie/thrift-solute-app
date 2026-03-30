import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">{product.title}</h1>
      <img src={product.image} className="h-60 my-4" />
      <p>{product.description}</p>
      <p className="font-bold mt-2">${product.price}</p>

      <button
        onClick={() => addToCart(product)}
        className="bg-green-500 text-white px-4 py-2 mt-3"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;