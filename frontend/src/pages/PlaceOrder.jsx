import React from 'react'
import UserForm from '../Components/UserForm'
import CardSummary2 from '../Components/CardSummary2'
const PlaceOrder = () => {
  return (
    <div className="flex justify-around w-full mt-7">
      <UserForm />
     <CardSummary2/>
    </div>


  )
}

export default PlaceOrder
