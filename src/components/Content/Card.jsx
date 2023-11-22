import React from "react";
import { MdTrolley } from "react-icons/md";
import { Link } from "react-router-dom";

function Card({ price, book }) {
  return (
    <div>
      <Link to="/viewproduct">
        <div className="border border-gray-600 rounded-md w-[311px] max-h-[542px] shadow-lg">
          <div>
            <img
              src="https://i.pinimg.com/564x/90/61/d2/9061d27de978c1c8617f5767f2033561.jpg"
              alt=""
              className="object-cover"
            />
          </div>
          <div className=" flex flex-row justify-between px-4 py-1 h-full">
            <div className="font-bold">
              <h2>{book}</h2>
              <p>{price}</p>
            </div>
            <div>
              <h1 className="font-bold">View product</h1>
              {/* <div className="pt-2 pr-4 cursor-pointer">
                <MdTrolley className="text-4xl" />
              </div> */}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;