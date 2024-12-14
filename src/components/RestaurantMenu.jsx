import React from "react";
import { SiPeakdesign } from "react-icons/si";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  //   console.log(resId);

  // ----- CUSTOM HOOK -----
  const restaurantMenu = useRestaurantMenu(resId);

  if (restaurantMenu === null) return "Loading...";

  const { name, cuisines, costForTwoMessage } =
    restaurantMenu?.cards[2]?.card?.card?.info;

  const { itemCards } =
    restaurantMenu?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card
      ?.card;

  return (
    <div className="mt-5 px-6">
      <h1 className="text-2xl font-bold">{name}</h1>
      <p>
        {cuisines.join(", ")}: {costForTwoMessage}
      </p>
      <div className="flex items-center gap-2 justify-center">
        <SiPeakdesign />
        <h2 className="text-md font-bold text-gray-400 tracking-widest">
          MENU
        </h2>
        <SiPeakdesign />
      </div>

      {/* ----- MENU LIST ----- */}
      <ul>
        {itemCards.map((item) => (
          <li>{item?.card?.info?.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
