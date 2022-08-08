import {useState, useEffect} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import SharedLayout from './pages/SharedLayout'
import ContactUs from './pages/ContactUs'

import LaundryShops from './laundry_shops/LaundryShops'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {

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
      </Routes>
    </Router>
  )

}

export default App
