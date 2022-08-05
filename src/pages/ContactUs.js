import { Link } from 'react-router-dom'

const ContactUs = () => {
  return (
    <div className="container">
        <h2>Contact Us</h2>
        <p>Contact details.......</p>
        <Link to='/'>Go back to home.</Link>
    </div>
  )
}

export default ContactUs