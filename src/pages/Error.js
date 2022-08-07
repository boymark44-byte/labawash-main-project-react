import { Link } from 'react-router-dom'

const Error = () => {
  return (

    <section className="error-page">
        <div className="small-container">
          <h2>Error 404</h2>
          <p>Page not found.</p>
          <Link to='/'>Go back to Home</Link>
      </div>
    </section>
  )
}

export default Error