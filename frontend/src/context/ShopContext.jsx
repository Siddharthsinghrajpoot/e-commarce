import React from 'react'
import { createContext } from 'react'

import { useState,useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from "axios";
export  const context =createContext();



const ShopContext = ({children}) => {

const currency='$';
const delivery_fess=10;
const [search, setSearch]=useState('');
const [showSearch,setShowSearch]=useState(false);
const [cardItems,setCardItems]=useState({ });
const [products,setProducts]=useState([]);
const[token,setToken]=useState(' ');



console.log(cardItems);


const addToCart=async(itemId,size)=>{
const cardData=structuredClone(cardItems);


if(!size){
toast.error("size is not selected");
return;
}

if(cardData[itemId]){
if(cardData[itemId][size]){
cardData[itemId][size]+=1;

}

else{

cardData[itemId][size]=1;

}

}


else{
cardData[itemId]={}
cardData[itemId][size]=1;

}
setCardItems(cardData);


}

const display=()=>{
  let count=0;

  for(const items in cardItems){
for(const item in cardItems[items]){
try{
if(cardItems[items][item]>0){

  count+=cardItems[items][item];
}


}
catch (error) {



}


}

  }
return count;


}




const updateQuantity=(itemId,size, quantity)=>{
let cartData=structuredClone(cardItems);
cartData[itemId][size]=quantity;
setCardItems(cartData);



}
const getCartAmount=()=>{
let totalAmount=0;

for(const items in cardItems){
let itemInfo=products.find((product)=>product._id==items);
for(const item in cardItems[items]){
try{
if(cardItems[items][item]>0){

totalAmount+=itemInfo.price*cardItems[items][item];

}
}

catch(error){



}




}
}
return totalAmount;

}


const getProductsdata=async()=>{
try{

  const response=await axios.get(`${import.meta.env.VITE_API_URL}api/products/listproducts`)
  if(response.data.message){

setProducts(response.data.message)

  }

  else{

console.log("error is present");


  }

}

catch(error){

console.log(error);




}


  

}

useEffect(()=>{
getProductsdata();

},[])







const value={
products, currency, delivery_fess,
search, setSearch, showSearch, setShowSearch,cardItems,setCardItems,addToCart,display,updateQuantity,getCartAmount,token,setToken
}


  return (
    <context.Provider value={value} >

{children}
    </context.Provider>
  )
}

export default ShopContext
