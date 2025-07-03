import React from "react";
import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);
  console.log(restaurants);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestaurants = restaurantList.filter(
              (rt) => rt.item.aggregateRating.ratingValue > 4.5
            );
            setRestaurants(filteredRestaurants);
          }}
        >
          Top-Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.position} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
