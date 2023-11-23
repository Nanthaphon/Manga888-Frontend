import axios from "../config/axios";
import React, { useEffect, useState } from "react";
import { MdTrolley } from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";

function Viewproduct() {
  const [detail, setDetail] = useState({});
  const navagate = useNavigate();
  const [count, setCount] = useState(1);

  const addBook = () => {
    setCount(count + 1);
  };

  const deleteBook = () => {
    if (count <= 0) {
      return;
    }
    setCount(count - 1);
  };

  const { productId } = useParams();

  useEffect(() => {
    axios
      .get(`/product/viewProductByid/${productId}`)
      .then((res) => setDetail(res.data.findProduct));
  }, []);

  const handleCheckout = (e) => {
    if (count <= 0) {
      return;
    }
    e.preventDefault();
    const obj = {
      amount: count,
      productId: productId,
    };
    axios.post("/auth/me/cart", obj).then((res) => navagate("/checkout"));
  };
  return (
    <div className="mx-auto gap-8 flex flex-col justify-center w-full">
      <div className="flex justify-center font-bold text-3xl pt-8">
        {detail.name}
      </div>
      <div className="flex gap-5">
        <div>
          <img className="w-[300px] h-[400px]" src={detail.image} alt="" />
        </div>
        <div className="flex flex-col gap-5 w-11/12">
          <div className="flex flex-row gap-4 ">
            <div className="flex flex-row bg-gray-600 items-center w-25 justify-center px-4 py-1.5 rounded-md gap-2">
              <Link to="/">
                <div className="text-1xl text-white">กลับหน้าหลัก</div>
              </Link>
            </div>
          </div>
          <div className="text-2xl w-full">
            <p>{detail.description}</p>
          </div>
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
          <div className="flex flex-row bg-green-600 items-center w-24 justify-center px-4 py-1.5 rounded-md gap-2">
            <div
              className="text-1xl text-white cursor-pointer"
              onClick={handleCheckout}
            >
              Checkout
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Viewproduct;
