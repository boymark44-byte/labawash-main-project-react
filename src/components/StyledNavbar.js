import { NavLink, Link } from 'react-router-dom'


const StyledNavBar = () => {

    const appLogo = require('../assets/labawash-logo.png')

    return (
    <nav className="navbar">
        <div className="container">
            
            <Link to="/"><img src={appLogo} alt="" style={{height: 40, width: 40}}/></Link>
            
            <ul class="nav">
                <li>
                    <NavLink 
                        to="/"
                        className={({ isActive }) => isActive ? 'link active' : 'link'}>
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                        to="/about"
                        className={({ isActive }) => isActive ? 'link active' : 'link'}>
                        About
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                        to="/contact-us"
                        className={({ isActive }) => isActive ? 'link active' : 'link'}>
                        Contact
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                        to="/sign-in-or-sign-up"
                        className={({ isActive }) => isActive ? 'link active' : 'link'}>
                        Sign In or Sign Up
                    </NavLink>
                </li>
            </ul>
        </div>
    </nav>
    )
}

export default StyledNavBar