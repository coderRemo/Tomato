import React from "react";
import { CDN_URL } from "../utils/constant";

const RestaurantCards = (props) => {
  const { restuarantData } = props;
  // console.log(restuarantData);

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    restuarantData?.info;

  return (
    <div className="transition-transform duration-200 ease-out hover:scale-90">
      <img
        className="rounded-3xl w-[400px] h-[450px]"
        alt=""
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="font-bold text-slate-700">
        <h3>{name}</h3>
        <p>
          ⭐ <span>{avgRating} stars</span>
        </p>
      </div>
      <div className="text-slate-500">
        <p>{cuisines.join(", ")}</p>
        <h4>{costForTwo}</h4>
        <p>{sla?.slaString} minutes</p>
      </div>
    </div>
  );
};

export default RestaurantCards;
