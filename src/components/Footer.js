import { Link } from 'react-router-dom'

const Footer = () => {
  return (

    <footer className="footer">
      <div className="container">

        <div className="row">
          {/* 1st Column */}
          <div className="footer-col-1">
            <h3>Download Our App</h3>
            <p>Download for Android and IOS mobile phone.</p>

            <div className="app-logo">
              <img src="https://www.svgrepo.com/show/223032/playstore.svg" alt="play-store" style={{height: 30, width: 30}}/>
              <img src="https://www.pngrepo.com/png/352973/180/app-store.png" alt="app-store" style={{height: 30, width: 30}} />
            </div>
          </div>

          {/* 2nd Column */}
          <div className="footer-col-2">
            <img src="https://www.svgrepo.com/show/287692/laundry-washer.svg" alt="" style={{height: 50, width: 50}}/>
            <p>Find your Laundry Shop or Use our App to optimize your Landry Shop Business with us
            </p>
          </div>

          {/* 3rd Column */}
          <div className="footer-col-3">
            <h3>Useful Links</h3>
            <ul>
              <li>Blog Post 1</li>
              <li>Blog Post 2</li>
              <li>Blog Post 3</li>
            </ul>
          </div>

          {/* 4th Column */}
          <div className="footer-col-4">
            <h3>Follow Us</h3>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Youtube</li>
            </ul>
          </div>
        </div>    

        {/* Copyright Section */}
        <hr />
        <p className="copyright">
          Copyright 2022 - LabaWash
        </p>
      </div>
    </footer>
    
  )
}

export default Footer