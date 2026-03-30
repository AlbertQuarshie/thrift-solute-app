import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">

      {/* SEARCH HERE */}
      <input
        type="text"
        placeholder="Search products..."
        className="border p-2 w-full mb-4 rounded"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filtered.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </div>
  );
};

export default Products;