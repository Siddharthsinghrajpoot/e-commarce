import React, { useContext } from 'react'
import { context } from '../context/ShopContext'
import MyorderFullWidthOrderPage from '../Components/MyorderFullWidthOrderPage';
const Order = () => {
const {products}=useContext(context);
console.log(products);

  
  return (
    <div>
      
{ products.slice(3,5).map((item,index)=><MyorderFullWidthOrderPage  item={item} key={index} />   )  }

    </div>
  )
}

export default Order
