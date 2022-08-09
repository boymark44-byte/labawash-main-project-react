
import { Link, Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import StyledNavBar from '../components/StyledNavbar'
import Search from './Search'


const ShopLayout = () => {
  return (
    <>
        <StyledNavBar/>
        <Search />
            <Outlet></Outlet>
        <Footer></Footer>
    </>
  )
}

export default ShopLayout