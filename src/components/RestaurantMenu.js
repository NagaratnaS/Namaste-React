import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_LIST_URL } from "../utils/constants";
import Shimmer from "./Shimmer"; // Assuming you have a Shimmer component for loading state

const RestaurantMenu = () => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const { resId } = useParams(); // This is to get the restaurant ID from the URL, but it's not used in this example
  const fetchData = async () => {
    const data = await fetch(
      `${RESTAURANT_LIST_URL}${resId}&catalog_qa=undefined`
    );
    const json = await data.json();
    setRestaurantInfo(json.data);
    console.log(json.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (restaurantInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwo } =
    restaurantInfo?.cards?.[2]?.card?.card?.info || {};
  //const { itemCards } = restaurantInfo?.cards?.[2]?.groupedCard.cardGroupMap.REGULAR.cards[1].card?.card || {};
  const { itemCards } = restaurantInfo?.cards?.[2]?.card?.card || {};

  return (
    <div>
      <h1>{name}</h1>
      <h3>Cuisines: {cuisines.join(", ")}</h3>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{" "}
            {item.card.info.price || item.card.info.defaultPrice}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
