import { useLoaderData } from "react-router-dom";

const Detail = () => {
  const item = useLoaderData();
  return (
    <div>
      {/* header part  */}

      {/* main body part  */}
      <div className="item-details">
        <img src={item.image} alt={item.itemName} />
        <div className="item-info">
          <h2>{item.itemName}</h2>
          <p>Category: {item.categoryName}</p>
          <p>Description: {item.description}</p>
          <p>Price: ${item.price}</p>
          <p>Rating: {item.rating} ★</p>
          {/* <p>Customization Options: {item.customization.join(", ")}</p> */}
          <p>Processing Time: {item.processingTime}</p>
          <p>
            Stock Status: {item.stockStatus > 0 ? "In Stock" : "Out of Stock"}
          </p>
          <p>Owner: {item.owner_name}</p>
        </div>

        <div className="actions">
          <button onClick={() => alert("Added to Cart")}>Add to Cart</button>
          <button onClick={() => alert("Purchased Now")}>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
