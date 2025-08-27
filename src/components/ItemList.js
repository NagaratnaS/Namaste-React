import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/CartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  function handleAddToCart(item) {
    dispatch(addItems(item));
  }
  return (
    <div className="space-y-4 px-4">
      {items.map((item) => {
        const { id, name, description, imageId, price } = item?.card?.info;
        const formattedPrice = price ? `₹${price / 100}` : "Price Unavailable";

        return (
          <div
            data-testid="foodItems"
            key={id}
            className="flex gap-4 p-4 rounded-xl border border-gray-300/40 shadow-md hover:shadow-lg transition-shadow bg-white"
          >
            {/* Image */}
            {imageId && (
              <img
                src={CDN_URL + imageId}
                alt={name}
                className="w-24 h-24 object-cover rounded-lg"
              />
            )}

            {/* Text Content */}
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
                <span className="text-sm font-medium text-gray-700">
                  {formattedPrice}
                </span>
              </div>

              {description && (
                <p className="text-sm text-gray-600 mt-1">{description}</p>
              )}
              <button
                className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                onClick={() => handleAddToCart(item)}
              >
                Add +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
