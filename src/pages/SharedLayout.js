import { Link, Outlet } from 'react-router-dom'
import StyledNavbar from '../components/StyledNavbar'
import Footer from '../components/Footer'


const SharedLayout = () => {
  return (
    <>
        <StyledNavbar></StyledNavbar>
            <Outlet></Outlet>
        <Footer></Footer>
    </>
  )
}

export default SharedLayout