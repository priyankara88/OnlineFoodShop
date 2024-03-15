import { useState } from "react";
import { assets } from "../../assets/assets";

const HeaderName = ["Home", "Menue", "Mobile App", "Contact-Us"];

const Nav = () => {
  const [Nav, setNav] = useState("Home");
  const SelectedNav = (value) => {
    setNav(value);
  };
  return (
    <div className="w-full  md:flex md:flex-row md:h-10 md:pt-3 justify-between ">
      <img src={assets.logo} alt="logo" />
      <ul className="md:flex md:flex-row  md:space-x-3 cursor-pointer">
        {HeaderName.map((key, index) => {
          return (
            <li
              className={`${key == Nav ? "border-b-2 border-gray-700" : ""}`}
              key={index}
              onClick={() => SelectedNav(key)}
            >
              {key}
            </li>
          );
        })}
      </ul>
      <div className="md:flex md:flex-row md:space-x-3 md:pr-2 ">
        <img src={assets.search_icon} alt="icon1" />
        <img src={assets.basket_icon} alt="icon2" />
        <div className=" w-2 h-2 absolute md:right-40 md:top-2 rounded-full bg-red-600 " />
        <button className="rounded-lg border-2 border-gray-700 md:px-2 hover:bg-slate-300">
          sign in
        </button>
      </div>
    </div>
  );
};

export default Nav;
