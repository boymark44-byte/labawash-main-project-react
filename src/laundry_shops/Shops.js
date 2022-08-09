import "./Shop.css";
import { Link } from "react-router-dom";

const Shops = (props) => {
  return (
    <div className="cards-list">
      <div className="card">
        <Link to={`/shops/${props.id}`}>
          <img src={props.img} className="card--image" alt="" />
        </Link>
        <div className="card--stats">
          {/* <img src="./images/star.png" className="card--star" /> */}
          <span>{props.rating}</span>
          <span className="gray">({props.reviewCount}) • </span>
          <span className="gray">{props.location}</span>
        </div>
        <p>{props.title}</p>
        <p>
          <span className="bold">From ${props.price}</span> / load
        </p>
      </div>
    </div>
  );
};

export default Shops;
