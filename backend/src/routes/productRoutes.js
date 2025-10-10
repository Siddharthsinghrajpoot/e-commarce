import express from 'express';
import { v2 as cloudinary } from 'cloudinary';

import Product from '../models/productModel.js';
import upload from '../middleware/multer.js';

const routerproducts = express.Router();

routerproducts.post(
  '/add',
  upload.fields([
    { name: 'image1', maxCount: 1 },
    { name: 'image2', maxCount: 1 },
    { name: 'image3', maxCount: 1 },
    { name: 'image4', maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const {
        name,
        description,
        price,
        bestseller,
        category,
        subCategory,
        size,
      } = req.body;

      const image1 = req.files.image1[0];
      const image2 = req.files.image2[0];
      const image3 = req.files.image3[0];
      const image4 = req.files.image4[0];

      const images = [image1, image2, image3, image4].filter(
        (item) => item !== undefined
      );
      const imagesurl = await Promise.all(
        images.map(async (item) => {
          let result = await cloudinary.uploader.upload(item.path, {
            resource_type: 'image',
          });
          return result.secure_url;
        })
      );
      console.log(imagesurl);

      console.log(images);

      console.log(
        name,
        description,
        price,
        bestseller,
        category,
        subCategory,
        size
      );

      const repeated = await Product.findOne({
        name,
        description,
        category,
        subCategory,
      });

      if (repeated) {
        return res.status(404).json({
          message: ' description category or subcategory already exists',
        });
      }

      const response = await Product.create({
        name,
        description,
        category,
        price: Number(price),
        subCategory,
        bestseller: bestseller === 'true' ? true : false,
        sizes: JSON.parse(size),
        image: imagesurl,
        date: Date.now(),
      });
      res.status(200).json({
        message: response,
      });
    } catch (error) {
      console.log(error);

      res.json({
        massage: 'error is present',
      });
    }
  }
);




routerproducts.get('/listproducts',async(req,res)=>{

  try{
const allproducts=  await Product.find()
res.status(200).json({
message:allproducts

})
  }
  catch(error){
    console.log(error);
    

res.status(500).json({
message:"error is present"

})

  }

})

export default routerproducts;
