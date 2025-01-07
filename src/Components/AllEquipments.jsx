import { Link, useLoaderData } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";
import { useState } from "react";
import { BiSolidDownArrowAlt, BiSolidUpArrowAlt } from "react-icons/bi";
import { Tooltip } from "react-tooltip";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
const AllEquipments = () => {
  const products = useLoaderData();
  const [equipments, setEquipments] = useState(products);

  // handler
  const handleAscending = () => {
    const newList = [...equipments].sort((a, b) => a.price - b.price);
    setEquipments(newList);
    toast.success("The list is sorted in ascending order ");
  };

  const handleDescending = () => {
    const newList = [...equipments].sort((a, b) => b.price - a.price);
    setEquipments(newList);
    toast.success("The list is sorted in descending order ");
  };

  return (
    <div className="mx-auto py-6 md:container sm:py-6 md:py-12">
      <Helmet>
        <title>{`All Equipments | EquiSports`}</title>
      </Helmet>
      {/* header line part  */}
      <div className="mx-auto mb-6 w-11/12 text-center text-black sm:w-10/12 md:w-8/12 lg:w-auto">
        <h2 className="text-2xla font-bold text-primary-0 sm:text-3xl md:text-4xl">
          All Sports Equipment
        </h2>
        <p className="mt-2 text-sm opacity-80 sm:mt-2 sm:text-base md:mt-4">
          Browse through our collection of top-rated sports equipment and find
          the perfect gear for your game!
        </p>
      </div>
      <div className="mx-auto flex w-11/12 items-center justify-end gap-4 pb-4 md:w-full lg:w-11/12">
        <p className="text-xl font-bold sm:text-2xl md:text-3xl">Sort :</p>
        <div className="flex items-center justify-center gap-2">
          {/* Ascending order */}
          <button
            onClick={handleAscending}
            data-tooltip-id="sort"
            data-tooltip-content="Ascending order"
            data-tooltip-place="top"
            className="btn h-auto w-max transform rounded-lg bg-primary-0 px-[2px] py-1 text-sm font-semibold text-white hover:bg-primary-0 hover:shadow-lg sm:px-1 md:px-2 md:py-2 md:text-base lg:py-3 lg:text-lg"
          >
            <p>price</p> <BiSolidUpArrowAlt size={30} />
          </button>
          {/* Descending order */}
          <button
            onClick={handleDescending}
            data-tooltip-id="sort"
            data-tooltip-content="Descending order"
            data-tooltip-place="top"
            className="btn h-auto w-max transform rounded-lg bg-primary-0 px-[2px] py-1 text-sm font-semibold text-white hover:bg-primary-0 hover:shadow-lg sm:px-1 md:px-2 md:py-2 md:text-base lg:py-3 lg:text-lg"
          >
            <p>Price</p> <BiSolidDownArrowAlt size={30} />
          </button>
          <Tooltip id="sort" className="z-30" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        {products &&
          products.map((product) => (
            <div
              key={product._id}
              className="card mx-auto w-full max-w-sm border-2 border-secondary-0 transition-shadow duration-200 hover:shadow-2xl hover:shadow-white dark:bg-black sm:mx-0 sm:max-w-md"
            >
              <figure className="h-56 bg-white dark:bg-[#22283C] md:h-64">
                <img
                  src={product.image}
                  alt={product.itemName}
                  className="h-full object-contain object-center"
                />
              </figure>
              <div className="card-body rounded-b-2xl bg-primary-0 bg-opacity-25 p-4 px-2 pb-5">
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
                    className="btn h-auto w-max transform rounded-lg bg-secondary-0 py-3 text-lg font-semibold text-white hover:shadow-lg dark:from-gray-800 dark:to-black"
                  >
                    See Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllEquipments;
