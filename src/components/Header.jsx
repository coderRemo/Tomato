import React, { useState } from "react";
import { assets } from "../assets/assets";
// import { CiSearch } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  const [buttonToggle, setButtonToggle] = useState("Login");
  // console.log("header rendered");

  // useEffect(() => {
  //   // console.log("component mounted");
  // }, [buttonToggle]);

  return (
    <header className="flex items-center justify-between shadow-lg p-6">
      <div>
        <img className="ml-5" src={assets.logo} alt="logo" />
      </div>

      <div>
        <ul className="flex mr-5 gap-4">
          <li className="cursor-pointer">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="cursor-pointer">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="cursor-pointer">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li className="cursor-pointer">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
        </ul>
      </div>

      <div>
        <ul className="flex mr-5 gap-4">
          {/* <li className="flex items-center gap-1 cursor-pointer">
            <CiSearch className="text-[1.2rem]" /> Search
          </li> */}
          <li className="flex items-center gap-1 cursor-pointer">
            <AiOutlineUser className="text-[1.2rem]" /> User
          </li>
          <button
            className="border rounded-full px-3 border-orange-600 bg-orange-600 text-white"
            onClick={() =>
              buttonToggle === "Login"
                ? setButtonToggle("Logout")
                : setButtonToggle("Login")
            }
          >
            {buttonToggle}
          </button>
          <li>
            <img
              className="w-[20px] cursor-pointer"
              src={assets.bag_icon}
              alt="cart-logo"
            />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
