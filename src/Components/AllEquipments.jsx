import { Link, useLoaderData } from "react-router-dom";
const AllEquipments = () => {
  const equipments = useLoaderData();
  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 py-16">
      {/* header line part  */}
      <div className="mb-10 text-center text-white">
        <h2 className="text-4xl font-bold">All Sports Equipment</h2>
        <p className="mt-4 opacity-80">
          Browse through our collection of top-rated sports equipment and find
          the perfect gear for your game!
        </p>
      </div>

      {/* table part  */}
      <div className="overflow-x-auto">
        <table className="table mx-auto w-11/12 overflow-hidden rounded-2xl">
          {/* head */}
          <thead className="mx-auto w-full bg-[#4338CA] text-center text-2xl text-white">
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
                  className="hover bg-white text-center text-lg font-semibold text-black"
                >
                  <th>{index + 1}</th>
                  <td>{equipment.itemName}</td>
                  <td>{equipment.categoryName}</td>
                  <td>{equipment.price} $</td>
                  <td>{equipment.rating}</td>
                  <td>
                    <Link
                      to={`/detail/${equipment._id}`}
                      className="btn h-auto w-max transform rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 py-3 text-lg font-semibold text-white hover:shadow-lg"
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
