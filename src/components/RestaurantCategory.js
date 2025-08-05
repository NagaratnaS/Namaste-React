import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowItems(!showItems);
  };
  return (
    <div
      className="w-6/12 md:w-3/4 lg:w-2/3 mx-auto my-6 rounded-2xl bg-gray-800 border border-gray-400/20 shadow-2xl transition-all cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex justify-between items-center p-16 cursor-pointer bg-gray-900 hover:bg-gray-800 rounded-t-2xl transition">
        <span className="font-semibold text-white text-md">
          {data?.title} ({data?.itemCards?.length} )
        </span>
        <span className="text-white text-lg transition-transform duration-300">
          ⬇️
        </span>
      </div>
      {showItems ? <ItemList items={data?.itemCards} /> : null}
    </div>
  );
};

export default RestaurantCategory;
