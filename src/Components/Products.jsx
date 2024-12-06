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
    <section
      id="allequipments"
      className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 py-16"
    >
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-4xl font-semibold text-textLight">
          Featured Sports Equipment
        </h2>
        <p className="mb-12 text-center text-lg text-textLight text-opacity-70">
          Explore our curated selection of top-quality sports equipment,
          handpicked for enthusiasts and professionals alike.
        </p>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {products &&
            products.map((product) => (
              <div
                key={product._id}
                className="card w-full max-w-md border-2 border-blue-800 bg-white p-5 transition-shadow duration-200 hover:shadow-2xl hover:shadow-white"
              >
                <figure className="h-72 rounded-xl bg-blue-800">
                  <img
                    src={product.image}
                    alt={product.itemName}
                    className="h-full object-contain object-center"
                  />
                </figure>
                <div className="card-body p-4 px-2 pb-0">
                  <h2 className="card-title bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 bg-clip-text text-xl font-bold text-transparent">
                    {product.itemName}
                  </h2>
                  <p className="text-base font-medium text-[#4F46E5]">
                    Price:{" "}
                    <span className="text-[#434C5B]">{product.price} $</span>
                  </p>
                  <p className="text-base font-medium text-[#4F46E5]">
                    Stock:{" "}
                    <span className="text-[#434C5B]">
                      {product.stockStatus} available
                    </span>
                  </p>
                  <p className="text-base font-medium text-[#4F46E5]">
                    Rating:{" "}
                    <span className="text-[#434C5B]">{product.rating} ★</span>
                  </p>
                  <div className="mt-4">
                    <Link
                      to={`/detail/${product._id}`}
                      className="btn h-auto w-max transform rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 py-3 text-lg font-semibold text-white hover:shadow-lg"
                    >
                      See Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
