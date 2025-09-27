import React from 'react'
import { createContext } from 'react'
import { products}  from '../frontend_assets/assets'; 
export  const context =createContext();


const ShopContext = ({children}) => {

const currency='$';
const delivery_fess=10;

const value={
products, currency, delivery_fess,

}


  return (
    <context.Provider value={value} >

{children}
    </context.Provider>
  )
}

export default ShopContext
