import React from "react";
import { NavLink } from "react-router-dom";
import AuthButton from "../../global/components/AuthButton";

const Navigation = () => {
  return (
    <nav className="flex justify-between w-full bg-white text-gray p-4 shadow-md">
      <NavLink className="font-semibold text-xl tracking-tight" to="/">
        wyr.
      </NavLink>
      <div className="md:items-center md:w-auto flex">
        <NavLink
          className="block mr-4 p-2 ml-2 bg-white text-black font-semibold leading-none border border-gray-100 rounded hover:border-transparent hover:bg-gray-100"
          activeClassName="active"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="block mr-4 p-2 ml-2 bg-white text-black font-semibold leading-none border border-gray-100 rounded hover:border-transparent hover:bg-gray-100"
          activeClassName="active"
          to="/leaderboard"
        >
          Leaderboard
        </NavLink>
        <NavLink
          className="block p-2 ml-2 mr-20 bg-yellow-400 text-black font-semibold leading-none border border-yellow-400 rounded hover:border-transparent hover:bg-yellow-500"
          activeClassName="active"
          to="/add"
        >
          New Poll
        </NavLink>
        <AuthButton />
      </div>
    </nav>
  );
};

export default Navigation;
