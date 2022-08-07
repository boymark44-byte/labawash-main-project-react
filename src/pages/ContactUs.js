import { Link } from 'react-router-dom'

const ContactUs = () => {
  return (
    <section className="contact-us">
      <div className="small-container">
          <h2>Contact Us</h2>
          <p>Contact details.......</p>
          <Link to='/'>Go back to home.</Link>
      </div>
    </section>
  )
}

export default ContactUs