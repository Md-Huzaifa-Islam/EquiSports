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
    <section className="bg-backgroundDark py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-textLight mb-4 text-center text-3xl font-semibold">
          Featured Sports Equipment
        </h2>
        <p className="text-textLight mb-12 text-center text-opacity-70">
          Explore our curated selection of top-quality sports equipment,
          handpicked for enthusiasts and professionals alike.
        </p>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {products &&
            products.map((product) => (
              <div
                key={product._id}
                className="bg-backgroundLight group overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={product.image}
                  alt={product.itemName}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-textDark text-xl font-semibold">
                    {product.itemName}
                  </h3>
                  <p className="text-secondary">{product.categoryName}</p>
                  <p className="mt-2 text-lg font-semibold text-primary">
                    ${product.price}
                  </p>
                  <Link
                    to={`/detail/${product._id}`}
                    className="text-textLight mt-4 inline-block rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-2 transition-colors duration-300 hover:from-secondary hover:to-primary"
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
