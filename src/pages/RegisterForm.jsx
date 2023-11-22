import React from "react";
import { useState } from "react";
import Joi from "joi";
import { useAuth } from "../hooks/use-auth";
import { Link } from "react-router-dom";
// import axios from "../config/axios";

const registerSchema = Joi.object({
  firstName: Joi.string().trim().required(),
  lastName: Joi.string().trim().required(),
  email: Joi.string().trim().email({ tlds: false }),
  password: Joi.string()
    .pattern(new RegExp("[a-zA-Z0-9]{3,30}$"))
    .trim()
    .required(),
  confirmPassword: Joi.string()
    .valid(Joi.ref("password"))
    .trim()
    .required()
    .strip(),
});

const validateRegister = (input) => {
  const { error } = registerSchema.validate(input, { abortEarly: false });

  if (error) {
    const result = error.details.reduce((acc, el) => {
      const { message, path } = el;
      acc[path[0]] = message;
      return acc;
    }, {});
    return result;
  }
};

export default function RegisterForm() {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({});

  const { register } = useAuth();
  // console.log(register);

  // const registerForm = async (registerInputObject) => {
  //   const res = await axios.post("/auth/register", registerInputObject); //ชื่อ registerInputObject มันตรงกัน ถ้าตั้งไม่ตรงกัน ต้องสร้าง object เอง เหี้ยไรก็ไม่รู้
  //   addAccessToken(res.data.accessToken);
  //   setAuthUser(res.data.user);
  // };

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const validationError = validateRegister(input);
    if (validationError) {
      return setError(validationError);
    }
    setError({});
    register(input).catch((err) => {
      console.log(err);
    });
  };

  return (
    <div className="flex flex-colx  h-screen items-center justify-center  ">
      <div className=" flex flex-col justify-center items-center gap-5 ">
        <div className=" text-center text-green-600  text-xl tracking-widest">
          REGISTER
        </div>
        <div className=" text-center text-gray-600">
          Please fill in the infomation below
        </div>
        <form
          className="flex flex-col gap-4 min-w-[400px]"
          onSubmit={handleSubmitForm}
        >
          <div>
            <input
              className="bg-gray-200 rounded-md py-3 w-full border border-gray-600 px-3"
              placeholder="First name"
              value={input.firstName}
              onChange={handleChangeInput}
              name="firstName"
              hasError={error.firstName}
            />
          </div>
          <div>
            <input
              className="bg-gray-200 rounded-md py-3 w-full border border-gray-600 px-3"
              placeholder="Last name"
              value={input.lastName}
              onChange={handleChangeInput}
              name="lastName"
              hasError={error.lastName}
            />
          </div>
          <div>
            <input
              className="bg-gray-200 rounded-md py-3 w-full border border-gray-600 px-3"
              placeholder="E-mail"
              value={input.email}
              onChange={handleChangeInput}
              name="email"
              hasError={error.email}
            />
          </div>
          <div>
            <input
              className="bg-gray-200 rounded-md py-3 w-full border border-gray-600 px-3"
              placeholder="Password"
              value={input.password}
              onChange={handleChangeInput}
              name="password"
              hasError={error.password}
            />
          </div>
          <div>
            <input
              className="bg-gray-200 rounded-md py-3 w-full border border-gray-600 px-3"
              placeholder="Confirm password"
              value={input.confirmPassword}
              onChange={handleChangeInput}
              name="confirmPassword"
              hasError={error.confirmPassword}
            />
          </div>

          <button className="bg-green-600 py-3 text-white rounded-md tracking-widest shadow-md">
            CREATE MY ACCOUNT
          </button>
        </form>
        <Link
          to="/login"
          className="bg-green-600 py-3 text-white rounded-md tracking-widest shadow-md w-full flex justify-center items-center"
        >
          BACK TO LOGIN
        </Link>
      </div>
    </div>
  );
}

// import { useState } from "react";
// import Joi from "joi";

// const registerSchema = Joi.object({
//   firstName: Joi.string().trim().required(),
//   lastName: Joi.string().trim().required(),
//   email: Joi.string().trim().email().required(),
//   password: Joi.string()
//     .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
//     .trim()
//     .required(),
//   confirmPassword: Joi.string().valid(Joi.ref("password")).trim().required(),
// });
// const validateRegister = (input) => {
//   const { error } = registerSchema.validate(input, { abortEarly: false });

//   if (error) {
//     const result = error.details.reduce((acc, el) => {
//       const { message, path } = el;
//       acc[path[0]] = message;
//       return acc;
//     }, {});
//     return result;
//   }
// };

// export default function RegisterForm() {
//   const [input, setInput] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
// }
// const { register } = useAuth();

// const handleChangeInput = (e) => {
//   setInput({ ...input, [e.target.name]: e.target.value });
// };

// const handleSubmitForm = (e) => {
//   e.preventDefault();
//   const valiedationError = validateRegister(input);
//   if (validationError) {
//     return setError(validationError);
//   }
//   setError({});
//   register(input).catch((err) => {
//     console.log(err);

//   } )
// };

// return (

// )
