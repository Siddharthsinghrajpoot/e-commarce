import React, { useContext, useState } from "react";
import { context } from "../context/ShopContext";
import Card from "../Components/Card";

const Collection = () => {
  const { products } = useContext(context);
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => setShowFilters(!showFilters);

  return (
    <div className="flex flex-col sm:flex-row gap-5 pt-10 border-t">
      {/* Left Side → Filter Panel */}
      <div className="sm:w-48 w-full mb-5 sm:mb-0">
        {/* Filter Button */}
        <button
          onClick={toggleFilters}
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          {showFilters ? "Close Filters" : "Open Filters"}
        </button>

        {/* Filter Panel */}
        {showFilters && (
          <div className="mt-4 p-4 border rounded-lg shadow bg-gray-50 w-full">
            <h3 className="font-semibold text-lg mb-2">CATEGORIES</h3>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" /> Men
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" /> Women
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" /> Kids
              </label>
            </div>
          </div>
        )}
     {showFilters && (
          <div className="mt-4 p-4 border rounded-lg shadow bg-gray-50 w-full">
            <h3 className="font-semibold text-lg mb-2">Type</h3>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" /> Tapweare
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" /> Battomweare
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" /> Winterweare
              </label>
            </div>
          </div>
        )}



      </div>

      {/* Right Side → Collection */}
      <div className="flex-1">
        <div className="flex justify-between items-center text-base sm:text-2xl mb-4">
          <h2 className="font-bold">
            All <span className="text-blue-600">COLLECTION</span>
          </h2>
          <select className="border-gray-300 border-2 text-sm px-2">
            <option value="relavent">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low → High</option>
            <option value="high-low">Sort by: High → Low</option>
          </select>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {products.map((item, index) => (
            <Card key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
