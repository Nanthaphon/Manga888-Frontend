import { Link } from "react-router-dom";

function TotalPrice() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-row gap-14 justify-center text-2xl font-semibold">
        <div>ยอดชำระ</div>
        <div>฿100</div>
      </div>
      <div className="flex flex-row justify-center gap-3 ">
        <Link to="/home">
          <button className="bg-gray-300 rounded-md px-8 py-3 shadow-md cursor-pointer">
            กลับหน้าหลัก
          </button>
        </Link>
        <button className="bg-green-600 text-white rounded-md shadow-md  px-8 py-3">
          ชำระเงิน
        </button>
      </div>
    </div>
  );
}

export default TotalPrice;
