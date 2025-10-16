import React from 'react'
import { useEffect,useState } from 'react'
import axios from "axios";
import CardProductlist from '../component/CardProductlist';

const Lists = () => {
const [products,setProducts]=useState([])
console.log(products);


const fetchproducts=async()=>{
 const productsRes= await axios.get(`${import.meta.env.VITE_API_URL}api/products/listproducts`)
setProducts(productsRes.data.message)

}

useEffect(()=>{
fetchproducts()
console.log("hellow");



},[])

  return (
    <div>

      {
products.map((item,index)=> <div><CardProductlist item={item} index={index} /></div> )

      }

    </div>
  )
}

export default Lists
