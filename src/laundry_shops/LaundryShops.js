import { Link } from 'react-router-dom'

const LaundryShops = () => {
  return (
    <div className="container">
        <h2>Laundry Shops</h2>
        <p>List of Laundry Shops</p>
        <Link to='/'>Go back to Home....</Link>
    </div>
  )
}

export default LaundryShops