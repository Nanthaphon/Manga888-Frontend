import { useState } from "react";
// import { useAuth } from "../../hooks/use-auth";
import Joi from "joi";
import { useNavigate, useParams } from "react-router-dom";

import CheckoutButton from "../checkout/CheckoutButton";
// import CheckoutErrorMessage from "../checkout/CheckoutErrorMessage";
import CheckoutInput from "./CheckoutInput";
import { useAuth } from "../../hooks/use-auth";
import axios from "../../config/axios";
import Loading from "../../components/Loading";
// import { useCart } from "../../hooks/use-cart";

// const addressSchema = Joi.object({
//   firstName: Joi.string().required().trim(),
//   lastName: Joi.string().required().trim(),
//   mobile: Joi.string()
//     .pattern(/^[0-9]{9,10}$/)
//     .required()
//     .trim(),
//   address: Joi.string().required(),
//   city: Joi.string().required(),
//   zipCode: Joi.string()
//     .pattern(/^[0-9]{5}$/)
//     .required(),
//   country: Joi.string().required(),
//   province: Joi.string().required(),
// });

// const validateAdress = (input) => {
//   const { error } = addressSchema.validate(input, { abortEarly: false });
//   console.log(error);
//   if (error) {
//     const result = error.details.reduce((acc, el) => {
//       const { message, path } = el;
//       acc[path[0]] = message;
//       return acc;
//     }, {});
//     return result;
//   }
// };

export default function CheckoutForm({
  formName,
  formDescription,
  input,
  setInput,
  file,
  getCart,
  setFile,
}) {
  const [error, setError] = useState({});
  const navigate = useNavigate();
  //   const { productId } = useParams();
  //   const { checkoutAddress } = useAuth();
  //   const { setCart, cart } = useCart();
  const { authUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  console.log("getCart", getCart);

  //   const handleSubmitForm = (e) => {
  //     e.preventDefault();
  //     // const validateError = validateAdress(input);
  //     // console.log(validateError);
  //     // if (validateError) {
  //     //   return setError(validateError);
  //     // }
  //     // setError({});
  //     checkoutAddress(input)
  //       .then((res) => {
  //         setCart();
  //         console.log("ress", res);
  //         navigate(`/auth/qr/order/${res.data.order.id}`);
  //       })
  //       .catch((err) => {
  //         console.log(err.response.data);
  //         setError({ mobile: err.response.data.message });
  //       });
  //   };
  const handlePay = () => {
    try {
      const formData = new FormData();
      //   formData.append("total_Price", 100);
      formData.append("userId", authUser.id);
      formData.append("slipImageUrl", file);
      formData.append("productId", getCart.productId);
      formData.append("amount", getCart.amount);
      formData.append("totalPrice", getCart.amount * getCart.product.price);
      console.log(formData.get("slipImageUrl"));
      setLoading(true);
      axios
        .post("/order/checkout", formData)
        .then((res) => console.log("xxxxxxxxxxxxxxxxxxxxxxx", res));
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
      navigate("/payment");
    }
  };

  return (
    <>
      {loading && <Loading />}
      <div className="border-r-2  ">
        <div
          //   onSubmit={handleSubmitForm}
          className=" gap-3 m-auto w-[600px] p-10"
        >
          <div className="">
            <h1 className="text-xl mb-3 font-bold">{formName}</h1>
            <p className="text-xs mb-2">{formDescription}</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 pb-2 justify-between">
              <div className="w-[49%]">
                <div>
                  <CheckoutInput
                    placeholder={"First name"}
                    value={input.firstName}
                    onChange={handleChangeInput}
                    name="firstName"
                    hasError={error.firstName}
                  />
                </div>
                {/* <div>
                  {error.firstName && (
                    // <CheckoutErrorMessage message={error.firstName} />
                  )}
                </div> */}
              </div>
              <div className="w-[49%]">
                <div>
                  <CheckoutInput
                    placeholder={"Last name"}
                    value={input.lastName}
                    onChange={handleChangeInput}
                    name="lastName"
                    hasError={error.lastName}
                  />
                </div>
                {/* <div>
                  {error.lastName && (
                    <CheckoutErrorMessage message={error.lastName} />
                  )}
                </div> */}
              </div>
            </div>
            <div className="col-span-full">
              <CheckoutInput
                placeholder={"Phone number"}
                value={input.mobile}
                onChange={handleChangeInput}
                name="mobile"
                hasError={error.mobile}
              />
            </div>
            {/* <div>
              {error.mobile && <CheckoutErrorMessage message={error.mobile} />}
            </div> */}
            <div>
              <CheckoutInput
                placeholder={"Address"}
                value={input.address}
                onChange={handleChangeInput}
                name="address"
                hasError={error.address}
              />
            </div>
            {/* <div>
              {error.address && (
                <CheckoutErrorMessage message={error.address} />
              )}
            </div> */}
            <div>
              <CheckoutInput
                placeholder={"City"}
                value={input.city}
                onChange={handleChangeInput}
                name="city"
                hasError={error.city}
              />
            </div>
            {/* <div>
              {error.city && <CheckoutErrorMessage message={error.city} />}
            </div> */}
            <div>
              <CheckoutInput
                placeholder={"Zip code"}
                value={input.zipCode}
                onChange={handleChangeInput}
                name="zipCode"
                hasError={error.zipCode}
              />
            </div>
            {/* <div>
              {error.zipCode && (
                <CheckoutErrorMessage message={error.zipCode} />
              )}
            </div> */}
            <div>
              <CheckoutInput
                placeholder={"Country"}
                value={input.country}
                onChange={handleChangeInput}
                name="country"
                hasError={error.country}
              />
            </div>
            {/* <div>
              {error.country && (
                <CheckoutErrorMessage message={error.country} />
              )}
            </div> */}
            <div>
              <CheckoutInput
                placeholder={"Province"}
                value={input.province}
                onChange={handleChangeInput}
                name="province"
                hasError={error.province}
              />
            </div>
            <div className="w-full flex flex-col text-neutral-500">
              <div>please upload slip to confirm your order</div>
              <div className="w-full flex flex-col ">
                <input
                  onChange={(e) => {
                    if (e.target.files[0]) {
                      setFile(e.target.files[0]);
                      console.log(e.target.files[0]);
                    }
                  }}
                  type="file"
                  className="border text-sm w-80 mt-6"
                />
                {/* <button
          onClick={handleClick}
          className="border rounded-full w-32 h-8 ml-[100px] bg-orange-600 text-white font-bold mt-4 "
        >
          Upload
        </button> */}
              </div>
            </div>
            {/* <div>
              {error.province && (
                <CheckoutErrorMessage message={error.province} />
              )}
            </div> */}
            <div
              className="mt-2"
              //  onClick={() => navigate("/payment")}
            >
              <CheckoutButton buttonName="Pay Now" handlePay={handlePay} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
