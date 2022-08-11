import './Shop.css'
import { Link } from "react-router-dom";

const Shops = ({ blogs, handleDelete }) => {

  console.log(blogs[0])
  return (
    <div className="shop--list">
      {blogs.map((blog) => (
        // <div className="blog-preview" key={blog.id}>
        //     <h2>{blog.shop_name}</h2>
        //     <p>Located at {blog.shop_address}</p>
        //     <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>
        // </div>
        <div className="cards-list" key={blog.id}>
          <div className="card">
            {/* <Link to={`/shops/${blog.id}`}> */}
            {/* </Link> */}
            <Link to={`/shops/${blog.id}`}>
              <img src={blog.image} className="card--image" alt="" />
            </Link>
            <div className="card--stats">
              {/* <img src="./images/star.png" className="card--star" /> */}
              {/* <span>{blog.rating}</span> */}
              {/* <span className="gray">({blog.reviewCount}) • </span> */}
              <span className="gray">{blog.shop_address}</span>
            </div>
            <p>{blog.shop_name}</p>
            <p>
              <span className="bold">From ${blog.price}</span> {blog.category}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shops;
