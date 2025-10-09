import express from "express";

import Product from "../models/productModel.js";
import upload from "../middleware/multer.js";

const routerproducts=express.Router();



routerproducts.post('/add',upload.fields([{name:'image1', maxCount:1  },{name:'image2', maxCount:1},{name:'image3', maxCount:1},{name:'image4', maxCount:1}]),  async(req,res)=>{
try{
const {name,description,price,category,subCategory,sizes,bestseller}=req.body;
const image1=req.files.image1
const image2=req.files.image2
const image3=req.files.image3
const image4=req.files.image4

console.log(image1,image2,image3,image4);
console.log(name,description,price,category,subCategory,sizes,bestseller);



}

catch(error){

console.log("error is present"+error);


}



  


})








export default routerproducts;




