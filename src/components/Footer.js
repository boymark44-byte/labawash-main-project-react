import { Link } from 'react-router-dom'

const Footer = () => {
  const playStore = require('../assets/play-store.png')
  const appStore = require('../assets/app-store.png')
  const labawashLogo = require('../assets/labawash-logo.png')
  
  return (
    <footer className="footer">
      <div className="container">

        <div className="row">

          {/* 1st Column */}
          <div className="footer-col-1">
            <h3>Download Our App</h3>
            <p>Download for Android and IOS mobile phone.</p>

            <div className="app-logo">
              <img src={playStore} alt="play-store"/>
              <img src={appStore} alt="app-store"/>
            </div>
          </div>

          {/* 2nd Column */}
          <div className="footer-col-2">
            <Link to="/"><img src={labawashLogo} alt="labawash-logo" /></Link>
            <p>Find your Laundry Shop or Use our App 
              to automate your Landry Shop Business with us.
            </p>
          </div>

          {/* 3rd Column */}
          <div className="footer-col-3">
            <h3>Follow Us</h3>
            <ul>
              <li><img src="https://www.svgrepo.com/show/44069/facebook.svg" alt="Facebook" style={{height: 40, width: 40}}/></li> 
              <li><img src="https://www.svgrepo.com/show/126780/twitter.svg" alt="Twitter" style={{height: 40, width: 40}} /></li>
              <li><img src="https://www.svgrepo.com/show/111199/instagram.svg" alt="Instagram" style={{height: 40, width: 40}} /></li>
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