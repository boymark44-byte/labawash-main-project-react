import { useParams } from 'react-router-dom';
import './Shop.css'


const Shop = ({ blogs, handleDelete }) => {
  const {id} = useParams();
  //console.log(blogs)
  console.log(id)
  let object = blogs[id-1];
  //console.log(object)
  //console.log(object.shop_name)

  return (
    <>
      <div className="shop--details">
            <div className="shop">
                 <img src={object.image} className="shop-picture" alt=""/>
                 <div className="shop-details">
                   <div className="shop-title">{object.shop_name}</div>
                   <h4 className="shop-location">{object.shop_address}</h4>
                   <p className="shop-description">{object.description}</p>
                   <p className="shop-fabcon">Price of Fabcon: ${object.fabcon}</p>
                   <p className="shop-description">Price of Detergent: ${object.detergent}</p>
                   <p>
                     <span className="shop-price">From ${object.price}</span> {object.category}
                   </p>
                   <button className="shop-order">Place Order</button>
                 </div>
               </div>
           </div>
    </>
    );
}
 
export default Shop;