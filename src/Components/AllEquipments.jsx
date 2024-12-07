import { Link, useLoaderData } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";
import { useState } from "react";
import { BiSolidDownArrowAlt, BiSolidUpArrowAlt } from "react-icons/bi";
import { Tooltip } from "react-tooltip";
const AllEquipments = () => {
  const products = useLoaderData();
  const [equipments, setEquipments] = useState(products);

  // handler
  const handleAscending = () => {
    console.log("handle handleAscending");
    const newList = [...equipments].sort((a, b) => a.price - b.price);
    setEquipments(newList);
  };

  const handleDescending = () => {
    console.log("handleDescending");
    const newList = [...equipments].sort((a, b) => b.price - a.price);
    setEquipments(newList);
  };

  return (
    <div className="mx-auto py-6 md:container sm:py-6 md:py-12">
      {/* header line part  */}
      <div className="mx-auto mb-6 w-11/12 text-center text-white sm:w-10/12 md:w-8/12 lg:w-auto">
        <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
          All Sports Equipment
        </h2>
        <p className="mt-2 text-sm opacity-80 sm:mt-2 sm:text-base md:mt-4">
          Browse through our collection of top-rated sports equipment and find
          the perfect gear for your game!
        </p>
      </div>
      <div className="mx-auto flex w-11/12 items-center justify-end gap-4 pb-4 md:w-full lg:w-11/12">
        <p className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
          Sort
        </p>
        <div className="flex items-center justify-center gap-2">
          {/* Ascending order */}
          <button
            onClick={handleAscending}
            data-tooltip-id="sort"
            data-tooltip-content="Ascending order"
            data-tooltip-place="top"
            className="btn h-auto w-max transform rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 px-[2px] py-1 text-sm font-semibold text-white hover:shadow-lg sm:px-1 md:px-2 md:py-2 md:text-base lg:py-3 lg:text-lg"
          >
            <p>price</p> <BiSolidUpArrowAlt size={30} />
          </button>
          {/* Descending order */}
          <button
            onClick={handleDescending}
            data-tooltip-id="sort"
            data-tooltip-content="Descending order"
            data-tooltip-place="top"
            className="btn h-auto w-max transform rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 px-[2px] py-1 text-sm font-semibold text-white hover:shadow-lg sm:px-1 md:px-2 md:py-2 md:text-base lg:py-3 lg:text-lg"
          >
            <p>Price</p> <BiSolidDownArrowAlt size={30} />
          </button>
          <Tooltip id="sort" className="z-30" />
        </div>
      </div>

      {/* table part  */}
      <div className="hidden overflow-x-auto sm:block lg:mx-0">
        <table className="table mx-auto w-11/12 overflow-hidden rounded-2xl md:w-full lg:w-11/12">
          {/* head */}
          <thead className="mx-auto w-full bg-[#4338CA] text-center text-sm text-white sm:text-lg md:text-xl lg:text-2xl">
            <tr>
              <th className="">Items</th>
              <th>Name</th>
              <th className="px-0 sm:px-3">Category</th>
              <th className="px-0 sm:px-3">price</th>
              <th className="">Rating</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {equipments.map((equipment, index) => {
              return (
                <tr
                  key={equipment._id}
                  className="hover bg-white text-center text-xs font-semibold text-black md:text-base lg:text-lg"
                >
                  <td className="">{index + 1}</td>
                  <td>{equipment.itemName}</td>
                  <td className="px-1 sm:px-3">{equipment.categoryName}</td>
                  <td className="px-1 sm:px-3">
                    <div className="flex justify-center gap-1">
                      <p>{equipment.price}</p>
                      <p> $</p>
                    </div>
                  </td>

                  <td className="">
                    <div className="mx-auto flex w-max justify-center md:hidden">
                      <ReactStars
                        value={equipment.rating}
                        count={5}
                        size={12}
                        edit={false}
                        isHalf={true}
                        emptyIcon={<IoStarOutline />}
                        halfIcon={<IoStarHalf />}
                        filledIcon={<IoStar />}
                        activeColor="#ffd700"
                      />
                    </div>
                    <div className="mx-auto hidden w-max justify-center md:flex">
                      <ReactStars
                        value={equipment.rating}
                        count={5}
                        size={20}
                        edit={false}
                        isHalf={true}
                        emptyIcon={<IoStarOutline />}
                        halfIcon={<IoStarHalf />}
                        filledIcon={<IoStar />}
                        activeColor="#ffd700"
                      />
                    </div>
                  </td>
                  <td>
                    <Link
                      to={`/detail/${equipment._id}`}
                      className="btn h-auto w-max transform rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 px-[2px] py-1 text-sm font-semibold text-white hover:shadow-lg sm:px-1 md:px-2 md:py-2 md:text-base lg:py-3 lg:text-lg"
                    >
                      See Details
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* table part  */}
      <div className="overflow-x-auto sm:hidden lg:mx-0">
        <table className="table mx-auto w-11/12 overflow-hidden rounded-2xl md:w-full lg:w-11/12">
          {/* head */}
          <thead className="mx-auto w-full bg-[#4338CA] text-center text-sm text-white sm:text-lg md:text-xl lg:text-2xl">
            <tr>
              <th>Name</th>
              <th className="px-0 sm:px-3">Category</th>
              <th className="px-0 sm:px-3">price</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {equipments.map((equipment) => {
              return (
                <tr
                  key={equipment._id}
                  className="hover bg-white text-center text-xs font-semibold text-black md:text-base lg:text-lg"
                >
                  <td>{equipment.itemName}</td>
                  <td className="px-1 sm:px-3">{equipment.categoryName}</td>
                  <td className="px-1 sm:px-3">
                    <div className="flex justify-center gap-1">
                      <p>{equipment.price}</p>
                      <p> $</p>
                    </div>
                  </td>

                  <td>
                    <Link
                      to={`/detail/${equipment._id}`}
                      className="btn h-auto w-max transform rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 px-[2px] py-1 text-sm font-semibold text-white hover:shadow-lg sm:px-1 md:px-2 md:py-2 md:text-base lg:py-3 lg:text-lg"
                    >
                      See Details
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllEquipments;
