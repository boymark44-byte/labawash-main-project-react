import { Link } from 'react-router-dom'


const Header = () => {
  return (
    // <!-- Header -->
    <header className='header'>
        <div className='container'>
            <div>
                <h1>Labawash</h1>
                <p> 
                    A Platform where you can find available laundry shops nearby.
                </p>
                <Link to='/sign-up' className='btn'>Register Now &#8594;</Link>
            </div>
            
            <img src={"https://images.pexels.com/photos/45980/pexels-photo-45980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}/>
        </div>
    </header>
  )
}

export default Header