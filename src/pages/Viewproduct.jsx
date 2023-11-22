import React from "react";
import { MdTrolley } from "react-icons/md";
import { Link } from "react-router-dom";

function Viewproduct() {
  return (
    <div className="mx-auto gap-8 flex flex-col justify-center w-full">
      <div className="flex justify-center font-bold text-3xl pt-8">
        My Hero Academia
      </div>
      <div className="flex gap-5">
        <div>
          <img
            className="w-[300px] h-[400px]"
            src="https://i.pinimg.com/564x/90/61/d2/9061d27de978c1c8617f5767f2033561.jpg"
            alt=""
          />
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
            praesentium magnam aspernatur quae voluptas tempora autem
            exercitationem adipisci ratione esse blanditiis, deserunt maiores
            cum placeat assumenda, culpa itaque eum neque recusandae dicta rem
            accusantium modi? Non illo iure dolorum. Ullam repudiandae odit
          </div>
        </div>
      </div>
    </div>
  );
}

export default Viewproduct;
