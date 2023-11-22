import React from "react";
import CartItem from "./Cartitem";
import TotalPrice from "./TotalPrice";

export default function Cart() {
  return (
    <div className="flex flex-col my-24">
      <div className="text-3xl font-bold flex justify-center">
        ตะกร้าสินค้านรก
      </div>
      <hr className="border border-gray-300 my-8" />
      <CartItem />
      <TotalPrice />
    </div>
  );
}
