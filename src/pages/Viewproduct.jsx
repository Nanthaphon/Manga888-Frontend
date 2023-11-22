import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdTrolley } from "react-icons/md";
import { Link, useParams } from "react-router-dom";

function Viewproduct() {
  const [detail, setDetail] = useState({});

  const { productId } = useParams();

  useEffect(() => {
    axios
      .get(`/product/viewProductByid/${productId}`)
      .then((res) => setDetail(res.data.findProduct));
  }, []);

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
            <div className="flex flex-row bg-green-600 items-center w-24 justify-center px-4 py-1.5 rounded-md gap-2">
              <div>
                <MdTrolley className="text-3xl text-white" />
              </div>
              <div className="text-1xl text-white">เพิ่ม</div>
            </div>
          </div>
          <div className="text-2xl w-full">
            <p>{detail.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Viewproduct;
