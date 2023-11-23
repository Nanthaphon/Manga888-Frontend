import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function CardAdmin({
  id,
  price,
  name,
  imageUrl,
  handleOnDelete,
  setRefresh,
  refresh,
}) {
  useEffect(() => {}, [refresh]);

  return (
    <div>
      <div
        // key={id}
        className="border border-gray-600 rounded-md w-[200px] max-h-[300px] shadow-lg"
      >
        <div>
          <img src={imageUrl} alt="" className="object-cover" />
        </div>
        <div className=" flex flex-row justify-between px-4 py-1 h-full">
          <div className="font-bold">
            <h1>{name}</h1>
            <p>{price}</p>
          </div>
          <div>
            <h1 className="font-bold">View product</h1>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <button
            onClick={() => {
              setRefresh((prev) => !prev);
              handleOnDelete(id);
            }}
          >
            ลบ
          </button>
          <Link to={`/editproduct/${id}`}>
            <button> แก้ไข</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
