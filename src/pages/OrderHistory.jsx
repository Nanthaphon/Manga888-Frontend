import axios from "../config/axios";
import React, { useEffect, useState } from "react";

export default function OrderHistory() {
  const [orderUser, setOrderUser] = useState([]);

  console.log(orderUser);

  useEffect(() => {
    axios.get("order/getOrderByUser").then((res) => setOrderUser(res.data));
  }, []);
  return (
    <div>
      {orderUser.map((el) => (
        <div
          // key={id}
          className="border border-gray-600 rounded-md w-[200px] max-h-[300px] shadow-lg"
        >
          <div>
            <img src={el.image} alt="" className="object-cover" />
          </div>
          <div className=" flex flex-row justify-between px-4 py-1 h-full">
            <div className="font-bold">
              <h1></h1>
              <p>price</p>
              <p>{el.price}</p>
            </div>
            <div>
              <h1 className="font-bold">{el.name}</h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
