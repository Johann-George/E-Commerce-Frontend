import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { Outlet } from 'react-router-dom'
import Register from './pages/Register.jsx'
import Home from './pages/Home.jsx'
import ProductDetails from './components/ProductDetails.jsx'
import Cart from './pages/Cart.jsx'

function App() {

  return (
    <>
      <Header/>
      <Cart/>
      <Footer/>
    </>
  )
}

export default App;
