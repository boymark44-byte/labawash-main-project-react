import {useState, useEffect} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import NavBar from './components/NavBar'
import Header from './components/Header'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Brands from './components/Brands'
import Footer from './components/Footer'



const App = () => {

  return (
    <Router>

      <NavBar></NavBar>

      <Header></Header>
      
      <Routes>
        <Route path="/about" element={<About></About>}>About</Route>
      </Routes>
      
      <Testimonials></Testimonials>

      <Brands></Brands>

      <Footer></Footer>
    </Router>


  )

}

export default App
