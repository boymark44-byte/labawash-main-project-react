import { Link } from 'react-router-dom'

const LaundryShops = () => {
  return (
    <div className="small-container">

        {/* <!-- The Dropdown button for Sorting --> */}
        <div className="row row-2">
            <h2>All Laundry Shops</h2>
            {/* <select>
                <option>Default Shorting</option>
                <option>Coin-Based</option>
                <option>Drop-Off and Wash</option>
                <option>Sort by price</option>
                <option>Sort by popularity</option>
                <option>Sort by rating</option>
                <option>Sort by sale</option>
            </select> */}
            
            <form action="#">
              <div className="search-field">
                <input type="search" placeholder='&#x1F50D; Search Laundry Shop' style={{marginLeft: 15, height: 35, width: 350}}/>
                <button type='submit' style={{height: 35, width: 50, marginLeft: 10}}><i className='fa-solid fa-magnifying-glass' style={{color: 'blue'}}></i></button>
              </div>
            </form>
        </div>

        
        {/* <!-- The Row for Products 1 - 4 --> */}
        <div className="row">
            
            {/* <!-- Product 1 --> */}
            <div className="col-4">
                <img src="https://media.istockphoto.com/photos/laundry-room-with-a-washing-machine-picture-id1146034967?k=20&m=1146034967&s=612x612&w=0&h=JN4JwQaW3Jip2b7iFiCqAE5r4hMQh25Mb9CBIT8cQAU=" alt="" />
                <h4>Laundry Shop N</h4>

                
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-o"></i>
                    <i className="fa fa-star-o"></i>
                </div>

                
                <p>$50.00</p>
            </div>

            {/* <!-- Product 2 --> */}
            <div className="col-4">
                <img src="images/product-2.jpg" alt="" />
                <h4>Laundry Shop N</h4>

                
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                </div>

                
                <p>$51.00</p>
            </div>

            {/* <!-- Product 3 --> */}
            <div className="col-4">
                <img src="images/product-3.jpg" alt="" />
                <h4>Laundry Shop N</h4>

                
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-o"></i>
                    <i className="fa fa-star-o"></i>
                </div>

                
                <p>$52.00</p>
            </div>

            {/* <!-- Product 4 --> */}
            <div className="col-4">
                <img src="https://media.istockphoto.com/photos/row-of-industrial-laundry-machines-in-laundromat-in-a-public-with-picture-id1165135044?k=20&m=1165135044&s=612x612&w=0&h=2CfwF74N_UPIVjGNGccaVuaXNMlHzuDSHwbnCQaMBy4=" alt="" />
                <h4>Laundry Shop N</h4>

                
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                </div>

                
                <p>$53.00</p>
            </div>
        </div>


        {/* <!-- The Row for Products 5 - 8 --> */}
        <div className="row">

            {/* <!-- Product 5 --> */}
            <div className="col-4">
                <img src="images/product-5.jpg" alt="" />
                <h4>Laundry Shop N</h4>

                
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-o"></i>
                    <i className="fa fa-star-o"></i>
                </div>

                
                <p>$50.00</p>
            </div>

            {/* <!-- Product 6 --> */}
            <div className="col-4">
                <img src="images/product-6.jpg" alt="" />
                <h4>Laundry Shop N</h4>

                
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                </div>

                
                <p>$51.00</p>
            </div>

            {/* <!-- Product 7 --> */}
            <div className="col-4">
                <img src="images/product-7.jpg" alt="" />
                <h4>Laundry Shop N</h4>

                
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-o"></i>
                    <i className="fa fa-star-o"></i>
                </div>

                
                <p>$52.00</p>
            </div>

            {/* <!-- Product 8 --> */}
            <div className="col-4">
                <img src="images/product-8.jpg" alt="" />
                <h4>Laundry Shop N</h4>

                
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                </div>

                
                <p>$53.00</p>
            </div>
        </div>


        {/* <!-- The Row for Products 9 - 12 --> */}
        <div className="row">

            {/* <!-- Product 9  --> */}
            <div className="col-4">
                <img src="images/product-9.jpg" alt="" />
                <h4>Laundry Shop N</h4>

                
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-o"></i>
                    <i className="fa fa-star-o"></i>
                </div>

                
                <p>$50.00</p>
            </div>

            {/* <!-- Product 10 --> */}
            <div className="col-4">
                <img src="images/product-10.jpg" alt="" />
                <h4>Laundry Shop N</h4>

                
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                </div>

                
                <p>$51.00</p>
            </div>

            {/* <!-- Product 11 --> */}
            <div className="col-4">
                <img src="images/product-11.jpg" alt="" />
                <h4>Laundry Shop N</h4>

                
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-o"></i>
                    <i className="fa fa-star-o"></i>
                </div>

                
                <p>$52.00</p>
            </div>

            {/* <!-- Product 12 --> */}
            <div className="col-4">
                <img src="images/product-12.jpg" alt="" />
                <h4>Laundry Shop N</h4>

                
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                </div>

                
                <p>$53.00</p>
            </div>
        </div>


        {/* <!-- The Row for Products 1 - 4, again --> */}
        <div className="row">

            {/* <!-- Product 1 --> */}
            <div className="col-4">
                <img src="images/product-1.jpg" alt="" />
                <h4>Laundry Shop N</h4>

                
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-o"></i>
                    <i className="fa fa-star-o"></i>
                </div>

                
                <p>$50.00</p>
            </div>

            {/* <!-- Product 2 --> */}
            <div className="col-4">
                <img src="images/product-2.jpg" alt="" />
                <h4>Laundry Shop N</h4>

                
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                </div>

                
                <p>$51.00</p>
            </div>

            {/* <!-- Product 3 --> */}
            <div className="col-4">
                <img src="images/product-3.jpg" alt="" />
                <h4>Laundry Shop N</h4>

                
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-o"></i>
                    <i className="fa fa-star-o"></i>
                </div>

                
                <p>$52.00</p>
            </div>

            {/* <!-- Product 4 --> */}
            <div className="col-4">
                <img src="https://media.istockphoto.com/photos/laundry-room-interior-picture-id1188826574?k=20&m=1188826574&s=612x612&w=0&h=QHukRVnfLEWe9Ch9yxTBozH8w0hyCshuANVKCa-0YHc=" alt="" />
                <h4>Laundry Shop N</h4>

                
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                </div>

                
                <p>$53.00</p>
            </div>
        </div>


        {/* <!-- Page Button --> */}
        <div className="page-btn">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>&#8594;</span>
        </div>
    </div>
  )
}

export default LaundryShops