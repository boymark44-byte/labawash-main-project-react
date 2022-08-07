import { Link } from 'react-router-dom'


const About = () => {
  return (
    <section className="about">
      <div className="small-container">
        <h2>About us</h2>
        <p>Info.....</p>
        <Link to='/'>Go back to Home</Link>
      </div>
    </section>

  )
}

export default About