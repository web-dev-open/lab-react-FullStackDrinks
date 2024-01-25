import React from "react";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="flex justify-center items-center h-15  w-full bg-cyan-500 px-9 py-10">
    <Link to={'/'}>

     <IoHome size={100} color="#fff"/>
    </Link>
    </header>
  );
};

export default Header;