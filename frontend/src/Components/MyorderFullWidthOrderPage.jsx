import React from "react";

const MyorderFullWidthOrderPage = ({ item }) => {
  return (
    <div className="w-full flex flex-row items-center px-5 gap-4 bg-white shadow-lg rounded-md py-3 mt-10">
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
 </div>




    </div>



  );
};

export default MyorderFullWidthOrderPage;
