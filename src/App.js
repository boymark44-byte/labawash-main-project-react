import {useState, useEffect} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Header from './components/Header'


const App = () => {

  return (
    <Router>
      
      <NavBar></NavBar>

      <Header></Header>
      
      <Footer></Footer>

      
    </Router>
  )

}

export default App
