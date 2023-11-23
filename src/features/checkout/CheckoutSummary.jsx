// import { useCart } from "../../hooks/use-cart";
// import CheckoutLists from "./CheckoutLists";

import QRHeader from "../qr/QRHeader";
import QRImage from "../qr/QRImage";
import QRInputSlip from "../qr/QRInputSlip";

export default function CheckoutSummary({ file, setFile, getCart }) {
  //   const { cart, grandTotal } = useCart();
  const price = +getCart?.product.price;
  const amount = +getCart?.amount;
  const result = price * amount;
  return (
    <div className="pl-[48px] pt-12 gap-5 w-[70%] bg-neutral-100 ">
      <div className="flex flex-row justify-between mb-2 w-[305px]">
        <div className="text-[16px]">Subtotal</div>
        <div className="text-[16px] font-semibold">
          {Number(getCart.product.price).toLocaleString("en-US")}
        </div>
      </div>
      <div className="flex flex-row justify-between mb-2 w-[305px]">
        <div className="text-[16px]">Amount</div>
        <div className="text-[14px] text-neutral-500">{getCart.amount}</div>
      </div>
      <div className="flex flex-row justify-between mb-2 w-[305px]">
        <div className=" text-[19px] font-semibold">Total</div>
        <div className="font-semibold text-[17px]">
          <span className="font-thin text-[15px]">THB </span>
          {Number(result).toLocaleString("en-US")}
        </div>
      </div>
      <div className="">
        <QRHeader />
        <QRImage />
        <QRInputSlip file={file} setFile={setFile} />
      </div>
    </div>
  );
}
