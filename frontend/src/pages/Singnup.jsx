import React, { useContext, useState } from 'react'
import { context } from '../context/ShopContext'
import axios from "axios"
const Signup = () => {
const {token,setToken}=useContext(context)

  const [currentState, setCurrentState] = useState('signup')
  const[name,setName]=useState("");
    const[email,setEmail]=useState("");
      const[password,setPassword]=useState("");

 const handleonsubmit=async(e) =>{
    e.preventDefault() 

    

   try{

    if(currentState=='signup'){

 const response= await axios.post(`${import.meta.env.VITE_API_URL}api/user/signup`,{

  
username:name,
email,
password,

 }) 

 console.log(response.data)

    }

    else{

      console.log(email);
      console.log(password);
      
      
 const response= await axios.post(`${import.meta.env.VITE_API_URL}api/user/login`,{
email,
password,

 }) 

 console.log(response.data.token)


    }

}



catch{



}
    
  


 


 }



  return (
    <form onSubmit={handleonsubmit}    className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          {currentState === 'signup' ? 'Signup' : 'Login'}
        </h2>

        {currentState === 'signup' && (
          <input
            type="text"
            placeholder="Name"
            className="w-full mb-3 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            onChange={(e)=>setName(e.target.value)}
            value={name}
          />
        )}

        <input
         required
          type="email"
          placeholder="Email"
          className="w-full mb-3 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e)=>setEmail(e.target.value)}
          value={email}
        />

        <input
         required
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      onChange={(e)=>setPassword(e.target.value)}
      value={password}
/>

<div className="flex flex-row justify-between text-center mt-0 mb-2" >
<h1 className="cursor-pointer" >Forgot your password</h1>
{
currentState==='login'?
<p onClick={ ()=>{setCurrentState('signup')} } className="cursor-pointer">  Create account   </p>:<p  className="cursor-pointer" onClick={ ()=>{setCurrentState('login')} }  >  Login Here  </p>


}
</div>


        <button
          type="submit"
          // onClick={() =>
          //   setCurrentState(currentState === 'signup' ? 'login' : 'signup')
          // }
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          {currentState === 'login' ? 'Signin' : 'signup'}
        </button>
      </div>
    </form>
  )
}

export default Signup
