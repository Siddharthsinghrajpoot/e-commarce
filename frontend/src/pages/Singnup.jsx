import React, { useState } from 'react'

const Signup = () => {
  const [currentState, setCurrentState] = useState('signup')

 const handleonsubmit=(e) =>{
    e.preventDefault() 
    console.log('Form submitted')
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
          />
        )}

        <input
         required
          type="email"
          placeholder="Email"
          className="w-full mb-3 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
         required
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
