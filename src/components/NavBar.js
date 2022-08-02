import { Link } from 'react-router-dom'


const NavBar = () => {
  return (

    <nav className="navbar">
        <div className="container">
            {/* <div class="app-logo">LabaWash</div> */}
            
            <Link to="/"><img src="https://www.svgrepo.com/show/287692/laundry-washer.svg" alt="" style={{height: 40, width: 40}}/></Link>

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
                    <Link to="/sign-in">Sign In</Link>
                </li>

                <li>
                    <Link to="/sign-up">Sign Up</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default NavBar