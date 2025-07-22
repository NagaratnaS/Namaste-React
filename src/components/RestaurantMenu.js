import { useParams } from "react-router-dom";
import useRestaurantmenu from "../utils/useRestaurantmenu"; // Custom hook to fetch restaurant menu
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory"; // Assuming you have a Shimmer component for loading state

const RestaurantMenu = () => {
  const { id } = useParams(); // This is to get the restaurant ID from the URL
  const restaurantInfo = useRestaurantmenu(id);

  if (restaurantInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    restaurantInfo?.cards?.[2]?.card?.card?.info || {};

  const category =
    restaurantInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (ele) =>
        ele?.card?.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log("*******restaurantInfo*********", category);
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
      {category.map((ele, index) => (
        <RestaurantCategory data={ele?.card?.card} key={index} />
      ))}
    </div>
  );
};

export default RestaurantMenu;
