import React, { useState } from "react";
import CreateProduct from "./CreateProduct";
import AllProduct from "./AllProduct";

export default function AdminPage() {
  const [mode, setMode] = useState("");

  return (
    <div className="flex flex-row">
      <div className="w-[200px] h-[1000px] bg-gray-300">
        <div className="flex flex-col items-center">
          <h1
            onClick={() => setMode("createproduct")}
            className="border-t border-l border-r w-full text-center py-1.5 cursor-pointer"
          >
            Create product
          </h1>
          <h1
            onClick={() => setMode("allproduct")}
            className="border w-full text-center py-1.5"
          >
            All product
          </h1>
        </div>
      </div>
      <div className=" w-full ">
        <div>
          {mode === "createproduct" ? <CreateProduct setMode={setMode} /> : ""}
        </div>
        <div>{mode === "allproduct" ? <AllProduct /> : ""}</div>
      </div>
    </div>
  );
}
