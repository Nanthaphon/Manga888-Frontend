import React from "react";
import { Link, Outlet } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Footer from "../Footer/Footer";
import { useAuth } from "../../hooks/use-auth";

// import { MdTrolley } from "react-icons/md";
import { BsFillBandaidFill } from "react-icons/bs";

import { ArrowRight } from "react-bootstrap-icons";

function Header() {
  const { logout, authUser } = useAuth();
  return (
    <>
      <header className="bg-green-500 flex justify-between px-8 h-20  items-center p-3 fixed top-0 left-0 right-0 shadow-md z-10">
        <div className="flex space-x-8 font-semibold text-white">
          <Link to="/">
            <button className="text-xl">Manga888</button>
          </Link>
        </div>
        <div className="flex gap-8 items-center">
          <Link to="/cart">
            <h1 className="font-bold text-white">ตะกร้าสินค้า</h1>
          </Link>
          {authUser && (
            <button
              onClick={logout}
              className=" bg-green-600 rounded-md px-6 py-1.5 text-white"
            >
              <p>Log out</p>
            </button>
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
