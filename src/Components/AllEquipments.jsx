import { Link, useLoaderData } from "react-router-dom";
const AllEquipments = () => {
  const equipments = useLoaderData();
  return (
    <div>
      {/* header line part  */}
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-bold text-primary">
          All Sports Equipment
        </h2>
        <p className="text-textDark mt-4">
          Browse through our collection of top-rated sports equipment and find
          the perfect gear for your game!
        </p>
      </div>

      {/* table part  */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Items</th>
              <th>Name</th>
              <th>Category</th>
              <th>price</th>
              <th>Rating</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {equipments.map((equipment, index) => {
              return (
                <tr key={equipment._id} className="hover">
                  <th>{index + 1}</th>
                  <td>{equipment.itemName}</td>
                  <td>{equipment.categoryName}</td>
                  <td>{equipment.price} $</td>
                  <td>{equipment.rating}</td>
                  <td>
                    <Link
                      to={`/detail/${equipment._id}`}
                      className="btn btn-primary"
                    >
                      view details
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
