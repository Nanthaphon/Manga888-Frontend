import React, { useState } from "react";
import { ImBin } from "react-icons/im";

function CartItem() {
  const [count, setCount] = useState(10);

  const addBook = () => {
    setCount(count + 1);
  };

  const deleteBook = () => {
    setCount(count - 1);
  };

  return (
    <div className="flex flex-row justify-between mx-52">
      <div className="flex flex-row gap-8 items-center ">
        <div>
          <img
            className="w-[150px] h-[200px] mx-8 my-8 object-cover"
            src="https://i.pinimg.com/564x/90/61/d2/9061d27de978c1c8617f5767f2033561.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-4 ">
          <h1 className="text-2xl font-semibold">My Hero Academy</h1>
          <div className="flex flex-row gap-8 text-xl justify-around">
            <div>price</div>
            <div>฿100</div>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center gap-8">
        <div className="flex flex-row text-2xl gap-8 items-center bg-gray-200  ">
          <button
            className="border border-gray-600 px-6 py-1.5 bg-gray-300"
            onClick={deleteBook}
          >
            -
          </button>
          <p>{count}</p>
          <button
            className="border border-gray-600 px-6 py-1.5 bg-gray-300"
            onClick={addBook}
          >
            +
          </button>
        </div>
        <div className="text-xl border border-gray-500  text-gray-600 px-8 py-1.5 rounded-md  flex items-center gap-2">
          <ImBin className="text-red-600" />
          <div className="text-red-600">ลบ</div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
