import { useLoaderData } from "react-router-dom";
import { Fade, Zoom } from "react-awesome-reveal";
import ReactStars from "react-rating-stars-component";
import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";
import { Helmet } from "react-helmet-async";
const Detail = () => {
  const item = useLoaderData();

  return (
    <div className="p-5 text-black dark:bg-gradient-to-r dark:from-gray-800 dark:via-purple-900 dark:to-black sm:p-8">
      {/* Header Section */}
      <Helmet>
        <title>{`${item.itemName} | EquiSports`}</title>
      </Helmet>
      <header className="mb-6 text-center sm:mb-10 md:mb-12">
        <Fade cascade triggerOnce>
          <h1 className="text-2xl font-bold text-primary-0 sm:text-3xl md:text-4xl">
            Equipment Details
          </h1>
          <p className="mt-2 text-sm sm:text-base md:text-lg">
            Discover the specifications of{" "}
            <span className="font-bold text-primary-0">{item.itemName}</span>
          </p>
        </Fade>
      </header>

      {/* Main Body Section */}
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 rounded-lg bg-white p-8 shadow-lg transition-transform duration-500 hover:scale-105 dark:bg-black lg:flex-row">
        {/* Image Section */}
        <div className="w-full flex-shrink-0 lg:w-1/2">
          <Zoom triggerOnce>
            <img
              src={item.image}
              alt={item.itemName}
              className="mx-0 w-11/12 max-w-36 rounded-lg shadow-md sm:max-w-48 md:mx-auto md:max-w-64 lg:w-11/12 lg:max-w-none"
            />
          </Zoom>
        </div>

        {/* Information Section */}
        <Fade cascade triggerOnce direction="right">
          <div className="w-full lg:w-1/2">
            <h2 className="mb-3 whitespace-nowrap text-2xl font-bold text-indigo-700 sm:mb-4 sm:text-3xl">
              {item.itemName}
            </h2>
            <p className="mb-2 text-gray-700 dark:text-white sm:text-lg">
              <span className="font-medium text-indigo-600">Category:</span>{" "}
              {item.categoryName}
            </p>
            <p className="mb-2 text-gray-700 dark:text-white sm:text-lg">
              <span className="font-medium text-indigo-600">Description:</span>{" "}
              {item.description}
            </p>
            <p className="mb-2 text-gray-700 dark:text-white sm:text-lg">
              <span className="font-medium text-indigo-600">Price: </span>
              {item.price} $
            </p>
            <div className="mb-2 flex items-center gap-2 text-gray-700 dark:text-white sm:text-lg">
              <span className="font-medium text-indigo-600">Rating:</span>{" "}
              <ReactStars
                value={item.rating || 0}
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
            <p className="mb-2 text-gray-700 dark:text-white sm:text-lg">
              <span className="font-medium text-indigo-600">
                Customization Options:
              </span>{" "}
              {item.customization}
            </p>
            <p className="mb-2 text-gray-700 dark:text-white sm:text-lg">
              <span className="font-medium text-indigo-600">
                Processing Time:
              </span>{" "}
              {item.processingTime} <span> days</span>
            </p>
            <p className="mb-2 text-gray-700 dark:text-white sm:text-lg">
              <span className="font-medium text-indigo-600">Stock Status:</span>{" "}
              {item.stockStatus > 0 ? (
                <span className="text-green-600">In Stock</span>
              ) : (
                <span className="text-red-600">Out of Stock</span>
              )}
            </p>
            <p className="mb-2 text-gray-700 dark:text-white sm:text-lg">
              <span className="font-medium text-indigo-600">Owner:</span>{" "}
              {item.owner_name}
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Detail;
