import React, { useContext } from 'react'
import { context } from '../context/ShopContext'
import MyorderFullWidthOrderPage from '../Components/MyorderFullWidthOrderPage';
const Order = () => {
const {products}=useContext(context);
console.log(products);

  
  return (
    <div className="mt-4" >
  <p class="font-bold text-xl mb-0 ml-5">MY ORDERS------</p>

 <div className="mt-0" >   
{ products.slice(3,5).map((item,index)=><MyorderFullWidthOrderPage  item={item} key={index} />   )  }
</div>  
    </div>
  )
}

export default Order
