import {useState, useEffect} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import NavBar from './components/NavBar'
import Header from './components/Header'
import Categories from './components/Categories'
import FeaturedLaundryShops from './components/FeaturedLaundryShops'
import LatestLaundryShops from './components/LatestLaundryShops'
import Offer from './components/Offer'
import Testimonials from './components/Testimonials'
import Brands from './components/Brands'
import Footer from './components/Footer'

import About from './components/About'

const App = () => {

  return (
    <Router>
       <Routes>
        <Route path="/about" element={<About></About>}>About</Route>
      </Routes>

      <NavBar></NavBar>

      <Header></Header>

      <Categories></Categories>

      <FeaturedLaundryShops></FeaturedLaundryShops>

      <LatestLaundryShops></LatestLaundryShops>
      
      <Offer></Offer>
       
      <Testimonials></Testimonials>

      <Brands></Brands>

      <Footer></Footer>
    </Router>


  )

}

export default App
