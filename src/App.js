import {useState, useEffect} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "./laundry_shops/Shop.css";
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import SharedLayout from './pages/SharedLayout'
import ContactUs from './pages/ContactUs'

import LaundryShops from './laundry_shops/LaundryShops'
import Login from './pages/Login'
import Register from './pages/Register'

import Shop from './laundry_shops/Shop'

import ShopLayout from './laundry_shops/ShopLayout'
import useFetch from './laundry_shops/useFetch';
import Shops from './laundry_shops/Shops';
import ShopHome from './laundry_shops/ShopHome';

const App = () => {

  const {data:shops, isPending, error} = useFetch('http://127.0.0.1:8000/api/shops')

  return (
    <Router>
      <Routes>
        <Route path='/' element={<SharedLayout></SharedLayout>}>
          <Route index element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}>About</Route>
          <Route path='/contact-us' element={<ContactUs></ContactUs>}>Contact Us</Route>
          <Route path='/sign-in' element={<Login></Login>}></Route>
          <Route path='/sign-up' element={<Register></Register>}></Route>
          <Route path='/laundry-shops' element={<LaundryShops>Laundry Shops</LaundryShops>}></Route>
          <Route path='*' element={<Error></Error>}>Error</Route>
        </Route>
        <Route path="/shops" element={<ShopLayout></ShopLayout>}>
        <Route exact path="/shops" element={ <ShopHome />} />
          {/* { error && <div>{error}</div> }
          {isPending && <div>Loading...</div>} */}
          {/* <Route exact path="/shops/:id" element={<Shop />} /> */}
        </Route>
      </Routes>
          
    </Router>
  )

}

export default App
