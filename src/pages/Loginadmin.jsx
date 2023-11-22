import React from "react";

function Loginadmin() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className=" flex flex-col justify-center items-center gap-5">
        <div className=" text-center text-green-600  text-xl tracking-widest">
          ADMIN
        </div>
        <div className=" text-center text-gray-600">
          Please enter your e-mail and password
        </div>
        <form className="flex flex-col gap-5  min-w-[400px]">
          <div>
            <input
              className="bg-gray-200 rounded-md py-3 w-full border border-gray-600 px-3 "
              placeholder="Firstname"
            />
          </div>
          <div>
            <input
              className="bg-gray-200 rounded-md py-3 w-full border border-gray-600 px-3"
              placeholder="lastname"
            />
          </div>
          <button className="bg-green-600 py-3 text-white rounded-md tracking-widest">
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
}

export default Loginadmin;
