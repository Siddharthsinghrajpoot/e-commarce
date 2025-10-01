import React from 'react'
import { createContext } from 'react'
import { products}  from '../frontend_assets/assets'; 
import { useState,useEffect } from 'react';
import { toast } from 'react-toastify';

export  const context =createContext();



const ShopContext = ({children}) => {

const currency='$';
const delivery_fess=10;
const [search, setSearch]=useState('');
const [showSearch,setShowSearch]=useState(false);
const [cardItems,setCardItems]=useState({ });

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









const value={
products, currency, delivery_fess,
search, setSearch, showSearch, setShowSearch,cardItems,setCardItems,addToCart,display
}


  return (
    <context.Provider value={value} >

{children}
    </context.Provider>
  )
}

export default ShopContext
