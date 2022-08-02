
const Testimonials = () => {
  const user1 = require('../assets/user-1.png')
  const user2 = require('../assets/user-2.png')
  const user3 = require('../assets/user-3.png')

  return (
    <section className="testimonial">
        <div className="small-container">
          
            <div className="row">

                {/*  1st User  */}
                <div className="col-3">

                    <i className="fa fa-quote-left"></i>

                    <p>Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever</p>

                    <div className="rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half-o"></i>
                        <i className="fa fa-star-o"></i>
                    </div>

                    <img src={user1} alt="" />

                    <h3>Christine Hammond</h3>
                </div>

                 {/* 2nd User  */}
                <div className="col-3">
                    <i className="fa fa-quote-left"></i>

                    <p>Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever</p>

                    <div className="rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half-o"></i>
                        <i className="fa fa-star-o"></i>
                    </div>
                    <img src={user2} alt="" />
                    <h3>Mike Smith</h3>
                </div>

                 {/* 3rd User  */}
                <div className="col-3">
                    <i className="fa fa-quote-left"></i>
                    <p>Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever</p>
                    <div className="rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half-o"></i>
                        <i className="fa fa-star-o"></i>
                    </div>
                    <img src={user3} alt="" />
                    <h3>Mabel Joe</h3>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Testimonials