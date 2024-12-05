import { useLoaderData } from "react-router-dom";
import { Fade, Zoom } from "react-awesome-reveal";

const Detail = () => {
  const item = useLoaderData();

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 p-8">
      {/* Header Section */}
      <header className="mb-12 text-center">
        <Fade cascade triggerOnce>
          <h1 className="text-4xl font-bold text-white">Equipment Details</h1>
          <p className="mt-2 text-lg text-gray-200">
            Discover the specifications of{" "}
            <span className="font-bold">{item.itemName}</span>
          </p>
        </Fade>
      </header>

      {/* Main Body Section */}
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 rounded-lg bg-white p-8 shadow-lg transition-transform duration-500 hover:scale-105 lg:flex-row">
        {/* Image Section */}
        <div className="w-full flex-shrink-0 lg:w-1/2">
          <Zoom triggerOnce>
            <img
              src={item.image}
              alt={item.itemName}
              className="rounded-lg shadow-md"
            />
          </Zoom>
        </div>

        {/* Information Section */}
        <Fade cascade triggerOnce direction="right">
          <div className="w-full lg:w-1/2">
            <h2 className="mb-4 text-3xl font-bold text-indigo-700">
              {item.itemName}
            </h2>
            <p className="mb-2 text-lg text-gray-700">
              <span className="font-medium text-indigo-600">Category:</span>{" "}
              {item.categoryName}
            </p>
            <p className="mb-2 text-lg text-gray-700">
              <span className="font-medium text-indigo-600">Description:</span>{" "}
              {item.description}
            </p>
            <p className="mb-2 text-lg text-gray-700">
              <span className="font-medium text-indigo-600">Price:</span> $
              {item.price}
            </p>
            <p className="mb-2 text-lg text-gray-700">
              <span className="font-medium text-indigo-600">Rating:</span>{" "}
              {item.rating} ★
            </p>
            <p className="mb-2 text-lg text-gray-700">
              <span className="font-medium text-indigo-600">
                Customization Options:
              </span>{" "}
              {item.customization}
            </p>
            <p className="mb-2 text-lg text-gray-700">
              <span className="font-medium text-indigo-600">
                Processing Time:
              </span>{" "}
              {item.processingTime}
            </p>
            <p className="mb-2 text-lg text-gray-700">
              <span className="font-medium text-indigo-600">Stock Status:</span>{" "}
              {item.stockStatus > 0 ? (
                <span className="text-green-600">In Stock</span>
              ) : (
                <span className="text-red-600">Out of Stock</span>
              )}
            </p>
            <p className="mb-2 text-lg text-gray-700">
              <span className="font-medium text-indigo-600">Owner:</span>{" "}
              {item.owner_name}
            </p>
          </div>
        </Fade>
      </div>

      {/* Actions Section */}
      <div className="mt-8 flex justify-center gap-4">
        <Fade cascade triggerOnce>
          <button
            onClick={() => alert("Added to Cart")}
            className="btn btn-primary transform transition-transform duration-300 hover:btn-secondary hover:scale-105"
          >
            Add to Cart
          </button>
          <button
            onClick={() => alert("Purchased Now")}
            className="btn btn-secondary transform transition-transform duration-300 hover:btn-primary hover:scale-105"
          >
            Buy Now
          </button>
        </Fade>
      </div>
    </div>
  );
};

export default Detail;
