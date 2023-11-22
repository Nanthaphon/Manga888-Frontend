import React from "react";
import { MdTrolley } from "react-icons/md";
import { Link } from "react-router-dom";

function Card({ price, book, imageUrl, id }) {
  return (
    <div>
      <Link to={`/viewproduct/${id}`}>
        <div
          key={id}
          className="border border-gray-600 rounded-md w-[311px] max-h-[542px] shadow-lg"
        >
          <div>
            <img src={imageUrl} alt="" className="object-cover" />
          </div>
          <div className=" flex flex-row justify-between px-4 py-1 h-full">
            <div className="font-bold">
              <h2>{book}</h2>
              <p>{price}</p>
            </div>
            <div>
              <h1 className="font-bold">View product</h1>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
