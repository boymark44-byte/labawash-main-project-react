import { Link } from 'react-router-dom'


const NavBar = () => {

    const appLogo = require('../assets/labawash-logo.png')

    return (
    <nav className="navbar">
        <div className="container">
            {/* <div class="app-logo">LabaWash</div> */}
            
            <Link to="/"><img src={appLogo} alt="" style={{height: 40, width: 40}}/></Link>
            <ul class="nav">
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/about">About</Link>
                </li>

                <li>
                    <Link to="/contact">Contact</Link>
                </li>

                <li>
                    <Link to="/sign-in-or-sign-up">Sign In or Sign Up</Link>
                </li>
            </ul>
        </div>
    </nav>
    )
}

export default NavBar