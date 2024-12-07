import { Link, useLoaderData } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";
const AllEquipments = () => {
  const equipments = useLoaderData();
  console.log(equipments);
  return (
    <div className="mx-auto py-12 md:container sm:py-6 md:py-12">
      {/* header line part  */}
      <div className="mx-auto mb-10 text-center text-white sm:mx-5 md:w-8/12 lg:w-auto">
        <h2 className="text-4xl font-bold sm:text-3xl md:text-4xl">
          All Sports Equipment
        </h2>
        <p className="mt-4 opacity-80 sm:mt-2 md:mt-4">
          Browse through our collection of top-rated sports equipment and find
          the perfect gear for your game!
        </p>
      </div>

      {/* table part  */}
      <div className="overflow-x-auto sm:mx-5 lg:mx-0">
        <table className="table mx-auto w-11/12 overflow-hidden rounded-2xl md:w-full lg:w-11/12">
          {/* head */}
          <thead className="mx-auto w-full bg-[#4338CA] text-center text-2xl text-white sm:text-lg md:text-xl lg:text-2xl">
            <tr>
              <th>Items</th>
              <th>Name</th>
              <th>Category</th>
              <th>price</th>
              <th>Rating</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {equipments.map((equipment, index) => {
              return (
                <tr
                  key={equipment._id}
                  className="hover bg-white text-center text-lg font-semibold text-black sm:text-sm md:text-base lg:text-lg"
                >
                  <th>{index + 1}</th>
                  <td>{equipment.itemName}</td>
                  <td className="">{equipment.categoryName}</td>
                  <td className="">
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
                      className="btn h-auto w-max transform rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 py-3 text-lg font-semibold text-white hover:shadow-lg sm:px-1 sm:py-1 sm:text-sm md:px-2 md:py-2 md:text-base lg:py-3 lg:text-lg"
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
