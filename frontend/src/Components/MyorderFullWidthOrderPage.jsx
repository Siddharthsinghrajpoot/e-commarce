import React from "react";

const MyorderFullWidthOrderPage = ({ item }) => {
  return (

<div>



    <div className="w-full flex flex-row items-center px-5 gap-10 bg-gray-200 shadow-lg rounded-md py-3  justify-between mt-4 ">
      <div>
      <img
        src={item.image}
        alt={item.name}
        className="h-20 w-20 object-cover rounded"
      />

      <div className="flex-1 text-left">
        <h4 className="text-base font-medium">{item.name}</h4>
        <p className="text-sm text-gray-600">
          Size: {2} | Qty: {1}
        </p>

        <p>

         Date:<span>5/9/2025</span> 
        </p>
 </div>

</div>

<div>  <h1> <span class="inline-block w-4 h-4 rounded-full bg-blue-500 mr-3" aria-hidden="true"></span>
 Ready to ship</h1></div>


 <div>

<button class="bg-white text-black border border-gray-300 px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition">
  Track Order
</button>


 </div>


    </div>
    
    </div>



  );
};

export default MyorderFullWidthOrderPage;
