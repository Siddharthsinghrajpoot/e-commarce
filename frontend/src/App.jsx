import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Login from './pages/login'
import About from './pages/About'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import Navbar from './Components/Navbar'
import Product from './pages/product'
import Footer from './Components/footer'
import SearchBar from './Components/Searchbar'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Singnup from './pages/Singnup'
const App = () => {
  return (
    <div>
 
    <Navbar/>
   <SearchBar/>
     <Routes>

<Route path="/" element={<Home/>}  />
<Route path="/login" element={<Login/>}  />
<Route path="/Collection" element={<Collection/>}  />
<Route path="/About" element={<About/>}  />
<Route path="/Contact" element={<Contact/>}  />

<Route path="/product/:id" element={<Product/>}  />
<Route path="/cart" element={<Cart/>}  />
<Route path="/place-order" element={<PlaceOrder/>}  />
<Route path="/singnup" element={<Singnup/>}  />

<Route path="/orders" element={<Orders/>}  />
     </Routes>
     <Footer/>

    </div>
  )
}

export default App
