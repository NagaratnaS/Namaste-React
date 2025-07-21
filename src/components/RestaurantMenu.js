import { useParams } from "react-router-dom";
import useRestaurantmenu from "../utils/useRestaurantmenu"; // Custom hook to fetch restaurant menu
import Shimmer from "./Shimmer"; // Assuming you have a Shimmer component for loading state

const RestaurantMenu = () => {
  const { id } = useParams(); // This is to get the restaurant ID from the URL
  const restaurantInfo = useRestaurantmenu(id);

  if (restaurantInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    restaurantInfo?.cards?.[2]?.card?.card?.info || {};
  console.log("*******restaurantInfo*********", restaurantInfo);
  return (
    <div>
      <h1>{name}</h1>
      <h3>Cuisines: {cuisines.join(", ")}</h3>
      <h2>Menu</h2>
      <ul>
        <li key={id}>
          {name} - {costForTwoMessage}
        </li>
        ))
      </ul>
    </div>
  );
};

export default RestaurantMenu;
