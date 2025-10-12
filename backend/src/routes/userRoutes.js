import express from "express"; // ← import express
import User from "../models/userModel.js";
import jwt from "jsonwebtoken"

const JWT_SECRET=process.env.jwt_secret;
const router=express.Router();

router.get('/hello',(req,res)=>{

res.send("hello world")

});

router.post('/signup',async(req,res)=>{

  try {
const username=req.body.username;
const email=req.body.email;
const password=req.body.password
    const existingUser = await User.findOne({
   username,
   email,
   password,
    });

    if (existingUser) {
      return res.status(409).json({
        message: "Username, email, or password already exists"
      });
    }




const response=  await User.create({
  
  username,
  email,
  password


})



   res.status(200).json({
      massage: response,
    })

}
catch(error){

    console.error('Error in createNode controller', error);
    res.status(500).json({ message: 'internal server error' });
  


}


})

router.post('/login',async(req,res)=>{

  try{


const email=req.body.email;
const password=req.body.password;
const user=await User.findOne({
email,
password

})
if(user){
const token=jwt.sign({
 id:user._id 
},JWT_SECRET)
res.status(200).send({
token:token
}
)

}

else{
res.status(401).send({ // 👈 401 means Unauthorized
massege:"token is not found"

})

}}

catch(e){



    console.error('Error in createNode controller', error);
    res.status(500).json({ message: 'Server error, please try again later' });
  





}


})


export default router;