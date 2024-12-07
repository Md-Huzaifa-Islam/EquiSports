import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";
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
      className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 py-16 md:mt-16"
    >
      <div className="container mx-auto px-4">
        <h2 className="mb-2 text-center text-2xl font-semibold text-textLight sm:mb-2 sm:text-3xl md:mb-4 md:text-4xl">
          Featured Sports Equipment
        </h2>
        <p className="mb-6 text-center text-sm text-textLight text-opacity-70 sm:mb-6 sm:text-base md:mb-12 md:text-lg">
          Explore our curated selection of top-quality sports equipment,
          handpicked for enthusiasts and professionals alike.
        </p>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {products &&
            products.map((product) => (
              <div
                key={product._id}
                className="card mx-auto w-full max-w-sm border-2 border-blue-800 bg-white p-5 transition-shadow duration-200 hover:shadow-2xl hover:shadow-white sm:mx-0 sm:max-w-md"
              >
                <figure className="h-60 rounded-xl bg-blue-800 md:h-72">
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
                  <div className="flex items-center gap-2 text-base font-medium text-[#4F46E5]">
                    <p className="flex-grow-0">Rating:</p>
                    <span className="text-[#434C5B]">
                      <ReactStars
                        value={product.rating}
                        count={5}
                        size={20}
                        edit={false}
                        isHalf={true}
                        emptyIcon={<IoStarOutline />}
                        halfIcon={<IoStarHalf />}
                        filledIcon={<IoStar />}
                        activeColor="#ffd700"
                      />
                    </span>
                  </div>
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
