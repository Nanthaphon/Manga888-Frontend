import { useState } from "react";
// import { useAuth } from "../../../hooks/use-auth";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function QRInputSlip({ setFile }) {
  const { orderId } = useParams();

  //   const { uploadSlipImage } = useAuth();

  return (
    // <div className="w-full flex flex-col text-neutral-500">
    //   <div>please upload slip to confirm your order</div>
    //   <div className="w-full flex flex-col ">
    //     <input
    //       onChange={(e) => {
    //         if (e.target.files[0]) {
    //           setFile(e.target.files[0]);
    //           console.log(e.target.files[0]);
    //         }
    //       }}
    //       type="file"
    //       className="border text-sm w-80 mt-6"
    //     />
    //     {/* <button
    //       onClick={handleClick}
    //       className="border rounded-full w-32 h-8 ml-[100px] bg-orange-600 text-white font-bold mt-4 "
    //     >
    //       Upload
    //     </button> */}
    //   </div>
    // </div>
    <div></div>
  );
}
