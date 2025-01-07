import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";
const Products = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("https://equipment-store-huzaifa.vercel.app/equipments/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section id="allequipments" className="pt-16 text-black dark:text-white">
      <div className="container mx-auto px-4">
        <h2 className="mb-2 text-center text-2xl font-semibold text-primary-0 dark:text-white sm:mb-2 sm:text-3xl md:mb-4 md:text-4xl">
          Featured Sports Equipment
        </h2>
        <p className="mb-6 text-center text-sm text-opacity-70 sm:mb-6 sm:text-base md:mb-12 md:text-lg">
          Explore our curated selection of top-quality sports equipment,
          handpicked for enthusiasts and professionals alike.
        </p>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-4 md:gap-8 lg:grid-cols-3 xl:grid-cols-4">
          {products &&
            products.map((product) => (
              <div
                key={product._id}
                className="dark:border-darkSecondary-0 card mx-auto w-full max-w-sm border-2 border-secondary-0 transition-shadow duration-200 hover:shadow-2xl hover:shadow-white sm:mx-0 sm:max-w-md"
              >
                <figure className="h-56 bg-white dark:bg-transparent md:h-64">
                  <img
                    src={product.image}
                    alt={product.itemName}
                    className="h-full object-contain object-center"
                  />
                </figure>
                <div className="dark:bg-darkPrimary-0 card-body rounded-b-2xl bg-primary-0 bg-opacity-25 p-4 px-2 pb-5">
                  <h2 className="card-title text-xl font-bold text-primary-0 dark:text-white">
                    {product.itemName}
                  </h2>
                  <p className="text-lg font-medium opacity-80">
                    {product.price} $
                  </p>

                  <div className="flex items-center gap-2 text-base font-medium">
                    <p className="flex-grow-0">{product.rating}</p>
                    <span className="">
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
                  <div className="mt-4 flex justify-center">
                    <Link
                      to={`/detail/${product._id}`}
                      className="dark:bg-darkSecondary-0 btn h-auto w-max transform rounded-lg bg-secondary-0 py-3 text-lg font-semibold text-white hover:shadow-lg"
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
