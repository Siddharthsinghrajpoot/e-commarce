import React from 'react'

const CardProductlist = ({item}) => {
  return (
    <div className="flex items-center w-full h-[70px] p-2 border border-gray-200 rounded-md overflow-hidden">
  {/* First Image */}
  <img
    src={item.image[0]}
    alt="Product Name"
    className="h-full w-[70px] object-fixed rounded-md mr-3"
  />

  {/* Product Info */}
  <div className="flex-1 flex flex-col justify-center overflow-hidden">
    <h2 className="text-sm font-semibold truncate">{item.name}</h2>
    <p className="text-xs text-gray-500 truncate">{item.description}</p>
    <div className="flex items-center space-x-2 text-xs text-gray-600">
      <span>Price: ${item.price}</span>
      <span>Category: {item.category}</span>
      <span>Sub: {item.subCategory}</span>
      <span>Sizes: {item.sizes}</span>
      <span className="text-red-500 font-bold">{item.bestseller===true?"bestseller":""}</span>
    </div>
  </div>
</div>

  )
}

export default CardProductlist
