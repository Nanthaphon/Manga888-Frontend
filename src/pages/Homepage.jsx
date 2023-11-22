import React from "react";
import { MdTrolley } from "react-icons/md";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
import Card from "../components/Content/Card";

function Homepage() {
  return (
    <div>
      <div className="  bg-orange-400  ">
        <img className=" " src="./picture/wtf.png" alt="" />
      </div>
      <div>
        <div className="flex flex-row justify-between pb-2">
          <div className="text-4xl font-bold w-full text-center py-3">
            <h1>Add your product</h1>
          </div>
          {/* <Link to="/create">
            <button className="bg-green-600 rounded-md px-4  text-white">
              GO TO CREATE
            </button>
          </Link> */}
        </div>
        <div className="grid grid-cols-4">
          <Card price="200$" book="Naruto Fuck" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
