import React from "react";
import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.971599&lng=77.594566&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestaurants(json?.data?.cards[2]?.data?.data?.cards || []);
  };

  if (restaurants.length === 0) {
    return <Shimmer />;
  }
  console.log("****restaurants****", restaurants);
  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestaurants = restaurants.filter(
              (rt) => rt.avgRating > 4.5
            );
            setRestaurants(filteredRestaurants);
          }}
        >
          Top-Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
