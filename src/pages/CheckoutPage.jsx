import { useEffect, useState } from "react";
import CheckoutForm from "../features/checkout/CheckoutForm";
import CheckoutSummary from "../features/checkout/CheckoutSummary";
import axios from "../config/axios";
import Loading from "../components/Loading";

export default function CheckoutPage() {
  const [getCart, setGetCart] = useState("");

  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    address: "",
    city: "",
    zipCode: "",
    country: "",
    province: "",
  });
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/auth/getCart")
      .then((res) => {
        setGetCart(res.data.getCartProduct);
      })
      .catch((err) => console.log(err))
      .finally(setLoading(false));
  }, []);

  console.log("flskdjfslf;skjfso;ljk", getCart);
  return (
    <>
      {loading && <Loading />}
      <div className="flex flex-row ">
        <div className="w-full flex justify-end ">
          <CheckoutForm
            input={input}
            setInput={setInput}
            file={file}
            getCart={getCart}
            setFile={setFile}
          />
        </div>
        <hr />
        <CheckoutSummary setFile={setFile} getCart={getCart} />
      </div>
    </>
  );
}
