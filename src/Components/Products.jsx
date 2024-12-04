import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/equipments/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-semibold">
          Featured Sports Equipment
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {products &&
            products.map((product) => (
              <div
                key={product._id}
                className="overflow-hidden rounded-lg bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                <img
                  src={product.image}
                  alt={product.itemName}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {product.itemName}
                  </h3>
                  <p className="text-gray-500">{product.categoryName}</p>
                  <p className="mt-2 text-lg font-semibold text-gray-900">
                    {product.price}
                  </p>
                  <Link
                    to={`/detail/${product._id}`}
                    className="mt-4 rounded-full bg-blue-600 px-6 py-2 text-white transition-colors duration-300 hover:bg-blue-700"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
