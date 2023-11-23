import axios from "axios";
import React from "react";

export default function CardAdmin({ id, price, name, imageUrl }) {
  const handleOnDelete = async () => {
    await axios.delete(`/product/deleteProduct/${id}`);
  };
  return (
    <div>
      <div
        // key={id}
        className="border border-gray-600 rounded-md w-[311px] max-h-[542px] shadow-lg"
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
          <button onClick={handleOnDelete}>ลบ</button>
          <button>แก้ไข</button>
        </div>
      </div>
    </div>
  );
}
