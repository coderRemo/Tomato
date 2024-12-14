import React, { useEffect, useState } from "react";
import { API_URL } from "../utils/constant";
import RestaurantCards from "./RestaurantCards";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  // console.log("Body Rendered");

  useEffect(() => {
    // console.log("useEffect called");

    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    // console.log(
    //   json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );

    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return (
    <div>
      <div className="flex gap-4 mt-5 items-center justify-center">
        <div className="">
          <input
            className="border border-gray-400 rounded-l-full pl-3"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className="border border-gray-400 px-2 rounded-r-full"
            onClick={() => {
              // console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              // console.log(filteredRestaurant);

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="border px-2 rounded border-orange-500 bg-orange-500 text-white"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating >= 4.5
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="mt-7 px-6 flex flex-wrap gap-5 justify-between">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCards
            key={restaurant?.info?.id}
            restuarantData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
