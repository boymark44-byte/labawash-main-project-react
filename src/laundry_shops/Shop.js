import { useParams } from "react-router-dom";
import data from "../data";

const Shop = () => {
  const { id } = useParams();

  console.log(data[id]);

  // let {number, img, rating, reviewCount, location, title, price} = data[1-id]

  let object = data[id - 1];

  return (
    <div className="wrapper">
      <div className="shop">
        <img src={object.coverImg} className="shop-picture" />
        <div className="shop-details">
          <div className="shop-title">{object.title}</div>
          <h4 className="shop-location">{object.location}</h4>
          <p className="shop-description">{object.description}</p>
          <div className="shop-rating">{object.stats.rating}</div>
          <p>
            <span className="shop-price">From ${object.price}</span> / load
          </p>
          <button className="shop-order">Place Order</button>
        </div>
      </div>
    </div>
    // <div className="card">
    //   <img src={object.coverImg} className="card--image" />

    //   <div className="card--stats">
    //     {/* <img src="./images/star.png" className="card--star" /> */}
    //     <span>{object.stats.rating}</span>
    //     <span className="gray">({object.stats.reviewCount}) • </span>
    //     <span className="gray">{object.location}</span>
    //   </div>
    //   <p>{object.title}</p>

    // </div>
  );
};

export default Shop;
