import React from "react";
// import Modal from "./Modal";

function Contact() {
  return (
    <div>
      <div className="w-[508px] flex flex-col  mx-auto">
        <div className="text-2xl font-bold pt-8 pb-8">รายระเอียดการติดต่อ</div>

        <form className="flex flex-col gap-4">
          <div className="flex justify-between">
            <input
              type="text"
              placeholder="firstname"
              className=" px-8 py-2 border border-gray-600 rounded-md"
            />
            <input
              type="text"
              placeholder="lastname"
              className=" px-8 py-2 border border-gray-600 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-4">
            <textarea
              placeholder="address"
              className="py-4 px-4 border border-gray-600 rounded-md"
            />
            <input
              type="text"
              placeholder="phone"
              className="px-4 py-2 border border-gray-600 rounded-md"
            />
          </div>
          <div className="flex justify-end">
            <button className="bg-green-600 px-4 py-1.5 rounded-md text-white shadow-md">
              บันทึกข้อมูล
            </button>
          </div>
        </form>
      </div>
      <hr className="mx-4 my-4 border border-gray-300" />
      <div className="w-[508px] mx-auto flex flex-col ">
        <div className="text-2xl font-bold pt-8 pb-8">
          รายระเอียดการชำระเงิน
        </div>
        <div className=" flex flex-col justify-center items-center gap-4">
          <p>กรุณาชำระเงินผ่าน QR Code ภายใน 15 นาที</p>
          <img className="w-[200px] h-[200px] " src="/picture/QR.png" alt="" />
        </div>
      </div>
      <hr className="mx-4 my-4 border border-gray-300" />
      <div className="flex flex-col w-[508px] mx-auto  pb-8">
        <div className="text-2xl font-bold pt-8 pb-8">ยืนยันการชำระเงิน</div>
        <div className="flex flex-col justify-center items-center gap-4">
          <p>แอดไลน์และส่งสลิปได้ที่</p>
          <h1 className="font-bold text-xl cursor-pointer">@peet_1559</h1>
        </div>
      </div>
    </div>
  );
}

export default Contact;
